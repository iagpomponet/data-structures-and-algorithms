class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    // O(log n)
    insert(value){
        // should insert a value where it belongs in the tree
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        
        let currentNode = this.root;

        while(currentNode){
            // if smaller then current, check left
            if (value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                } 
                else {
                    currentNode = currentNode.left;
                }
            }
            else if (value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            } else {
                return undefined; //if you do not allow duplicate values
            }
        }
    }

    // O(log n)
    find(value){
        let currentNode = this.root;

        if(!currentNode) return false;
        // if value is smaller. then check right
        // if value is bigger check left
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if (value < currentNode.value){
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }

        return false;
    }

    // iterative
    bfs(){
        const queue = [this.root];
        let checked = [], node;
        
        // while theres some node to check
        while(queue.length){
            node = queue.shift();
            checked.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return checked;
    }

    dfsPreOrder(){
        let data = [], current;
        current = this.root;

        function traverse(node){
            // store we know we already check this one
            data.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }

        traverse(current);

        return data;
    }

    dfsPostOrder(){
        // the same as the pre order buuut we add the node into data after we added all its left and right subtree
        let data = [];
        
        function traverse(node){
           if(node.left) traverse(node.left);
           if(node.right) traverse(node.right);
           data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    dfsInOrder(){
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value)
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.dfsPostOrder());
    