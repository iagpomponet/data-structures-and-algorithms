const items = new WeakMap();

//com o weak map, a propriedade items fica realmente privada

class Stack {
    constructor() {
        items.set(this, []);
    }

    push(elements) {
        const s = items.get(this);
        s.push(elements);
    }

    pop() {
        const s = items.get(this);
        return s.pop();
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