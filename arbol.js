var assert = require('assert');

function Node(data){
  this.data = data;
  this.parent = null;
  this.left = null;
  this.right = null;
}

function Arbol(){
  this._level = 0;
  this.root = null
}

Arbol.prototype.insert = function(valor){
  var node = new Node(valor);
  var current = this.root
  var parent
  if(!current){
    this.root = node;
    this._level++;
  }else {
    while(current){
      if(valor <= current.data){
        parent = current;
        current = current.left
        console.log('valor menor que current');
      } else if (valor > current.data) {
        parent = current
        current = current.right
        console.log('valor mayor que current');
      }
    }
    console.log(parent);
    console.log(current);
    current = node;
    console.log(current);
    node.parent = parent;
  }
  return this
}

var arbol = new Arbol;

arbol.insert(10).insert(5)
//.insert(7).insert(8).insert(1).insert(2).insert(6).insert(3)
console.log(arbol);
