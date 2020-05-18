/*
Recursive Function

function recuFunc(param) {
    recuFunc(param)
}

function recuFuncOne(param) {
    recuFunctionTwo(param)
}

function recFunctionTwo(param) {
    recuFuncOne(param)
}
*/
/*
function test(x) {
    const result = ('Is this a recu function')
    if (result = true) { // base case or stop point
        return true
    }
    test(param) // recursive call
} 
// Finding the factorial
function number(num) {
    let total = 1
    for (let n = num; n > 1; n--) {
        total = total * n
    }
    return total
}

console.log(number(3)) // 5 * 4 * 3 * 2 * 1
*/
/*
 function factorial(n) {
     if (n === 1 || n === 0) {
         return factorial(n-1) // recursive call
     }
 }
 console.log(factorial(number)) 
 */
// console.trace // shows outcome of script in html

function test(n) { // initial function test
    if (n === 1 || n === 0) {
        return 1 // value 1
    } // end of if statement
    return n * test(n-1) // returns value of factorial (n)
}
console.trace(test(3)) // output test function 

class myCar {
    constructor(car,price,model, year){ // For example car, price, model
        this.car = car
        this.price = price
        this.model = model
        this.year = year
    }
}

var car = new myCar("Holden", "$12,000", "Commodore", 2004)
console.log(car)



class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// create the first node
const head = new LinkedListNode(12);

// add a second node
head.next = new LinkedListNode(99);

// add a third node
head.next.next = new LinkedListNode(37);

console.log(head)