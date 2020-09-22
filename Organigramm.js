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

    ]

(function () {
    let template = document.createElement("template");
    template.innerHTML = `

    <div>
        <svg width=100% height=100% id= "chart-Organigramm"></svg></div>
    <style>





    </style>`;


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
         onCustomWidgetAfterUpdate(changedProperties) {
        try {
            await host.loadScript("https://github.com/LauraScha/Organigramm/blob/master/Orgaserver", shadow);
        } catch (e) {
            console.log(JSON.stringify(e));
        }
        finally { host.drawChart(data, props); }
    };



    }







        
})();
