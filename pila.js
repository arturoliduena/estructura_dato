var assert = require('assert');

function Node(data){
  this.data = data;
  this.next = null;
}

function Pila(){
  this._length = 0;
  this.head = null
}

Pila.prototype.insert = function(valor){
  var node = new Node(valor);
  if(!this.head){
    this.head = node;
    this._length++;
  }else {
    node.next=this.head;
    this.head=node;
    this._length++

  }
      return this
  }

Pila.prototype.pop = function(){
  if(this._length>0){
    var x = this.head
    this.head = this.head.next;
    this._length--;
    return x.data
  }
}

Pila.prototype.getAll = function(){
  current = this.head //empezamos en la cabeza
if(!current){
  console.log('La lista esta vacia!')
  return this
}
while(current){
  console.log(current.data);
  current = current.next;
}
return
};

Pila.prototype.len = function(){
  console.log(this._length);
  return this._length
}

Pila.prototype.invertir = function(array){
  var pila = new Pila();
  var p = array.length
  for (var i = 0; i < p; i++) {
      var x = array.shift()
      console.log(x);
      pila.insert(x)
      console.log(pila);
  }
  console.log(array);
  var y = pila.len()
  console.log(y);
  for (var i = 0; i < y; i++) {
      var x = pila.pop()
      array.push(x)
  }
}



var stack = new Pila();

// stack.insert(1).insert(2).insert(4);
// console.log(stack);
//
// var p = stack.pop();
// console.log(p);
//
// console.log(stack);
//  stack.getAll();
// console.log('-------------');
// stack.len();
//

var array = [1, 2, 3, 4];
stack.invertir(array)
console.log(array);
