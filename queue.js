class Queue {
  constructor(){
    this.items = [];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    this.items.shift();
  }

  front(){
    return this.items[0];
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.items.length === 0;
  }

  print(){
    console.log(this.items.toString());
  }
}

const queue = new Queue();

queue.enqueue('Iago');
queue.enqueue('Douglas');

queue.print();

queue.dequeue('Iago');

queue.print();
