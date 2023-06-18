class Node {
    constructor(){
        this.end = false;
        this.children = {};
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    // O(n) where n is the length of the word
    insert(word){
        let node = this.root;

        for(let char of word){
            if(node.children[char] == undefined){
                node.children[char] = new Node(); 
            }
            node = node.children[char];
        }

        node.end = true;
    }

    search(word){
        let node = this.root;

        for(let char of word){
            if(node.children[char] === undefined) return false;

            node = node.children[char];
        }

        // if we find all char of the word, the last one must have the end prop with true value
        // which means that is a char in the end of a word
        return node.end;
    }

    startsWith(prefix){
        let node = this.root;

        for(let char of prefix){
            if(node.children[char] === undefined){
                return false;
            }

            node = node.children[char];
        }

        return true;
    }
}

const trie = new Trie();
trie.insert("Iago");
console.log(trie.root);