'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(function ());
}).listen(port);

(function () {
    let template = document.createElement("template");
    template.innerHTML = ` <div class="Organigramm">
        <svg width=100%
        height=100%></svg></div>
        
        
    <div class="container_1"> 
    <h3>Organigramm</h3>
            <select name="Add/remove node">
              <option> Add node </option>
              <option> remove node </option>
            </select>
     </div>

        <link rel="stylesheet" href="/styles.css" />
        <script src="/server.js"></script>

        <h1>Tree Drawing Algorithm</h1>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0, 50)"></g>
        </svg>
        <script>
            let root = {
                value: "A",
                children: [
                    {
                        value: "B",
                        children: []
                    },
                    {
                        value: "C",
                        children: []
                    }
                ]
            };

            let svgNode = document.querySelector("svg g");

            let renderer = new TreeRenderer(root, svgNode);
            renderer.draw();
        </script>`;


    class TreeNode extends HTMLElement {
        constructor(value) {
            this.x = 0;
            this.y = 0;

            this.value = value;

            this.final = 0;
            this.modifier = 0;

            this.prevSibling = null;
            this.children = [];
        }

        visit(func) {
            func(this);
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].visit(func);
            }
        }
    }

    class TreeRenderer extends HTMLElement {
        constructor(dataRoot, svgNode, width = 1000, height = 100) {
            // The root of the JavaScript object that represents the data
            // that we'll be rendering.
            this.dataRoot = dataRoot;

            // The SVG DOM node that the renderer will insert elements into.
            this.svgNode = svgNode;

            this.width = width;
            this.height = height;

            this.nodeRoot = this.prepareData(this.dataRoot, 0, null);

            this.firstPass(this.nodeRoot);
            this.secondPass(this.nodeRoot, 0);
            this.fixNodeConflicts(this.nodeRoot);
            this.shiftTreeIntoFrame();
        }

        /*
         * Build an intermediate form of the original data tree.  The nodes of
         * this new tree will be instances of the TreeNode class.
         */
        prepareData(node, level, prevSibling) {
            let treeNode = new TreeNode(node.value);
            treeNode.x = level;
            treeNode.prevSibling = prevSibling;

            for (let i = 0; i < node.children.length; i++) {
                treeNode.children.push(
                    this.prepareData(
                        node.children[i],
                        level + 1,
                        i >= 1 ? treeNode.children[i - 1] : null
                    )
                );
            }
            return treeNode;
        }

        /*
         * Assign initial position values to every node based on how many
         * prior siblings the current node has.
         */
        firstPass(node) {
            for (let i = 0; i < node.children.length; i++) {
                this.firstPass(node.children[i]);
            }

            if (node.prevSibling) {
                node.y = node.prevSibling.y + NODE_SEP;
            } else {
                node.y = 0;
            }

            if (node.children.length == 1) {
                node.modifier = node.y;
            } else if (node.children.length >= 2) {
                let minY = Infinity;
                let maxY = -minY;
                for (let i = 0; i < node.children.length; i++) {
                    minY = Math.min(minY, node.children[i].y);
                    maxY = Math.max(maxY, node.children[i].y);
                }
                node.modifier = node.y - (maxY - minY) / 2;
            }
        }

        /*
         * Adjust the position of children such that they end up centered
         * under their parent.
         */
        secondPass(node, modSum) {
            node.final = node.y + modSum;
            for (let i = 0; i < node.children.length; i++) {
                this.secondPass(node.children[i], node.modifier + modSum);
            }
        }

        /*
         * Work from the end of the tree back toward the beginning, fixing any
         * subtree overlap as we recurse through the tree.
         */
        fixNodeConflicts(node) {
            for (let i = 0; i < node.children.length; i++) {
                this.fixNodeConflicts(node.children[i]);
            }

            for (let i = 0; i < node.children.length - 1; i++) {
                // Get the bottom-most contour position of the current node
                let botContour = -Infinity;
                node.children[i].visit(
                    node => (botContour = Math.max(botContour, node.final))
                );

                // Get the topmost contour position of the node underneath the current one
                let topContour = Infinity;
                node.children[i + 1].visit(
                    node => (topContour = Math.min(topContour, node.final))
                );

                if (botContour >= topContour) {
                    node.children[i + 1].visit(
                        node => (node.final += botContour - topContour + NODE_SEP)
                    );
                }
            }
        }
    }

})();
