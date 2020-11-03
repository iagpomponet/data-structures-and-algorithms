class Stack {
  constructor(){
    this.items = [];
  }

  push(elements){
    this.items.push(elements);
  }

  pop(){
    return this.items.pop();
  }
  
  peek(){
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length == 0
  }

  clear(){
    this.items = [];
  }

  size(){
    return items.length
  }

  print(){
    console.log(`${this.items}`);
  }
};


// funcao para transformar numeros em binarios
function divideBy2(decimalNumber) {

  //a fila sera construida pelo resto das divisões
  let remStack = new Stack();
  let rem = ''
  let binaryString = '';


  // { 1 } - enquanto o numero decimal dos parametros for maior que zero
  // { 2 } - insira o resto na fila
  // { 3 } - sei la
  
  while (decimalNumber > 0){ // { 1 }
    // resto da divisao do numero por 2
    rem = Math.floor(decimalNumber % 2); 
    // insere o resto na fila
    remStack.push(rem); // { 2 }
    // divide o numero por 2 novamente
    decimalNumber = Math.floor(decimalNumber / 2); // { 3 }

    console.log('decimalNumber :>> ', decimalNumber);
  }

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }

  return binaryString

}
