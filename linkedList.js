class linkedList {
  constructor(info) {
    this.info = info;
    this.link = null;
  }
}
// Create the first node
var head = new linkedList(10);
// Adding a second node
head.link = new linkedList(20);
console.log(head);
// Adding a third node
head.link.link = new linkedList(50);
console.log(head);

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
