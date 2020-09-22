(function () {
    let template = document.createElement("template");
    template.innerHTML = `<input type="text" value="23" id="Input">`;


    class OGRAMM_bld extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }

    } customElements.define("com-gmail-cse-ari007-d3forcebubble-bps", OGRAMM_bld);

    }) ();