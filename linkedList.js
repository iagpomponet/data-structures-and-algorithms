import { defaultEquals } from '../util';
import { Node, DoubleNode } from './models/linked-list-models';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;

        if (this.head === undefined || this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }

        this.count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            if (index === 0) {
                this.head = current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            const node = this.head;

            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }

            return node;
        }

        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);

            if (index === 0) {
                const current = this.head;

                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;

                node.next = current;
                previous.next = node;
            }

            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element) {
        const current = this.head;

        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }

            current = current.next;
        }

        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    inEmpty() {
        return this.size === 0;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) {
            return '';
        }

        // esse tem o valor do proximo pq o valor do head ja esta no valor inicial da string
        const current = this.head.next;
        const str = `${this.head.element}`;

        for (let i = 1; i < this.size() && current != null; i++) {
            str += `${current.next.element}`;
            current = current.next;
        }
    }
}

export class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {
        //condicao de index validos
        //maior que zero e menor que o count
        if (index >= 0 && index <= this.count) {
            const node = new DoubleNode(element);
            const current = this.head;

            // se o index passado for zero
            if (index === 0) {
                // se head for null - ou seja - a lista está vazia
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    // o head - atual primeiro item - vira o next do node, que assumira o index 0
                    node.next = this.head;

                    current.prev = node;

                    node.prev = node;
                }
                // se o index for o ultimo
            } else if (index === this.count) {
                // current passa a ter em seu valor a referencia do ultimo item da lista
                current = this.tail;
                //boto como o next nosso node, que agora vai ser o novo tail da lista 
                current.next = node;
                // boto como prev do nosso node, o antigo ultimo item
                node.prev = current;
                //passo o valor de nosso node como tail da lista
                this.tail = node;
            }
            // caso o index não for do primeiro nem do ultimo item da lista 
            else {
                const previous = this.getElementAt(index - 1);
                // current assume o valor do atual elemento no index passado
                current = previous.next;
                // passo pra ele que o seu novo prev é nosso elemento, pois ele estara logo após
                current.prev = node;

                // nosso node, seu proximo element será o atual desse index
                node.next = current;
                // e seu elemento anterior sera o previous, antigo previous do elemento que ficava nesse index antes
                node.prev = previous;

                // por fim passo que o novo seguinte do antigo anterior é nosso elemento passado (confusa explicação)
                previous.next = node;
            }

            this.count++;
            return true;
        }
        return false;
    }
}