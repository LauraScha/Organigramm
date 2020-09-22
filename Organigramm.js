

        (function () {
                let template = document.createElement("template");
    template.innerHTML = `

    <div>
        <svg width=100% height=100% id= "chart-Organigramm"></svg></div>
                <style>
.node {
   cursor:default;
}
.node text {
    font: 12px sans-serif;
    fill: #FFFFFF;
}
 
.node rect {
 
}
 
/* Lines */
.link {
  fill: none;
  stroke: #424242;
  stroke-width: 1.5px;
}
 
#body {
  cursor: move;
  height:700px;
  width:100%;
  background-color:#fff;
  border:1px solid black;
  margin: 0px 0px 10px 0px;
}
</style>`;
                
                
            
    const dataSource = {
    chart: {
        caption: "Org Chart",
        captionalignment: "left",
        viewmode: "1",
        showformbtn: "0",
        theme: "fusion",
        divlinealpha: "0"
    },
    dataset: [
        {
      data: [
        {
          id: "01",
          label: "Prodato",
          color: "#5D62B5",
          x: "60",
          y: "680",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
    ]
        }
   ]
};
            
            class OGRAMM extends HTMLElement {
                constructor() {
                    super();
                    let shadowRoot = this.attachShadow({ mode: "open" });
                    //shadowRoot.appendChild(template.content.cloneNode(true));
                    // this._props = this.d3ForceBubbleDefaultSettings();
                    //this._init = true;
                    // this._firstUpdate = true;
                    // this._firstResize = true;
                    //this._selectionEvent = false;
                }
                onCustomWidgetBeforeUpdate(changedProperties) {
                    FusionCharts.ready(function() {
                        var myChart = new FusionCharts({
                            type: "dragnode",
                            renderAt: "chart-container",
                            width: "100%",
                            height: "100%",
                            dataFormat: "json",
                            dataSource
                    }).render();
});
                }

            }
            customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);


        })();
