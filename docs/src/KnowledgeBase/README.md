---
sidebar: auto
sidebar depth: 2
---
<style>

table, th, td, tr {
   border: none;
   vertical-align: top;
   background-color: white;
   border-collapse: collapse;
}

blockquote {
    border-left: none;
    padding-left: 10px;
}
</style>


# Knowledge Base

## Possible interview questions.
**Sources:**<br>
www.wikipedia.com <br>
www.geeksforgeeks.org <br>
www.simplilearn.com/data-structure-interview-questions-and-answers-article <br>
www.herovired.com/learning-hub/blogs/arrays-in-data-structure/#basic-operations <br>

### Interview questions for algorithms and data structures.
#### 1. What is a data structure?
In computer science, a data structure is a **data organization**, and storage format that is usually chosen **for efficient access** to data.<br>

#### 2. Describe the types of data structures?
* **Array** - an array is a number of elements in a specific order, typically all of the same type. Elements are accessed using an integer index to specify which element is required.<br>
* **List** - a linked list is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the linked list. The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list. Certain other operations, such as random access to a certain element, are however slower on lists than on arrays.<br>
* **Record** - a record (also **called tuple** or **struct**) is an **aggregate data structure**. A record is a value that contains other values, typically in fixed number and sequence and typically indexed by names. The elements of records are usually called fields or members. In the context of object-oriented programming, records are known as plain old data structures to distinguish them from objects. <br>
* **Hash tables** -  also known as hash maps, are data structures that provide fast retrieval of values based on keys. They use a hashing function to map keys to indexes in an array, allowing for constant-time access in the average case. Hash tables are commonly used in dictionaries, caches, and database indexing. However, hash collisions can occur, which can impact their performance. Techniques like chaining and open addressing are employed to handle collisions.<br>
* **Graphs** - collections of nodes connected by edges, representing relationships between entities. They consist of vertices (nodes) and edges (connections between nodes). Graphs can be directed or undirected, and they can have cycles or be acyclic.<br>
* **Stacks and queues** - abstract data types that can be implemented using arrays or linked lists. A stack has two primary operations: push (adds an element to the top of the stack) and pop (removes the topmost element from the stack), that follow the Last In, First Out (LIFO) principle. Queues have two main operations: enqueue (adds an element to the rear of the queue) and dequeue (removes an element from the front of the queue) that follow the First In, First Out (FIFO) principle.<br>
* **Trees** - represent a hierarchical organization of elements. A tree consists of nodes connected by edges, with one node being the root and all other nodes forming subtrees. **Binary trees** (particularly heaps), **AVL trees**, and **B-trees** are some popular types of trees. They enable efficient and optimal searching, sorting, and hierarchical representation of data.
* **Trie** - also known as a **prefix tree**, is a specialized tree data structure used for the efficient retrieval of strings. Tries store characters of a string as nodes, with each edge representing a character. They are particularly useful in text processing scenarios like autocomplete, spell-checking, and dictionary implementations. Tries enable fast searching and prefix-based operations on strings.<br>

#### 3. What is a Linear Data Structure? Name a few examples.
A data structure is linear if all its elements or data items are arranged in a sequence or a linear order. The elements are stored in a **non-hierarchical way** so that each item has successors and predecessors except the first and last element in the list.
Examples of linear data structures are **Array**, **Stack**, **Queue**, and **Linked List**.<br>

#### 4. How are the elements of a 2D Array stored in the memory.
* **Row-Major Order**: In row-major ordering, the first row of a 2D array is entirely stored in memory, followed by the second row of the array, and so on until the final row.
* **Column-Major Order**: In column-major ordering, the first column of the array is entirely saved in memory, followed by the second row of the array, and so on until the last column of the array is fully recorded in the memory.

#### 5. What are some use cases for Row-Major and Column-Major storing of 2D Arrays?
**Row-Major** stored arrays are more efficient for row-wise access like in **Image Processing**. **Column-Major** stored arrays are more efficient for column-wise access like for **Matrix Multiplication**.<br>

#### 6. How can you possibly choose between Row-Major and Column-Major 2D Arrays storing implementations?
By choosing a **programming language**. **Row-Major** is implemented in languages like C/C++ and **Column-Major** - in Fortran.

