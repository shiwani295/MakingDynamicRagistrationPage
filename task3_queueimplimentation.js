
class Queue{

    constructor() {

        this.items=[]

    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()

    }

    //1) enqueue() – Adds an element to the queue
    // enqueue function
    enqueue(element)
    {  
        // adding element to the queue
        this.items.push(element);
        //console.log(element);
        
    }

    //2) dequeue() – Removes an element from the queue
    // dequeue function
    dequeue()  
    {
	// removing element from the queue
	// returns underflow when called
	// on empty queue
	if(this.isEmpty())
		return "Underflow";
	return this.items.shift(); //this shift will pop the element 
   }


    //isEmpty() – Returns true if the queue is empty
    // isEmpty function
    isEmpty()
    {
    // return true if the queue is empty.
    return this.items.length == 0;
    }


   //front() – returns the front element of the queue
   // front function
   front()
   {
   // returns the Front element of
   // the queue without removing it.
   if(this.isEmpty())
       return "No elements in Queue";
   return this.items[0];
   }

   
   //printQueue()– Returns all the elements of an queue.
   // printQueue function
   printQueue()
   {
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
   }


}


// creating object for queue class
    var queue = new Queue();
			

// Testing dequeue and pop on an empty queue
// returns Underflow
//console.log(queue.dequeue());

// returns true
//console.log(queue.isEmpty());

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

//print all the queue value 
//console.log(queue.printQueue());
document.getElementById('print_queue').innerHTML=queue.printQueue()


//return false after enter values
//console.log(queue.isEmpty()); 


// returns 10
//console.log(queue.front());
document.getElementById('front').innerHTML=queue.front()

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
//console.log(queue.dequeue());
document.getElementById('shift').innerHTML=queue.dequeue()

// returns 20
//console.log(queue.front());
 document.getElementById('pop_again').innerHTML=queue.front()

// removes 20
// queue contains [30, 40, 50, 60]
//console.log(queue.dequeue());
document.getElementById('shift_again').innerHTML=queue.dequeue()

// printing the elements of the queue
// prints [30, 40, 50, 60]
//console.log(queue.printQueue());
document.getElementById('after_pop').innerHTML=queue.printQueue()












// array=[10,20,30,40]

// array.pop()// last out 40 stack FILO
// console.log(array.pop())

// queueMicrotask
// queue=[1,2,3,4,5,6]

// console.log(queue.pop())


