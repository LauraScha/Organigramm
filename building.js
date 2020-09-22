(function () {
    let template = document.createElement("template");
    template.innerHTML = `<form id="form">
        <table style ="width:100%;"><tr><td><div>Data:<\div><div><textarea style="min-height: 150px; width:100%;">[{"Das ist ein Test"}]<\textarea><\div><\form><style>:host{display:block;padding:1em 1em 1em 1em;}
        input:out-of-range{background-color:rgba(255,0,0,0.25);}<\style>`;

    class OGRAMM_bld extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }

    } customElements.define("com-gmail-cse-ari007-d3forcebubble-bps", OGRAMM_bld);

    }) ();
