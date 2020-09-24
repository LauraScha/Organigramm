'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


(function () {

    let template = document.createElement("template");
    template.innerHTML = `<div>
<svg width=100%
height=100%
id=d3forcebubble></svg></div>
<div id="chart-container">
            <h3> ORGA </h3></div>  `;
    
    class FBU extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
            this._props = this.d3ForceBubbleDefaultSettings();
            this._init = true;
            this._firstUpdate = true;
            this._firstResize = true;
            this._selectionEvent = false;
        } onCustomWidgetBeforeUpdate(changedProperties) {

        } onCustomWidgetAfterUpdate(changedProperties) {
        }
    }
 customElements.define("com-gmail-cse-ari007-d3forcebubbl", FBU);
})();
