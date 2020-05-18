# SDV503-Week-11 Class Activity

## Javascript Data Structure Stores
A javascript data struture is a container that stores data in a specific way that is defined by the layout chosen. There are many layouts to choose from, some data sturecture stores can be more efficent that others. Although, the performance of data structures vary depending on the data given. Certain data structure stores are more suitaed to particular data types, making them more efficent and effective to use. Each data structure has different way of ,recieving, sending and organising data.  

The two main data stuructures in javascript are Linked lists and Hash tables. Although there are a a lot of other data sturcture stores, most of the other data structure stores only extended the concept of either linked lists or hash tables. Linked lists is a data sturture that takes a large amount of data and stores itas a linear collection. The order of the data is linear, meaning that the organisation of data given is not decided by physical place of the data. Instead of this, each element of the data points to the next element, with the last element pointing to 'null' as their is no other element to point towards. Each elements in the linked lists become a node, all the data creating a sequence.

Another main data structure is hash tables. Hash tables is a data structure that stores large amount of data by mapping a key value to each element. Upon retrieving the data, hash tables associated a key value to each element, representing an unique index of the item in the data strture. By giving the elements in the data  a key pair, data can efficently be found and gathered, as the key will return the location and address of an element.
The main data sturctures used are Linked lists and Hash tables. Hash tables are used greatly for the internet as it very efficent and locating and gathering data.

![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/linkedListPsu.png)
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/recursivePsu.png)

## Write about PSUEDOCODE
The main differences between the two is that Linked lists are most efficent at storing and recieving data. They offer an efficent way at recieving and storing data in a sequence. While Hash tables are most efficent at finding and gathering data. Hash tables offer and efficent way at locating data by using a unique key value that targets specific data.

## Javascript Linked Lists
Linked Lists are an effective way at storing data. The organisation of linked lists is not defined by the way that data is given. Instead it is setup as a linear collection with each element pointing to the next element.
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/linkedListDia.png)
As shown in the above diagram the head pointer defines the first element of the data strcture (which is the head node). THe node link is the location of the next node, where as the node info is the data being stored. The last element has a node link value of 'null' meaning that it is the last element of the linear sequence as their is not a location for the next node. Linked lists are often used for queues and can be releated to real life. When A large amount of people are waiting in a queue, you are the node information, with the node link being the value of the next node location. The difference in this queue, is that the data is organised in an un neibouring order, meaning that the position that you are in the line is unknown.  

The advantage of using linked lists is that it efficently adds data to a struture. As the location of the data is does not matter for Linked Lists as it creates a linear collection of the data, data can easily be added to the collection, requiring less compute effort than a hash table. Although a disadvatange is that the location of data can be impractical as the data is fast at being transveral like hash tables. Instead to find an element in a Linked list you need to use use a recursive function, to iterate throughout the whole list to retrieve or find an element. 
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/linkedListEx.png)
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/linkedListPsu.png)

Shown above is an example of linked lists created using a class. By using a class I am able to recreate a linked list, showing how data is added. When data is added to a linked list created by an object, it becomes the last element, becoming the node tail automatically. 

## Javascript Recursion 
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/recursiveDia.png)
Javascript recursion is used in functions and for iterative purposes. Recursion in a function is used by calling itself until it no longer needs to (e.g. parameters are no longer meeting arugments). Recursion is also used in for loops that have a defined amount of iterations. If a recursion does not have an end point and the user does not stop it, then it will run forever until it crashes. An example of recursion is when its used in a for loop for counting down.
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/recursiveEx.png)
![Image of Code](https://github.com/travisbyr/SDV503-Week-11/blob/master/recursivePsu.png)

As shown above, the for loop iterates as long as the number given in the parameter is greater than 0. If thisis true, return the current number and remove 1 number from the number given. If the current number is equals 0, then stop the loop. 

An advantage of using javascript recursive is that you can define the amount of times a statement is itterated. This allows for effective use of code as recursive enables you to reduce the amount of duplicate code you have. If you have many statements that will be reapeated many times, then instead of re-writing them you could use a for loop. A disadvtange of javascript recursive is that it uses more memory. With each recursive call of a function, data has to be stored in a stack (a data structure similar to linked lists) which is like an array, but only adds and removes elements from it. As data is being added to the call stack, this decreases the time it takes to complete each iteration as each recursion requires more compute power to go through the call stack.    

## References (to convert to APA format)
https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/
https://people.engr.ncsu.edu/efg/210/s99/Notes/LinkedList.1.html
https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
https://open4tech.com/array-vs-linked-list-vs-hash-table/