#### 7. What is a Linked List Data Structure?
It’s a both **linear and non-linear Data Structure**, depending on application, or a sequence of data objects where **elements are not stored in adjacent memory locations**. The elements are linked using pointers to form a chain. Each element is a separate object, called a node.  Each node has two items: a data field and a reference to the next node. The entry point in a linked list is called the head. Where the list is empty, the head is a null reference and the last node has a reference to null. A linked list is a dynamic data structure, where the number of nodes is not fixed, and the list has the ability to grow and shrink on demand.
It is applied in cases where:
* We deal with an unknown number of objects or don’t know how many items are in the list
* We need constant-time insertions/deletions from the list, as in real-time computing where time predictability is critical
* Random access to any elements is not needed
* The algorithm requires a data structure where objects need to be stored irrespective of their physical address in memory
* We need to insert items in the middle of the list as in a priority queue
<br>

#### 8. Are Linked Lists considered Linear or Non-linear Data Structures?
Linked lists are considered both linear and non-linear data structures depending upon the application they are used for. When used for access strategies, it is considered as a linear data-structure. When used for data storage, it is considered a non-linear data structure.

#### 9. What are the advantages of a Linked List over an Array? In which scenarios do we use Linked List and when Array?
Advantages of a linked list over an array are:
* **Insertion and Deletion**<br>
Insertion and deletion of nodes is an easier process, as we only update the address present in the next pointer of a node. It’s expensive to do the same in an array as the room has to be created for the new elements and existing elements must be shifted.<br>
* **Dynamic Data Structure**<br>
As a linked list is a dynamic data structure, there is no need to give an initial size as it can grow and shrink at runtime by allocating and deallocating memory. However, the size is limited in an array as the number of elements is statically stored in the main memory.<br>
* **No wastage of Memory**<br>
As the size of a linked list can increase or decrease depending on the demands of the program, and memory is allocated only when required, there is no memory wasted. In the case of an array, there is memory wastage. For instance, if we declare an array of size 10 and store only five elements in it, then the space for five elements is wasted.<br>
* **Implementation**<br>
Data structures like stack and queues are more easily implemented using a linked list than an array.<br>
* **Some scenarios where we use linked list over array are**:
    * When we do not know the upper limit on the number of elements in advance
    * When there are a large number of add or remove operations
    * When there are no large number of random access to elements
    * When we want to insert items in the middle of the list, such as when implementing a priority queue<br>

* **Some scenarios in which we use array over the linked list are**:
    * When we need to index or randomly access elements
    * When we know the number of elements in the array beforehand, so we can allocate the correct amount of memory
    * When we need speed when iterating through all the elements in the sequence
    * When memory is a concern; filled arrays use less memory than linked lists, as each element in the array is the data but each linked list node requires the data as well as one or more pointers to the other elements in the linked list
<br>

#### 10. What is a Doubly-Linked List?
It is a complex type (double-ended LL) of a linked list in which a node has two links, one that connects to the next node in the sequence and another that connects to the previous node. This allows traversal across the data elements in both directions.<br>

#### 11. What are Dynamic Data Structures? Name a few.
They are collections of data in memory that expand and contract to grow or shrink in size as a program runs. This enables the programmer to control exactly how much memory is to be utilized. Examples are the **dynamic array**, **linked list**, **stack**, **queue**, and **heap**.<br>

#### 12. What is a stack?
A stack is an abstract data type that specifies a linear data structure, as in a real physical stack or piles where you can only take the top item off the stack in order to remove things. Thus, insertion (push) and deletion (pop) of items take place only at one end called top of the stack, with a particular order: LIFO (Last In First Out) or FILO (First In Last Out).

#### 13. Where are stacks used?
* Expression, evaluation, or conversion of evaluating prefix, postfix, and infix expressions
* Syntax parsing
* String reversal
* Parenthesis checking
* Backtracking

#### 14. What are the operations that can be performed on a stack?
A stack may perform three fundamental operations:
* PUSH: The push action inserts a new element into the stack. The new feature is placed at the top of the stack. 
* POP: The pop operation is performed to remove the stack's topmost element.
* PEEK: A peek action returns the value of the stack's topmost element without removing it from the stack.

