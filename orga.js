(function () {

const dataSource = {
  chart: {
    caption: "Silvers Financial Services - Org Chart",
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
          label: "Chairman{br}Board of Directors",
          color: "#5D62B5",
          x: "60",
          y: "680",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "01.01",
          label: "Executive Director",
          color: "#F2726F",
          x: "60",
          y: "600",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "01.02",
          label: "",
          x: "60",
          y: "520",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "01.03",
          label: "Deputy Executive{br}Director",
          color: "#BC95DF",
          x: "40",
          y: "520",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "02",
          label: "",
          x: "60",
          y: "440",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "02.01",
          label: "",
          x: "40",
          y: "440",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "02.01.01",
          label: "Director of Business and{br} Invt. Facilitation Unit",
          color: "#62B58F",
          x: "40",
          y: "370",
          shape: "rectangle",
          width: "150",
          height: "50"
        },
        {
          id: "02.02",
          label: "",
          x: "10",
          y: "440",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "02.02.01",
          label: "Trade Development{br}Officer",
          color: "#62B58F",
          x: "10",
          y: "370",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "02.03",
          label: "",
          x: "70",
          y: "440",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "02.03.01",
          label: "Director of Administration{br}and Projects",
          color: "#62B58F",
          x: "70",
          y: "370",
          shape: "rectangle",
          width: "160",
          height: "50"
        },
        {
          id: "02.04",
          label: "",
          x: "100",
          y: "440",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "02.04.01",
          label: "Director of Business{br}Development",
          color: "#62B58F",
          x: "100",
          y: "370",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "03",
          label: "",
          x: "10",
          y: "270",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.01",
          label: "Export{br}Development{br}Officer",
          color: "#67CDF2",
          x: "5",
          y: "240",
          shape: "rectangle",
          width: "130",
          height: "50"
        },
        {
          id: "03.02",
          label: "",
          x: "40",
          y: "240",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.02.01",
          label: "SME Development{br}Coordinator",
          color: "#67CDF2",
          x: "25",
          y: "240",
          shape: "rectangle",
          width: "150",
          height: "50"
        },
        {
          id: "03.02.02",
          label: "Business and{br}Investment Facilitation",
          color: "#FFC533",
          x: "40",
          y: "135",
          shape: "rectangle",
          width: "100",
          height: "50"
        },
        {
          id: "03.03",
          label: "",
          x: "70",
          y: "240",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.03.01",
          label: "Events Planning and {br}PR Coordinator",
          color: "#67CDF2",
          x: "55",
          y: "240",
          shape: "rectangle",
          width: "150",
          height: "50"
        },
        {
          id: "03.03.02",
          label: "Business Development{br}Officer",
          color: "#67CDF2",
          x: "85",
          y: "240",
          shape: "rectangle",
          width: "150",
          height: "50"
        },
        {
          id: "03.04",
          label: "",
          x: "70",
          y: "190",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.05",
          label: "",
          x: "67",
          y: "190",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.05.01",
          label: "Projects Officer",
          color: "#FFC533",
          x: "67",
          y: "135",
          shape: "rectangle",
          width: "60",
          height: "50"
        },
        {
          id: "03.06",
          label: "",
          x: "80",
          y: "190",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.06.01",
          label: "Finance Officer",
          color: "#FFC533",
          x: "80",
          y: "135",
          shape: "rectangle",
          width: "60",
          height: "50"
        },
        {
          id: "03.07",
          label: "",
          x: "95",
          y: "190",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.07.01",
          label: "IT Officer",
          color: "#FFC533",
          x: "95",
          y: "135",
          shape: "rectangle",
          width: "60",
          height: "50"
        },
        {
          id: "03.08",
          label: "",
          x: "115",
          y: "190",
          alpha: "0",
          shape: "circle",
          radius: "5"
        },
        {
          id: "03.08.01",
          label: "Research & Advocacy Officer",
          color: "#FFC533",
          x: "115",
          y: "135",
          shape: "rectangle",
          width: "100",
          height: "40"
        },
        {
          id: "03.09",
          label: "SME Development{br}Officer",
          color: "#FFC533",
          x: "25",
          y: "135",
          shape: "rectangle",
          width: "100",
          height: "50"
        },
        {
          id: "03.10",
          label: "Events Planning{br} and PR Officer",
          color: "#FFC533",
          x: "55",
          y: "135",
          shape: "rectangle",
          width: "100",
          height: "50"
        }
      ]
    }
  ],
  connectors: [
    {
      color: "#ffffff",
      connector: [
        {
          from: "01",
          to: "01.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "01.01",
          to: "01.02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "01.02",
          to: "01.03",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "01.02",
          to: "02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02",
          to: "02.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.01",
          to: "02.01.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.01",
          to: "02.02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.02",
          to: "02.02.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.01",
          to: "02.03",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.03",
          to: "02.03.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.03",
          to: "02.04",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.04",
          to: "02.04.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.02.01",
          to: "03",
          color: "#1aaf5d",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03",
          to: "03.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.01.01",
          to: "03.02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.02",
          to: "03.02.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.02",
          to: "03.02.02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "02.03.01",
          to: "03.03",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.03",
          to: "03.03.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.03",
          to: "03.03.02",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.03",
          to: "03.04",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.04",
          to: "03.05",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.05",
          to: "03.06",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.05",
          to: "03.05.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.05",
          to: "03.06",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.06",
          to: "03.06.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.06",
          to: "03.07",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.07",
          to: "03.07.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.07",
          to: "03.08",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.08",
          to: "03.08.01",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.02.01",
          to: "03.09",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        },
        {
          from: "03.03.01",
          to: "03.10",
          color: "#29C3BE",
          strength: "1",
          arrowatstart: "0",
          arrowatend: "0",
          alpha: "100"
        }
      ]
    }
  ]
};

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

class OGRAMM extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });

}customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);
  
})();
