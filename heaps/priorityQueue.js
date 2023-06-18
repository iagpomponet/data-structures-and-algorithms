class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
};

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        const node = new Node(value, priority);
        // add value in the end of the queue
        this.values.push(node);

        // then bubble up until ight place 
        let index = 0;
        let element = this.values[index];

        while(index > 0){
            const parentIdx = Math.floor((index - 1) / 2);
            const parent = this.values[parentIdx];

            if(parent.priority > node.priority){
                this.values[index] = this.values[parentIdx];
                this.values[parentIdx] = element;
                index = parentIdx;
            }
        }
    };

    dequeue(){
        
    };
};