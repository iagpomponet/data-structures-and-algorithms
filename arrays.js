// inserindo um elemento na primeira posição de um array 
let array = [1, 2, 3];
const a = new Int16Array(1);

console.log(`a`, a)

// simple implementation of array unshift like method
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }

    this[0] = value;
}

// unshift -> adiciona elemento no começo do array
// shift -> remove o primeiro elemento
// pop -> remove o valor final de um array


// definição de um metodo para remover o primeiro valor de um array
Array.prototype.reIndex = function (array) {
    const newArray = [];

    for (i = 0; i < array.length; i++) {
        array[i] != undefined ? newArray.push(array[i]) : null;
    }

    return newArray;
}

Array.prototype.removeFirstValue = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }

    return this.reIndex(this)
}

array = array.removeFirstValue();


// every => itera até um valor retornar false 
// some => itera até até que retorne true 

console.log(array)
