function Node(data){
  this.data = data;
  this.next = null;
  this.previous = null;
}

function Cola(){
  this._length = 0;
  this.head = null
  this.pointer = null
}

Cola.prototype.insert = function(valor){
  var node = new Node(valor);
  var current = this.head
  if(!current){
    this.head = node;
    this._length++;
  }else {
    while (current.next) {
      current = current.next
    }
    current.next=node;
    node.previous=current
    this._length++
  }
      return this
  }

Cola.prototype.getAll = function(){
  var current = this.head
  if (!this.head) {
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

Cola.prototype.insertInicio = function(valor){
    var node = new Node(valor);
    if(!this.head){
      this.head = node;
      this._length++
    }else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      this._length++
    }
   return this
  }

  Cola.prototype.get = function () {
      x = this.head
      this.head = this.head.next;
      this.head.previous = null;
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
        var x = current.next;
        current.next.previous = null;
        current.next = null;
        console.log(x)
        console.log(current);
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
      console.log(value + ' no existe');
      return null
    }
  }



  Cola.prototype.next = function(){
    if(!this.pointer){
      this.pointer = this.head
    }
    this.pointer = this.pointer.next
    console.log(this.pointer);
  }

  Cola.prototype.past = function(){
    if(!this.pointer){
      this.pointer = this.head
    }
    this.pointer = this.pointer.previous
    console.log(this.pointer);
  }


var cola = new Cola;
cola.insert(1).insert(3).insert(7).insert(8).insert(12).insert(20).insert(22).insert(3)
console.log(cola);
console.log('----------------');
cola.getAll()
console.log('-----------------');
cola.buscar(4)
console.log('-----------------');
cola.insertInicio(4).insertInicio(5)
console.log('----------------');
cola.getAll()
cola.buscar(1)
console.log('----------------');
cola.get()
cola.buscar(1)
console.log('-----------------');
cola.pop()
console.log('-----------------');
cola.find(3)
cola.find(5)
console.log('-----------------');
cola.getAll()
cola.next()
cola.past()
