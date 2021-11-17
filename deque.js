class Deque {
    #count;
    #lowestCount;
    #items;

    constructor() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    size() {
        return this.#count - this.#lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    addBack(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.#lowestCount > 0) {
            this.#lowestCount--;
            this.#items[this.#lowestCount] = 0;
        } else {
            for (let i = this.#count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }

            this.#count++;
            this.#lowestCount = 0;
            this.items[0] = element;
        }
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount];
        this.#lowestCount++;

        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#lowestCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#count - 1];
    }
}