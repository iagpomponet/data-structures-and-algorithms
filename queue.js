class Queue {
    #count;
    #items;
    #lowestCount;

    constructor() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    enqueue(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    isEmpty() {
        return this.size() === 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount];
        this.#lowestCount++;

        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#lowestCount];
    }

    size() {
        return this.#count - this.#lowestCount;
    }

    clear() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return undefined;
        }

        let str = `${this.#items[this.#lowestCount]}`;

        for (let i = this.#lowestCount + 1; i < this.#count; i++) {
            str = `${str},${this.#items[i]}`;
        }

        return str;
    }
}

function hotPotato(elementList, num) {
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    };

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            console.log(`i`, i);
            queue.enqueue(queue.dequeue());
            console.log(`queue.toString()`, queue.toString())
        }
        console.log(queue.toString());
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ["John", "Jack", "Camilla", "Ingrid", "Carl"];
const res = hotPotato(names, 7);

console.log(res.winner);
console.log(res.eliminated);

function palindromeChecker(aString) {
    if (aString === undefined || aString === null) {
        return false;
    }

    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split('').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue("John");
// queue.enqueue("Jack");
// console.log(queue.toString());
// queue.enqueue("Camila");
// console.log(queue.size());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());
// console.log(queue.size());