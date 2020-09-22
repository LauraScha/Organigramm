

(function () {

    let template = document.createElement("template");
    template.innerHTML = 
        `<div> "" <\div> <input type ="text" value= "23" id="Input">`;

    class OGRAMM extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            this.drawChart(this.$data, this._props);
        }
        drawChart(value, config) {

        }

    };
   
    customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);


})();
