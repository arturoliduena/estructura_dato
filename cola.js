var assert = require('assert');

function Node(data){
  this.data = data;
  this.next = null;
}

function Cola(){
  this._length = 0;
  this.head = null
}

Cola.prototype.insert = function(valor){
  var node = new Node(valor);
  current = this.head
  if(!current){
    this.head = node;
    this._length++;
  }else {
    while (current.next) {
      current = current.next
    }
    current.next=node;
    this._length++
  }
      return this
  }

  Cola.prototype.insertInicio = function(valor){
    var node = new Node(valor);
    if(!this.head){
      this.head = node;
      this._length++
    }else {
      node.next = this.head;
      this.head = node;
      this._length++
    }
   return this
  }

  Cola.prototype.getAll = function(){
    var current = this.head
    if(!current){
      console.log('la cola esta vacia');
    }else {
      while (current) {
        console.log(current.data);
        current = current.next
      }
    }
  }

  Cola.prototype.buscar = function(index){
    var current = this.head
    for (var i = 1; i < index; i++) {
      current = current.next
    }
    console.log(current);
    console.log(current.data);
  }

Cola.prototype.get = function () {
    x = this.head
    this.head = this.head.next;
    this._length--;
    console.log(x.data);
    console.log(x);
    return x
}

Cola.prototype.pop = function(){
  var current = this.head
  if (!this.head) {
      console.log('La cola esta vacia');
  }else {
      while (current.next.next) {
        current = current.next
        console.log(current);
      }
      var x = current.next
      current.next = null
      console.log(x)
      this._length--;
      return x.data
  }
}


Cola.prototype.find = function(value){
  var current = this.head
  var y = 0
  while (current) {
    if(current.data==value){
      console.log(current);
      y++
    }
    current = current.next
  }
  if (y==0) {
    console.log('no existe');
    return null
  }

}



var cola = new Cola();

cola.insert(1).insert(3).insert(6).insert(10).insert(12).insert(18).insert(25)

console.log(cola);
console.log('---------------');
cola.getAll();
console.log('-------------');
cola.buscar(3)
console.log('----------------');
cola.insertInicio(4)
cola.getAll()
console.log('-----------------');
cola.get();
console.log('----------------');
cola.getAll();
console.log('----------------');
cola.pop();
cola.getAll();
console.log('-----------------');
cola.find(6)
console.log('------------------')
cola.find(5)
console.log('------------------');