#### 15. What is a queue Data Structure?
A queue is an abstract data type that specifies a linear data structure or an ordered list,  using the First In First Out (FIFO) operation to access elements. Insert operations can be performed only at one end called REAR and delete operations can be performed only at the other end called FRONT.

#### 16. List some applications of queue Data Structure.
To prioritize jobs as in the following scenarios:
* As waiting lists for a single shared resource (like printer, CPU, call center systems).
* In the asynchronous transfer of data (file IO, sockets).

#### 17. What is a Dequeue?
It is a double-ended queue, or a data structure, where the elements can be inserted or deleted at both ends (FRONT and REAR).

#### 18. What operations can be performed on queues?
* enqueue() adds an element to the end of the queue
* dequeue() removes an element from the front of the queue
* init() is used for initializing the queue
* isEmpty() tests for whether or not the queue is empty
* The front is used to get the value of the first data item but does not remove it
* The rear is used to get the last item from a queue

#### 19. Define the graph Data Structure?
It is a type of non-linear data structure that consists of vertices or nodes connected by edges or arcs to enable storage or retrieval of data. Edges may be directed or undirected.

#### 20. What are the applications of graph Data Structure?
* Transport grids where stations are represented as vertices and routes as the edges of the graph
* Utility graphs of power or water, where vertices are connection points and edge the wires or pipes connecting them
* Social network graphs to determine the flow of information and hotspots (edges and vertices)
* Neural networks where vertices represent neurons and edge the synapses between them

#### 21. List the types of trees?
* **The General Tree** <br>
A tree is referred to as a generic tree if its hierarchy is not constrained. In the General Tree, each node can have an endless number of offspring, and all other trees are subsets of the tree.<br>

* **The Binary Tree** <br>
The binary tree is a type of tree in which each parent has at least two offspring. The children are referred to as the left and right youngsters. This tree is more popular than most others. When specific limitations and features are given to a Binary tree, various trees such as AVL tree, BST (Binary Search Tree), RBT tree, and so on are also utilized. <br>

* **Binary Search Tree** <br>
Binary Search Tree (BST) is a binary tree extension that includes numerous optional constraints. In BST, a node's left child value should be less than or equal to the parent value, while the right child value should always be higher than the parent's value.<br>

* **The AVL Tree** <br>
The AVL tree is a self-balancing binary search tree (automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions). The term AVL is given in honor of the inventors Adelson-Velshi and Landis. This was the first tree to achieve dynamic equilibrium. Each node in the AVL tree is assigned a balancing factor based on whether the tree is balanced or not. The node kids have a maximum height of one AVL vine. Search, insert, delete operations have O(log n) complexity.<br>

* **Red and Black Tree** <br>
Red-black trees are another type of auto-balancing tree. The red-black term is derived from the qualities of the red-black tree, which has either red or black painted on each node. It helps to keep the forest in balance. Even though this tree is not perfectly balanced, the searching process takes just O(log n) time. <br>

* **The N-ary Tree** <br>
In this sort of tree with a node, N is the maximum number of children. A binary tree is a two-year tree since each binary tree node has no more than two offsprings. A full N-ary tree is one in which the children of each node are either 0 or N. <br>

* **Octree** <br>
An octree is a tree data structure in which each internal node has exactly eight children. Octrees are most often used to partition a three-dimensional space by recursively subdividing it into eight octants.

* **Heap** <br>
A heap is a tree-based data structure that satisfies the heap property: in a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a min heap, the key of P is less than or equal to the key of C.

#### 22. How is a node height in a Tree Data Structure determined?
The height of the node equals the number of edges in the longest path to the leaf from the node, where the depth of a leaf node is 0.

#### 23. Explain what Jagged Array is?
It is an array whose elements themselves are arrays and may be of different dimensions and sizes.

#### 24. What is an Algorithm?
An algorithm is a step by step method of solving a problem or manipulating data. It defines a set of instructions to be executed in a certain order to get the desired output.

#### 25. What is an asymptotic analysis of an algorithm?
Asymptotic analysis is the technique of determining an algorithm's running time in mathematical units to determine the program's limits, also known as "run-time performance." The purpose is to identify the best case, worst case, and average-case times for completing a particular activity.

