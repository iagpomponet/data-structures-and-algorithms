class Stack {
    constructor() {
        this.items = [];
    }

    push(elements) {
        this.items.push(elements);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const teste = new Stack();
teste.push([1, 2, 3]);

console.log(teste.items);