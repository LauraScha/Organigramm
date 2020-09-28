
(function () {

    let template = document.createElement("template");
    template.innerHTML = `<form>
        <div class="Organigramm">
        <svg width=100%
        height=100%></svg>
    <div class="container_1"> <h3>Organigramm</h3>
            <select name="Add/remove node">
                    <option> Add node</option>
                    <option> remove node </option> </select> </div>

                </div>
    .container_1 select {
    font-size:10px;
    padding:0px;
    margin:10px;
    height:60px;
    float:right;
    border:1px solid #494949;
    font-family:verdana;
    min-width:40px;
    }

</form>
   `;

    class OGRAMM extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            this._props = this.DefaultSettings();
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
        }


        onCustomWidgetAfterUpdate(changedProperties) {
            this.init();
        }
        DefaultSettings() {
            return {
                key: 0, name: "Osahito", gender: "M", Jahresgehalt: 400000, Arbeitsbeginn: "2000", Arbeitsende: "2040"
            };
        }
        init() {
            if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
            var $ = go.GraphObject.make;  // for conciseness in defining templates

            myDiagram =
                $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
                    {
                        allowCopy: false,
                        layout:  // create a TreeLayout for the family tree
                            $(go.TreeLayout,
                                { angle: 90, nodeSpacing: 5 })
                    });

            var bluegrad = $(go.Brush, "Linear", { 0: "rgb(60, 204, 254)", 1: "rgb(70, 172, 254)" });
            var pinkgrad = $(go.Brush, "Linear", { 0: "rgb(255, 192, 203)", 1: "rgb(255, 142, 203)" });

            // Set up a Part as a legend, and place it directly on the diagram
            myDiagram.add(
                $(go.Part, "Table",
                    { position: new go.Point(10, 10), selectable: false },
                    $(go.TextBlock, "Key",
                        { row: 0, font: "bold 10pt Helvetica, Arial, sans-serif" }),  // end row 0
                    $(go.Panel, "Horizontal",
                        { row: 1, alignment: go.Spot.Left },
                        $(go.Shape, "Rectangle",
                            { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
                        $(go.TextBlock, "Males",
                            { font: "bold 8pt Helvetica, bold Arial, sans-serif" })
                    ),  // end row 1
                    $(go.Panel, "Horizontal",
                        { row: 2, alignment: go.Spot.Left },
                        $(go.Shape, "Rectangle",
                            { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
                        $(go.TextBlock, "Females",
                            { font: "bold 8pt Helvetica, bold Arial, sans-serif" })
                    )  // end row 2
                ));

            // get tooltip text from the object's data
            function tooltipTextConverter(person) {
                var str = "";
                str += "Born: " + person.birthYear;
                if (person.deathYear !== undefined) str += "\nDied: " + person.deathYear;
                if (person.reign !== undefined) str += "\nReign: " + person.reign;
                return str;
            }

            // define tooltips for nodes
            var tooltiptemplate =
                $("ToolTip",
                    { "Border.fill": "whitesmoke", "Border.stroke": "black" },
                    $(go.TextBlock,
                        {
                            font: "bold 8pt Helvetica, bold Arial, sans-serif",
                            wrap: go.TextBlock.WrapFit,
                            margin: 5
                        },
                        new go.Binding("text", "", tooltipTextConverter))
                );

            // define Converters to be used for Bindings
            function genderBrushConverter(gender) {
                if (gender === "M") return bluegrad;
                if (gender === "F") return pinkgrad;
                return "orange";
            }

            // replace the default Node template in the nodeTemplateMap
            myDiagram.nodeTemplate =
                $(go.Node, "Auto",
                    { deletable: false, toolTip: tooltiptemplate },
                    new go.Binding("text", "name"),
                    $(go.Shape, "Rectangle",
                        {
                            fill: "orange",
                            stroke: "black",
                            stretch: go.GraphObject.Fill,
                            alignment: go.Spot.Center
                        },
                        new go.Binding("fill", "gender", genderBrushConverter)),
                    $(go.Panel, "Vertical",
                        $(go.TextBlock,
                            {
                                font: "bold 8pt Helvetica, bold Arial, sans-serif",
                                alignment: go.Spot.Center,
                                margin: 6
                            },
                            new go.Binding("text", "name")),
                        $(go.TextBlock,
                            new go.Binding("text", "Jahresgehalt"))
                    )
                );

            // define the Link template
            myDiagram.linkTemplate =
                $(go.Link,  // the whole link panel
                    { routing: go.Link.Orthogonal, corner: 5, selectable: false },
                    $(go.Shape));  // the default black link shape

            myDiagram.model = new go.TreeModel(this._props);
        }

    };
    customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);


})();
