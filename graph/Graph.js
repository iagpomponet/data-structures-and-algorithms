class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vtx){
        if(!this.adjacencyList[vtx]){
            this.adjacencyList[vtx] = []
        }
    }

    addEdge(vtx1, vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
        }
    }

    removeEdge(vtx1, vtx2){
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]){
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(vtx => vtx !== vtx2);
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(vtx => vtx !== vtx1);
        }
    }

    removeVertex(vtx){
        if(this.adjacencyList[vtx]){
            this.adjacencyList[vtx].forEach(ctn => {
                this.removeEdge(vtx, ctn);
            });
            delete this.adjacencyList[vtx];
        }
    }


    dfsRecursive(start){
        let result = [];
        let adjacencyList = this.adjacencyList;
        let visited = {};

        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    dfs(neighbor);
                }
            })
        }

        dfs(start)

        return result;
    };

    dfsIterative(start){
        let stack = [], result = [], visited = {};
        let currVertex;
        
        // add start to stack
        stack.push(start);

        // mark as visited, since we are about to visit in first round of while loop
        visited[start] = true;

        while(stack.length){
            // pop current node/vertex from stack
            currVertex = stack.pop();
            // add to resulst list
            result.push(currVertex);

            // iterate over neighbors
            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    // once its in the stack, we are about to visit, so we mark as visited already so it wont be add to stack twice
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    bfs(start){
        let queue = [start];
        let visited = {};
        let result = [];
        let currVertex;

        visited[start] = true;

        while(queue.length){
            currVertex = queue.shift();
            result.push(currVertex);

            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
}

const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.bfs("A"));