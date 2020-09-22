

        (function () {
          let template = document.createElement("template");
    template.innerHTML = `   

<style type="text/css">
body, html {
font-family: Verdana, Arial;
font-size: 12px;
color: #000000;
padding: 5px;
}

.showtitel, .hidetitel, .txtout {
width: 600px;
font-size: 11px;
padding: 5px;
border: 1px solid #993300;
}

.showtitel {
color: #000000;
background: #fbeddb;
}

.txtout {
color: #000000;
background: #f4f4f4;
}

.showtitel a {
color: #990000;
text-decoration: none;
}
.showtitel a:hover {
color: #000000;
text-decoration: underline;
}
</style>
<body>

<script type="text/javascript" language="JavaScript">
<!--
function zeigen (cssid) {
  document.getElementById("THIDE_"+cssid).style.display="inline";
  document.getElementById("TITEL_"+cssid).style.display="none";
  document.getElementById("TOPCOL_"+cssid).style.backgroundColor = "#ebd5be";
  document.getElementById("TXT_"+cssid).style.display="inline";
  document.body.parentNode.style.backgroundColor = 'transparent';
return 1; 
}

function verbergen (cssid) {
  document.getElementById("TITEL_"+cssid).style.display="inline";
  document.getElementById("THIDE_"+cssid).style.display="none";
  document.getElementById("TOPCOL_"+cssid).style.backgroundColor="#fbeddb";
  document.getElementById("TXT_"+cssid).style.display="none";
  document.body.parentNode.style.backgroundColor = 'transparent';
return 1; 
}
//-->
</script>
               

<table cellspacing="2" cellpadding="0" border="0">
<tr>
    <td class="showtitel" id="TOPCOL_1"><a id="TITEL_1" style="display:inline;" href="javascript://" onclick="zeigen(1);">[+] Lorem Ipsum Text 1 anzeigen</a> <a id="THIDE_1" style="display:none;" href="javascript://" onclick="verbergen(1);">[-] Lorem Ipsum Text 1 verbergen</a></td>
</tr>
</table>

<table id="TXT_1" style="display:none;" cellspacing="2" cellpadding="0" border="0">
<tr>
	<td class="txtout">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</td>
</tr>
</table>
<\body>`;

            
            class OGRAMM extends HTMLElement {
                constructor() {
                    super();
                    let shadowRoot = this.attachShadow({ mode: "open" });
          
                }
                onCustomWidgetBeforeUpdate(changedProperties) {
                     
                }
                    
});
                }

            }
            customElements.define("com-gmail-cse-ari007-d3forcebubble", OGRAMM);


        })();
