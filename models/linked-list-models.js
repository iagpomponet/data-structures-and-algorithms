export class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next || undefined;
    }
}

export class DoubleNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev;
    }
}