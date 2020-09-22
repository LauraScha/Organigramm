

        (function () {
            
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
          
                }
                onCustomWidgetBeforeUpdate(changedProperties) {
                     var myChart = new FusionCharts({
                    type: "dragnode",
                    renderAt: "chart-container",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render(); 
                }
                    
});
                }

            }
            customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);


        })();
