class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(value){
        // Push the value
        this.values.push(value);

        // Bubble to value up to its correct spot
        // In max binary heaps parents are always bigger than its child
        // base case: when parent its not smaller than value
        let i = this.values.length - 1;
        const element = this.values[i];
        
        while(i > 0){
            let parentIdx = Math.floor((i - 1)/2);
            let parent = this.values[parentIdx];
            if(parent < element){
                this.values[parentIdx] = element;
                this.values[i] = parent;
                i = parentIdx;
            }
        }
    };

    extract(){
        const min = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown(){
        let index = 0;
            const length = this.values.length;
            const element = this.values[0];

            while(true){
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild;
                let swap = null;

                // I declare leftChild and rightChild without looking for them in the 
                // values array because it might be out of bounds in the array 
                // a node can have only a left value for example and we would not find 
                // a rigth value for them in the array

                // if left child index is not out of bounds
                if(leftChildIndex < length){
                    leftChild = this.values[leftChildIndex];
                    if(leftChild > element){
                        swap = leftChildIndex;
                    }
                }

                if(rightChildIndex < length){
                    rightChild = this.values[rightChildIndex];
                    if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                        swap = rightChildIndex;
                    }
                }

                if(swap === null) break;
                this.values[index] = this.values[swap];
                this.values[swap] = element;
                index = swap;
            }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(22);
heap.insert(200);
heap.insert(1019);

console.log(heap.values);
