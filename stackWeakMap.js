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
        const s = items.get(this);
        return s[s - 1];
    }

    isEmpty() {
        const s = items.get(this);
        return s.length === 0;
    }

    clear() {
        const s = items.get(this);
        s = [];
    }

    size() {
        const s = items.get(this);
        return s.length;
    }

    toString() {
        if (this.isEmpty()) { return "" };
        const s = items.get(this)

        let objString = `${s[0]}`;

        for (let i = 1; i <= s.length - 1; i++) {
            objString = `${objString},${s[i]}`;
        }

        return objString;
    }
}

const teste = new Stack();
teste.push([1, 2, 3]);

console.log(teste.items);


function decimalToBinary(decNumber) {
    //pilha com os restos
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = "";

    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack?.pop()?.toString();
    }

    return binaryString;
}


function baseConverter(decNumber, base) {
    //pilha com os restos
    const remStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = decNumber;
    let rem;
    let baseString = "";

    if (!(base >= 2 && base <= 36)) {
        return "";
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack?.pop()];
    }

    return baseString;
}

const b = baseConverter(100345, 35);
console.log(`b`, b)