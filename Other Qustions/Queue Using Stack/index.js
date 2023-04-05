function Stack(){
    var items = [];
    var top = 0;
    //other methods go here
 
    //Push an item in the Stack
    this.push = function(element){
      items[top++] = element
    }
    //top++, first performs the operation then increment's the value     
 
    //Pop an item from the Stack
    this.pop = function(){
      return items[--top];
    }
    //--top, first decrements the value then performs the operation
      
    //Peek top item from the Stack
    this.peek = function(){
      return items[top - 1];
    }
 
    //Is Stack empty
    this.isEmpty = function(){
      return top === 0;
    }     
 
    //Clear the Stack
    this.clear = function(){
       top = 0;
    }
      
    //Size of the Stack
    this.size = function(){
      return top;
    }
  }
class QueueUsingStack {
    
    constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    }
    enqueue = (x) => {
    while(!this.stack1.isEmpty()){
    this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(x);
    while(!this.stack2.isEmpty()){
    this.stack1.push(this.stack2.pop());
    }
    }
    dequeue = () => {
    return this.stack1.pop();
    }
    peek = () => {
    return this.stack1.peek();
    }
    size = () => {
    return this.stack1.size();
    }
    isEmpty = () => {
    return this.stack1.isEmpty();
    }
    clear = () => {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    }
    }
    
    const queue = new QueueUsingStack();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    console.log(queue.peek());
    // console.log(queue.dequeue());
    // console.log(queue.peek());
    // console.log(queue.dequeue());
    // console.log(queue.peek());
    