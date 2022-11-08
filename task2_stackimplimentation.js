class Stack{

    constructor()
    {
        this.items = [];
        //console.log(this.items)
    }

    // push function
    push(element) // push the element into stack
    {

    // push element into the items
    this.items.push(element)
    //console.log(element);

    }


    // pop function
    pop()
    {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
    }
    
    // peek function
    peek()
    {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
    }

    
    // isEmpty function
    isEmpty()
    {
    // return true if stack is empty
    return this.items.length == 0;
    }
    
   // printStack function
   printStack()
   {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
   }
}

// creating object for stack class
var stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);

// when its empty it will returns true
//console.log(stack.isEmpty()); 
  
// when its empty it will returns Underflow
//console.log(stack.pop()); 

  
// Printing the stack element
// prints [10, 20, 30]
//console.log("Print the stack -",stack.printStack());
document.getElementById('print_stack').innerHTML=stack.printStack()
  
// returns 30
//console.log(stack.peek());
document.getElementById('peek').innerHTML=stack.peek()
  
// returns 30 and remove it from stack
//console.log(stack.pop());
document.getElementById('pop').innerHTML=stack.pop()
  
// returns [10, 20]
//console.log("after pop the element ",stack.printStack()); 
document.getElementById('after_pop').innerHTML=stack.printStack()