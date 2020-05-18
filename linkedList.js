class linkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create the first node
const head = new linkedList(12);

// Adding a second node
head.next = new linkedList(99);
console.log(head)
// Adding a third node
head.next.next = new linkedList(37);

console.log(head)

/*

create a class {
    create a data structure {
        first field is node info
        second field is node link
    }
}
// Create the first node
create the first node with a node info value of 12

// Adding a second node
add the second node with a node info value of 99
// Adding a third node
add the third node with a node info value of 37

display data structure 
*/