#### 26. What are asymptotic notations?
Asymptotic Notation represents an algorithm's running time - how long an algorithm takes with a given input, n. Big O, big Theta, and big Omega are the three distinct notations. When the running time is the same in all circumstances, big-Theta is used, big-O for the worst-case running time, and big-Omega for the best case running time.

#### 27. What are the common algorithmic runtimes in big O notation?
* **Constant** - O(1)<br>
* **Logarithmic** - O(log(N))
* **Linear** - O(N)
* **Linear times Logarithm** - O(N*log(N))
* **Polynomial** - O(N^b)
* **Exponential** - O(b^N)
* **Factorial** - O(N!)<br>

#### 28. What are basic operations on Arrays?
* **Traversing** - looping through each element in the array and processing each element one at a time.<br>
* **Insertion** - the process of adding new elements into an existing array. This can be done by providing an index for where the insertion should occur and then shifting other elements in the array to make space for the insertion.<br>
* **Deletion** - the opposite of insertion and involves removing elements from an existing array. After deleting an element, all other elements in the array must be shifted to fill any gaps left from deletion.
* **Searching** - process of identifying an element from within an array by comparing it to your desired value until you find a match. 
* **Sorting** - process of arranging elements of an array in either ascending or descending order.

#### 29. What are the basic types of searching? Describe their worst case asymptotic behaviour.
* **Linear Search** - compares each element one after another until a match is found, or all elements have been searched. It has O(n) time complexity, because in worst case the searched element is the last one, or there is no such elements and you go through whole array.
* **Binary Search** - can be done in sorted arrays by comparing the middle element with the target and if they are not equal, the half where the target cannot lie is elemenated. The time complexity is O(log2(N)), because with each step you divide the number of elements N by 2, like N/2, N/4, N/8... until you reach 1. So N/2^k = 1 and thus k = log2(N).

#### 30. What are some common array sorting algorithms?
* **PermutationSort** - most ineffective sorting algorithm. It works by generating permutations of an array and checking if it is in the right sorted order. The worst case time complexity is O(?) undefined, since it has no upper bound and could run forever.
* **BubbleSort** - simple and easy to understand sorting algorithm. Consists of two loops. In the case of sorting in ascending order, the inner loop goes over elements and if an element is bigger than the next one, they are swapped. The outer loop repeats the procedure. The time complexity is O(N^2). Still too slow for real life problems.
* **QuickSort** - the fastest sorting algorithm based on divide and conquer principle. The key process in **QuickSort** is a **Partition**. The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot. Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array. The time complexity is O(N*log(N)).

#### 31. Name the main properties of the basic operations on linked lists.
* **Traversing** - this operation has a time complexity of O(N), the same as for arrays. But one can not access elemnts of a linked list by direct indexing.
* **Insertion** - this operation has a constant time complexity in contrast to arrays, where the worst case time complexity of the operation is O(N). It needs only to modify pointers in the chain at the place of insertion.
* **Deletion** - the mechanism is the same as for **Insertion**.
* **Search** - the same as for an Array in the case of an unsorted list, the worst case time complexity of searching an element is O(N). Binary search can be done only for sorted lists.
* **Sort** - the same algorithms as for Arrays can be applied for linked lists with the time complexity depending on the chosen algorithm.

#### 32. How can one detect loops in a Linked Lists, name a few approaches?
* **Floyd's Loop Detection Algorithm** - uses two pointers running over a linked list with different velocities, like first goes over each element, the second jumps over one element. If there are loops in the linked list, the two pointers will be equal at some point in the loop. Otherwise, the both reach the last element in the list. 
* **Using Hashing** - traverse the linked list and save the calculated hash of each node's adress. If the current node's hash points to one of the previously calculated hashes, then the list has loops. If the last element is reached without pointing to the previous hashes, then there are no loops.

#### 33. What are the basic operations on Hash Tables?

### Interview questions for Databases.
### Interview questions for C++.
### Interview questions for Python.
### Interview questions for Computer Vision.
### Interview questions for Machine Learning.
### Interview questions for Software Engineering, Architecture and Design.
