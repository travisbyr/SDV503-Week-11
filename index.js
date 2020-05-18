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