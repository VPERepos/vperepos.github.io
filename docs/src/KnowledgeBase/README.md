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

h1 { counter-reset: h2counter; }
h2 { counter-reset: h3counter; }
h3 { counter-reset: h4counter; }
h4 { counter-reset: h5counter; }
h5 { counter-reset: h6counter; }
h6 { }
h2:before {
counter-increment: h2counter;
content: 
}
h3:before {
counter-increment: h3counter;
content: 
}
h4:before {
counter-increment: h4counter;
content: counter(h4counter) ".";
}
h5:before {
counter-increment: h5counter;
content: counter(h5counter) ".";
}
h6:before {
counter-increment: h6counter;
content:   counter(h6counter) ".";
}

</style>


# Knowledge Base

## Possible interview questions.


### Interview questions for algorithms and data structures.
**Sources:**<br>
www.wikipedia.com <br>
www.geeksforgeeks.org <br>
www.simplilearn.com/data-structure-interview-questions-and-answers-article <br>
www.herovired.com/learning-hub/blogs/arrays-in-data-structure/#basic-operations <br>
www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm <br>
www.masaischool.com/blog/tree-data-structure-types-operations-applications/ <br>
www.vinayakd.com/articles/delete-n-ary-tree-node <br>

#### What is a Data Structure?
In computer science, a data structure is a **data organization**, and storage format that is usually chosen **for efficient access** to data.<br>

#### Describe the types of Data Structures?
* **Array** - an array is a number of elements in a specific order, typically all of the same type. Elements are accessed using an integer index to specify which element is required.<br>
* **List** - a linked list is a linear collection of data elements of any type, called nodes, where each node has itself a value, and points to the next node in the linked list. The principal advantage of a linked list over an array is that values can always be efficiently inserted and removed without relocating the rest of the list. Certain other operations, such as random access to a certain element, are however slower on lists than on arrays.<br>
* **Record** - a record (also **called tuple** or **struct**) is an **aggregate data structure**. A record is a value that contains other values, typically in fixed number and sequence and typically indexed by names. The elements of records are usually called fields or members. In the context of object-oriented programming, records are known as plain old data structures to distinguish them from objects. <br>
* **Hash tables** -  also known as hash maps, are data structures that provide fast retrieval of values based on keys. They use a hashing function to map keys to indexes in an array, allowing for constant-time access in the average case. Hash tables are commonly used in dictionaries, caches, and database indexing. However, hash collisions can occur, which can impact their performance. Techniques like chaining and open addressing are employed to handle collisions.<br>
* **Graphs** - collections of nodes connected by edges, representing relationships between entities. They consist of vertices (nodes) and edges (connections between nodes). Graphs can be directed or undirected, and they can have cycles or be acyclic.<br>
* **Stacks and queues** - abstract data types that can be implemented using arrays or linked lists. A stack has two primary operations: push (adds an element to the top of the stack) and pop (removes the topmost element from the stack), that follow the Last In, First Out (LIFO) principle. Queues have two main operations: enqueue (adds an element to the rear of the queue) and dequeue (removes an element from the front of the queue) that follow the First In, First Out (FIFO) principle.<br>
* **Trees** - represent a hierarchical organization of elements. A tree consists of nodes connected by edges, with one node being the root and all other nodes forming subtrees. **Binary trees** (particularly heaps), **AVL trees**, and **B-trees** are some popular types of trees. They enable efficient and optimal searching, sorting, and hierarchical representation of data.
* **Trie** - also known as a **prefix tree**, is a specialized tree data structure used for the efficient retrieval of strings. Tries store characters of a string as nodes, with each edge representing a character. They are particularly useful in text processing scenarios like autocomplete, spell-checking, and dictionary implementations. Tries enable fast searching and prefix-based operations on strings.<br>

#### What is a Linear Data Structure? Name a few examples.
A data structure is linear if all its elements or data items are arranged in a sequence or a linear order. The elements are stored in a **non-hierarchical way** so that each item has successors and predecessors except the first and last element in the list.
Examples of linear data structures are **Array**, **Stack**, **Queue**, and **Linked List**.<br>

#### How are the elements of a 2D Array stored in the memory.
* **Row-Major Order**: In row-major ordering, the first row of a 2D array is entirely stored in memory, followed by the second row of the array, and so on until the final row.
* **Column-Major Order**: In column-major ordering, the first column of the array is entirely saved in memory, followed by the second row of the array, and so on until the last column of the array is fully recorded in the memory.

#### What are some use cases for Row-Major and Column-Major storing of 2D Arrays?
**Row-Major** stored arrays are more efficient for row-wise access like in **Image Processing**. **Column-Major** stored arrays are more efficient for column-wise access like for **Matrix Multiplication**.<br>

#### How can you possibly choose between Row-Major and Column-Major 2D Arrays storing implementations?
By choosing a **programming language**. **Row-Major** is implemented in languages like C/C++ and **Column-Major** - in Fortran.

#### What is a Linked List Data Structure?
It’s a both **linear and non-linear Data Structure**, depending on application, or a sequence of data objects where **elements are not stored in adjacent memory locations**. The elements are linked using pointers to form a chain. Each element is a separate object, called a node.  Each node has two items: a data field and a reference to the next node. The entry point in a linked list is called the head. Where the list is empty, the head is a null reference and the last node has a reference to null. A linked list is a dynamic data structure, where the number of nodes is not fixed, and the list has the ability to grow and shrink on demand.
It is applied in cases where:
* We deal with an unknown number of objects or don’t know how many items are in the list
* We need constant-time insertions/deletions from the list, as in real-time computing where time predictability is critical
* Random access to any elements is not needed
* The algorithm requires a data structure where objects need to be stored irrespective of their physical address in memory
* We need to insert items in the middle of the list as in a priority queue
<br>

#### Are Linked Lists considered Linear or Non-linear Data Structures?
Linked lists are considered both linear and non-linear data structures depending upon the application they are used for. When used for access strategies, it is considered as a linear data-structure. When used for data storage, it is considered a non-linear data structure.

#### What are the advantages of a Linked List over an Array? In which scenarios do we use Linked List and when Array?
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

#### What is a Doubly-Linked List?
It is a complex type (double-ended LL) of a linked list in which a node has two links, one that connects to the next node in the sequence and another that connects to the previous node. This allows traversal across the data elements in both directions.<br>

#### What are Dynamic Data Structures? Name a few.
They are collections of data in memory that expand and contract to grow or shrink in size as a program runs. This enables the programmer to control exactly how much memory is to be utilized. Examples are the **dynamic array**, **linked list**, **stack**, **queue**, and **heap**.<br>

#### What is a Stack?
A stack is an abstract data type that specifies a linear data structure, as in a real physical stack or piles where you can only take the top item off the stack in order to remove things. Thus, insertion (push) and deletion (pop) of items take place only at one end called top of the stack, with a particular order: LIFO (Last In First Out) or FILO (First In Last Out).

#### Where are Stacks used?
* Expression, evaluation, or conversion of evaluating prefix, postfix, and infix expressions
* Syntax parsing
* String reversal
* Parenthesis checking
* Backtracking

#### What are the operations that can be performed on a Stack?
A stack may perform three fundamental operations:
* PUSH: The push action inserts a new element into the stack. The new feature is placed at the top of the stack. 
* POP: The pop operation is performed to remove the stack's topmost element.
* PEEK: A peek action returns the value of the stack's topmost element without removing it from the stack.

#### What is a queue Data Structure?
A queue is an abstract data type that specifies a linear data structure or an ordered list,  using the First In First Out (FIFO) operation to access elements. Insert operations can be performed only at one end called REAR and delete operations can be performed only at the other end called FRONT.

#### List some applications of the Queue Data Structure.
To prioritize jobs as in the following scenarios:
* As waiting lists for a single shared resource (like printer, CPU, call center systems).
* In the asynchronous transfer of data (file IO, sockets).

#### What is a Dequeue?
It is a double-ended queue, or a data structure, where the elements can be inserted or deleted at both ends (FRONT and REAR).

#### What operations can be performed on Queues?
* enqueue() adds an element to the end of the queue
* dequeue() removes an element from the front of the queue
* init() is used for initializing the queue
* isEmpty() tests for whether or not the queue is empty
* The front is used to get the value of the first data item but does not remove it
* The rear is used to get the last item from a queue

#### Define the Graph Data Structure.
It is a type of non-linear data structure that consists of vertices or nodes connected by edges or arcs to enable storage or retrieval of data. Edges may be directed or undirected.

#### What are the applications of Graph Data Structures?
* Transport grids where stations are represented as vertices and routes as the edges of the graph
* Utility graphs of power or water, where vertices are connection points and edge the wires or pipes connecting them
* Social network graphs to determine the flow of information and hotspots (edges and vertices)
* Neural networks where vertices represent neurons and edge the synapses between them

#### List the types of Trees?
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

#### How is a Node Height in the Tree Data Structure determined?
The height of a node is the number of edges from that node to the leaf node (the lowermost node in the hierarchy).

#### How is a Node Depth in the Tree Data Structure determined?
The depth of a node is the number of edges it takes from the root (the uppermost node in the hierarchy) node to that particular node.

#### What is a Node Degree in the Tree Data Structure?
The total number of branches coming out of a node is considered to be the degree of that node.

#### What is a Forest in relation with the Tree Data Structure?
A collection of disconnected trees is called a forest. If you cut the root of a tree, the disjoint trees hence formed make up a forest. 

#### How is a Balanced Binary Tree determined?
A balanced binary tree, also referred to as a height-balanced binary tree, is defined as a binary tree in which the height of the left and right subtree of any node differ by not more than 1.

#### What is a Self-balancing Binary Tree?
Self-Balancing Binary Search Trees are height-balanced binary search trees that automatically keep the height as small as possible when insertion and deletion operations are performed on the tree. Most prominent examples are AVL Trees and Red-Black Trees.

#### What is a B-Tree Data Structure?
A B-tree is a sort of self-balancing search tree whereby each node could have more than two children and hold multiple keys.

#### Explain what Jagged Array is?
It is an array whose elements themselves are arrays and may be of different dimensions and sizes.

#### What is an Algorithm?
An algorithm is a step by step method of solving a problem or manipulating data. It defines a set of instructions to be executed in a certain order to get the desired output.

#### What is an asymptotic analysis of an algorithm?
Asymptotic analysis is the technique of determining an algorithm's running time in mathematical units to determine the program's limits, also known as "run-time performance." The purpose is to identify the best case, worst case, and average-case times for completing a particular activity.

#### What are Asymptotic Notations?
Asymptotic Notation represents an algorithm's running time - how long an algorithm takes with a given input, n. Big O, big Theta, and big Omega are the three distinct notations. When the running time is the same in all circumstances, big-Theta is used, big-O for the worst-case running time, and big-Omega for the best case running time.

#### What are the common algorithmic runtimes in big O notation?
* **Constant** - O(1) (Insertion in a linked list)
* **Logarithmic** - O(log(N)) (Binary Search)
* **Linear** - O(N) (Linear Search)
* **Polynomial** - O(N^b) (QuickSort with O(N*log(N)))
* **Exponential** - O(b^N) (Fibonacci series (each element is a sum of previous two) without Dynamic Programming, (O(N) with dynamic programming))
* **Factorial** - O(N!) (Generation of all possible permutations of N objects)

#### What are basic operations on Arrays?
* **Traversing** - looping through each element in the array and processing each element one at a time.<br>
* **Insertion** - the process of adding new elements into an existing array. This can be done by providing an index for where the insertion should occur and then shifting other elements in the array to make space for the insertion.<br>
* **Deletion** - the opposite of insertion and involves removing elements from an existing array. After deleting an element, all other elements in the array must be shifted to fill any gaps left from deletion.
* **Searching** - process of identifying an element from within an array by comparing it to your desired value until you find a match. 
* **Sorting** - process of arranging elements of an array in either ascending or descending order.

#### What are the basic types of searching? Describe their worst case asymptotic behaviour.
* **Linear Search** - compares each element one after another until a match is found, or all elements have been searched. It has O(n) time complexity, because in worst case the searched element is the last one, or there is no such elements and you go through whole array.
* **Binary Search** - can be done in sorted arrays by comparing the middle element with the target and if they are not equal, the half where the target cannot lie is elemenated. The time complexity is O(log2(N)), because with each step you divide the number of elements N by 2, like N/2, N/4, N/8... until you reach 1. So N/2^k = 1 and thus k = log2(N).

#### What are some common array sorting algorithms?
* **PermutationSort** - most ineffective sorting algorithm. It works by generating permutations of an array and checking if it is in the right sorted order. The worst case time complexity is O(?) undefined, since it has no upper bound and could run forever.
* **BubbleSort** - simple and easy to understand sorting algorithm. Consists of two loops. In the case of sorting in ascending order, the inner loop goes over elements and if an element is bigger than the next one, they are swapped. The outer loop repeats the procedure. The time complexity is O(N^2). Still too slow for real life problems.
* **QuickSort** - the fastest sorting algorithm based on divide and conquer principle. The key process in **QuickSort** is a **Partition**. The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot. Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array. The time complexity is O(N*log(N)).

#### Name the main properties of the basic operations on linked lists.
* **Traversing** - this operation has a time complexity of O(N), the same as for arrays. But one can not access elemnts of a linked list by direct indexing.
* **Insertion** - this operation has a constant time complexity in contrast to arrays, where the worst case time complexity of the operation is O(N). It needs only to modify pointers in the chain at the place of insertion.
* **Deletion** - the mechanism is the same as for **Insertion**.
* **Search** - the same as for an Array in the case of an unsorted list, the worst case time complexity of searching an element is O(N). Binary search can be done only for sorted lists.
* **Sort** - the same algorithms as for Arrays can be applied for linked lists with the time complexity depending on the chosen algorithm.

#### How can one detect loops in a Linked Lists, name a few approaches?
* **Floyd's Loop Detection Algorithm** - uses two pointers running over a linked list with different velocities, like first goes over each element, the second jumps over one element. If there are loops in the linked list, the two pointers will be equal at some point in the loop. Otherwise, the both reach the last element in the list. 
* **Using Hashing** - traverse the linked list and save the calculated hash of each node's adress. If the current node's hash points to one of the previously calculated hashes, then the list has loops. If the last element is reached without pointing to the previous hashes, then there are no loops.

#### Give some examples of basic Hash Functions that can be used in Hash Table Data Structure?
* **Division** - a modulus function that returns the division remainder is used in this case. A key value is divided by the table length and the remainder is used as an index in the table.
* **Mid Square** - in this case the key value is squared and the middle N digits are extracted as a hash value.
* **Digit Folding** - divide the key value into a number of parts, where each part has the same number of digits, except for the last one. Addition of the parts gives a hash number.
* **Multiplication** - choose a constant value between 0 and 1. Multiply it with the key value. Extract the fractional part of the multiplication product. Multiply it by the hash table length and take the floor of the result. This produces the hash.

#### How can one possibly avoid Hash Collisions in Hash Tables?
One could solve the problem of hash collisions by for example **Linear Probing**. If the calculated index in a hash table is already in use, one just searches for the next empty cell in the table.

#### What are the basic operations on Hash Tables?
* **Search** - compute the hash of a passed key and locate the value by hash code as an array index. If the element is not found use linear probing to get the element ahead.
* **Insert** - compute the hash code of a passed key. Use cash code as an index in the array. If the cell is not empty use linear probing to get to the next empty cell.
* **Delete** - the same as for previous operations hash code is used as an array index. If the cell is empty use linear probing to get to the element ahead. Once the lement is found store a dummy element there.

#### What is a Bipartite Graph?
A bipartite graph (or bigraph) is a graph whose vertices can be divided into two disjoint and independent sets U and V, that is, every edge connects a vertex in U to one in V . Vertex sets U and V are usually called the parts of the graph. Equivalently, a bipartite graph is a graph that does not contain any odd-length cycles.

#### What is a Weighted Graph?
A graph whose vertices or edges have been assigned weights. A vertex-weighted graph has weights on its vertices and an edge-weighted graph has weights on its edges.

#### What is a Directed Graph?
A directed graph (or digraph) is a graph that is made up of a set of vertices connected by directed edges, often called arcs.

#### What is a Transpose of a Directed Graph?
Transpose of a directed graph G is another directed graph on the same set of vertices with all of the edges reversed compared to the orientation of the corresponding edges in G.

#### What is a Strongly Connected Graph?
A directed graph is called strongly connected if there is a path from each vertex in the graph to every other vertex.

#### What is a Minimum Spanning Tree of a Graph?
A minimum spanning tree (MST) is defined as a spanning tree that has the minimum weight among all the possible spanning trees. A **Spanning Tree** is a subset of the edges of the graph that forms a tree (acyclic) where every node of the graph is a part of the tree.

#### Name the ways of representing and storing a Graph Data Structure.
* **Adjacency Matrix** - in this method a graph is represented in the form of a 2D matrix, where rows and columns denote vertices. And the values in the cells describe reletionships (edges) between vertices.
* **Adjacency List** - here a Graph is represented as a collection of linked lists. There is an array of pointers for all vertices. Each pointer shows connections to all other vertices in a chain that have edges to the reference vertice.
When a Graph has a lot of edges, then it is better to represent it in the form of Adjacency Matrix.<br>

| | | |
|:---|:---|:---|
|<strong>Action</strong>|<strong>Adjacency Matrix</strong>|<strong>Adjacency List</strong>|
|Adding Edge| O(1) | O(1) |
|Removing Edge| O(1) | O(N) |
|Initializing| O(N*N) | O(N) |

#### What are the basic operations on Graphs?
* **Insertion of Nodes/Edges** in the graph.
* **Deletion of Nodes/Edges** in the graph.
* **Searching on Graphs** – Search an entity in the graph.
* **Traversal of Graphs** – Traversing all the nodes in the graph.

#### List the ways of Traversing a Graph.
* **Breadth-First-Search** - is a graph traversal algorithm that explores all the vertices in a graph at the current depth before moving on to the vertices at the next depth level. It starts at a specified vertex and visits all its neighbors before moving on to the next level of neighbors. To avoid processing a node more than once, we divide the vertices into two categories: Visited and Not visited. It has time complexity of O(V+E), where V is a number of vertices and E - of edges.
* **Depth-First-Search** - the algorithm starts selecting some arbitrary node as the root node and explores as far as possible along each branch before backtracking. To avoid processing a node more than once, we divide the vertices into two categories: Visited and Not visited. It has time complexity of O(V+E), where V is a number of vertices and E - of edges.

#### List the main applications of Breadth-First-Search.
* **Shortest Path Finding** - Breadth-First-Search can be used to find the shortest path between two nodes in an unweighted graph. By keeping track of the parent of each node during the traversal, the shortest path can be reconstructed.
* **Cycle Detection** - Breadth-First-Search can be used to detect cycles in a graph. If a node is visited twice during the traversal, it indicates the presence of a cycle.
* **Connected Components** - Breadth-First-Search can be used to identify connected components in a graph. Each connected component is a set of nodes that can be reached from each other.
* **Topological Sorting** - BFS can be used to perform topological sorting on a directed acyclic graph (DAG). Topological sorting arranges the nodes in a linear order such that for any edge (u, v), u appears before v in the order.

#### List the main applications of Depth-First-Search.
* **Detecting Cycle in a Graph** - A graph has a cycle if and only if we see a back edge during DFS. So we can run DFS for the graph and check for back edges.
* **Path Finding** - Depth-First-Search can be used to find a path between any two vertices. Choose one vertex es a start. Use stack in order to save the path between starting and current vertex. As son as destination vertex is reached, return the path.
* **Topological Sorting** - the same like for Breadth-First-Search, it is used mainly for jobs scheduling from the given dependencies among jobs. 
* **Testing if a Graph is Bipartite** - when we first discover a new vertex, color it opposite its parents, and for each other edge, check it doesn’t link two vertices of the same color. The first vertex in any connected component can be red or black.
* **Finding Strongly Connected Components in a Graph** - for example brute-force checking if the definition of a strongly connected component fits the vertices of a graph.
* **Backtracking** - Depth-first search can be used in backtracking algorithms.

#### What are the basic operations on Trees Data Structures?
* **Traversal** - a hierarchical data structure like a tree can have different ways of traversal. Simplifying to a **Binary Tree**, one can distinguish between three types of traversal:
    1. **In-order** - it starts with visiting all the nodes in the left subtree. Then visits the root node. And finally, all the nodes in the right subtree are visited.
    2. **Pre-order** - first the root node is visited. Then all the nodes in the left subtree. And finally visits all the nodes in the right subtree.
    3. **Post-order** - starts with the nodes in the left subtree. Visits the nodes in the right subtree. And then visits the root node.
    4. **Level-order** - defined as a method to traverse a Tree such that all nodes present in the same level are traversed completely before traversing the next level.
* **Insertion** - insertion can be done in general at the leftmost, rightmost or the first vacant position found during traversal.
* **Search** - is conducted in the form of a Binary Search for Binary Trees. For General Trees a Depth-First-Search like in the case of Graphs can be used. The search is implemented as a recursive function.
* **Deletion** - during deletion there are 4 options to look at, the node either:
    1. Is a leaf node (has no children).
    2. Has only one child, which then will take place of the deleted one.
    3. Has more than 1 child and we want to promote them all. The root of the deleted node will become the root of all children nodes of the deleted one.
    4. Has more than 1 child and we want to promote only one of them. Thus only one node takes the place of the deleted one and becomes root for the rest of the children nodes.

#### Explain the mechanism of Self-Balancing in AVL Trees.
First the **Balance Factor** of all nodes is calculated as a difference between the height of the left branch and the height of the right branch. If the balance factor is -1,0 or 1 then the tree is balanced, otherwise left and right rotations of the nodes must be done in order to shorten the height of branches with single nodes. During rotations the fundamental property of binary trees must be satisfied that the right child node is bigger than the parent and the left one is smaller. After rotations balance factors are calculated again and if they are -1,0 or 1 a new element can be inserted. Otherwise rotations are conducted further until balanced state is achieved.

#### Explain the mechanism of Self-Balancing in Red-Black Trees.
The fundamental rules of Red-Black Trees are:<br>
    1. Every node has a color either red or black.<br>
    2. The root of the tree is always black.<br>
    3. There are no two adjacent red nodes (A red node cannot have a red parent or red child).<br>
    4. Every path from a node (including root) to any of its descendants NULL nodes has the same number of black nodes.<br>
    5. Every leaf (e.i. NULL node) must be colored BLACK.<br>
After insertion two basic operations are used in order to ensure the balance: **Rotation and Recolouring**. First, an element is inserted like in general binary trees and coloured red. One tries first the recolouring during balancing and if it does not work, rotations are conducted. If the new node (**child**) appears to be the root it is recoloured in black (see properties). Check the colour of the parent (**father**) node. If it is black then left the colour of the child node as red. If the father is also red, check the colour of its opposite node (**uncle**) on the same level. If the color of this node is also red then change both father and uncle nodes to black and the **grandfather** (parent node of father and uncle) to red if its not the root node, otherwise do not change the grandfathers color. Repeat the procedure for grandfather upwards. But if the uncle's color is black then rotations in 4 possible ways are conducted untill one can recolour the new arrangement of the nodes.  

#### What is Recursion?
Recursion is defined as a process which calls itself directly or indirectly and the corresponding function is called a recursive function. As an example calculation of Fibonacci series can be formulated in the form of Recursion, like F(n) = F(n-1) + F(n-2), for n >= 2.

#### What is Dynamic Programming?
Dynamic Programming is a method used in mathematics and computer science to solve complex problems by breaking them down into simpler subproblems. By solving each subproblem only once and storing the results, it avoids redundant computations, leading to more efficient solutions for a wide range of problems. 

#### What is Linear Programming?
Linear programming is the technique used for optimizing a particular scenario. Using linear programming provides us with the best possible outcome in a given situation. It uses all the available resources in a manner such that they produce the optimum result. Problems like Transportation, manufacturing and diet can be solved by this approach. <br>
A linear programming problem consits of **Decision Variables**, **Objective Function**, **Constraints** and **Non-negative Restrictions**.
Decision variables are the variables x, and y, which decide the output of the linear programming problem and represent the final solution. 
The objective function, generally represented by Z, is the linear function that needs to be optimized according to the given condition to get the final solution. The restrictions imposed on decision variables that limit their values are called constraints.
Now, the general formula of a linear programming problem is:<br>
Objective Function: Z = ax + by <br>
Constraints: cx + dy ≥ e, px + qy ≤ r <br>
Non-Negative restrictions: x ≥ 0, y ≥ 0 <br>
The methods of solving linear programming problems are **Simplex** and **Graphical**.

Steps for the **Simplex Method** are:

Step 1: Formulate the linear programming problems based on the given constraints.

Step 2: Convert all the given inequalities to equations or equalities of the linear programming problems by adding the slack variable to each inequality where ever required.

Step 3: Construct the initial simplex table. By representing each constraint equation in a row and writing the objective function at the bottom row. The table so obtained is called the Simplex table.

Step 4: Identify the greatest negative entry in the bottom row the column of the element with the highest negative entry is called the pivot column

Step 5: Divide the entries of the right-most column with the entries of the respective pivot column, excluding the entries of the bottommost row. Now the row containing the least entry is called the pivot row. The pivot element is obtained by the intersection of the pivot row and the pivot column.

Step 6: Using matrix operation and with the help of the pivot element make all the entries in the pivot column to be zero.

Step 7: Check for the non-negative entries in the bottommost row if there are no negative entries in the bottom row, end the process else start the process again from step 4.

Step 8: The final simplex table so obtained gives the solution to our problem.

Steps for the **Graphical Method** are:

Step 1: First convert the inequations into normal equations.

Step 2: Find the points at which equations cut the x-axis and y-axis. To find the point of intersection of the x-axis put y = 0 in the respective equation and find the point. Similarly for y-axis intersection points put x = 0 in the respective equation.

Step 3: Draw the lines cutting the x-axis and y-axis.

Step 4: The region will include an area region enclosed by two axes and all lines including the origin. 

Step 5: Find Z for each intersection point and thus maxima and minima.

#### What is Backtracking?
Backtracking is a problem-solving algorithmic technique that involves finding a solution incrementally by trying different options and undoing them if they lead to a dead end. It is commonly used in situations where you need to explore multiple possibilities to solve a problem, like searching for a path in a maze or solving puzzles like Sudoku.

#### What is a Greedy Algorithm?
Greedy Algorithm is defined as a method for solving optimization problems by taking decisions that result in the most evident and immediate benefit irrespective of the final outcome. It works for cases where minimization or maximization leads to the required solution.

### Interview questions for Databases.
**Sources:** <br>
www.softwaretestinghelp.com/database-interview-questions/ <br>
www.mindmajix.com/nosql-interview-questions <br>
www.ibm.com/docs/en/ida/9.1.1?topic=entities-primary-foreign-keys <br>

#### How is a Database defined?
Database is an organized collection of related data where the data is stored and organized to serve some specific purpose.

#### Define DBMS.
DBMS stands for Database Management System. It is a collection of application programs which allow the user to organize, restore and retrieve information about data as effectively as possible. Some of the popular DBMS’s are MySql, Oracle, PostgreSql, SqLite, etc.

#### Define RDBMS.
Relational Database Management System (RDBMS) is based on a relational model of data that is stored in databases in separate tables and they are related to the use of a common column. Data can be accessed easily from the relational database using Structured Query Language (SQL).

#### Enlist the advantages of DBMS.
The advantages of DBMS includes:
* Data is stored in a structured way and hence redundancy is controlled.
* Validates the data entered and provide restrictions on unauthorized access to the database.
* Provides backup and recovery of the data when required.
* It provides multiple user interfaces.

#### What is the Database Transaction?
Sequence of operation performed which changes the consistent state of the database to another is known as the database transaction. After the completion of the transaction, either the successful completion is reflected in the system or the transaction fails and no change is reflected.

#### Enlist four fundamental Properties of Transactions in RDBMS.
Four crucial properties define relational database transactions: atomicity, consistency, isolation, and durability—typically referred to as ACID.
* **Atomicity** defines all the elements that make up a complete database transaction.
* **Consistency** defines the rules for maintaining data points in a correct state after a transaction.
* **Isolation** keeps the effect of a transaction invisible to others until it is committed, to avoid confusion.
* **Durability** ensures that data changes become permanent once the transaction is committed.

#### Explain the terms ‘Record’, ‘Field’ and ‘Table’ in terms of database.
**Record:** Record is a collection of values or fields of a specific entity. For Example, An employee, Salary account, etc. <br>
**Field:** A field refers to an area within a record that is reserved for specific data. For Example, Employee ID.<br>
**Table:** Table is the collection of records of specific types. For Example, the Employee table is a collection of records related to all the employees.<br>

#### What do you understand by Data Redundancy?
Duplication of data in the database is known as data redundancy. As a result of data redundancy, duplicated data is present at multiple locations, hence it leads to wastage of the storage space and the integrity of the database is destroyed.

####  What is a Primary Key in a Relational Database?
A Primary Key is a column or a set of columns in a table whose values uniquely identify a row in the table. A relational database is designed to enforce the uniqueness of primary keys by allowing only one row with a given primary key value in a table.

#### What is a Foreign Key in a Relational Database?
A Foreign Key is a column or a set of columns in a table whose values correspond to the values of the primary key in another table. In order to add a row with a given foreign key value, there must exist a row in the related table with the same primary key value.

#### What are Non-key Attributes?
Non-key attributes are attributes that are not part of any key. Generally, most attributes are simply descriptive, and fall into this category. Consider an Employee entity type that has attributes for first name, last name, birth date; these attributes would serve to describe an employee but would not serve to uniquely identify employees.

#### Categorize Data Modification Anomalies in a Database.
* **Insertion Anomaly**: Insertion Anomaly refers to when one cannot insert a new tuple into a relationship due to lack of data.
* **Deletion Anomaly**: The delete anomaly refers to the situation where the deletion of data results in the unintended loss of some other important data.
* **Updatation Anomaly**: The update anomaly is when an update of a single data value requires multiple rows of data to be updated.

#### What are the various types of relationships in Database? Define them.
There are 3 types of relationships in Database:
* **One-to-one**: One table has a relationship with another table having the similar kind of column. Each primary key relates to only one or no  record in the related table.
* **One-to-many**: One table has a relationship with another table that has primary and foreign key relations. The primary key table contains only one record that relates to none, one or many records in the related table.
* **Many-to-many**: Each record in both the tables can relate to many numbers of records in another table.

#### Explain Normalization and De-Normalization.
**Normalization** is the process of removing redundant data from the database by splitting the table in a well-defined manner in order to maintain data integrity. This process saves much of the storage space. It is also used to eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies.

**De-normalization** is the process of adding up redundant data on the table in order to speed up the complex queries and thus achieve better performance.

#### What are the different types of Normalization?
Different types of Normalization are:
* **First Normal Form (1NF)**: A relation is said to be in 1NF only when all the entities of the table contain unique or atomic values. It meens all rows must be unique, each cell must contain only single value (not a list) and each value should be non-divisible (can't be split down further).
* **Second Normal Form (2NF)**: A relation is said to be in 2NF only if it is in 1NF and all the non-key attribute of the table is fully dependent on the primary key. For example we have a table with columns composed of Student ID, Course ID and Course Fee. Course Fee does not depend fully on the primary key represented by Student ID. In order to achieve 2NF on splits the table in one that contains Student ID and Course ID and another that contains Course ID and Course Fee.
* **Third Normal Form (3NF)**: A relation is said to be in 3NF only if it is in 2NF and every non-key attribute of the table is not transitively dependent on the primary key. For example if we have a table containing Tournament Name, Year, Winner's Name and Winner's Date of Birth. Winners date of birth can be defined by winner's name and not by the primary key represented by tournament name and year, so the table must be split.

#### What is BCNF?
BCNF is the Boyce Code Normal form. It is the higher version of 3Nf which does not have any multiple overlapping candidate keys. For example if we have a table with Student ID, Corse ID and Professor ID, where the same course could be held by different professors, we have to split the table into table eith Student ID and professor ID and the table with professor ID and Course ID.

#### What is SQL?
Structured Query language, SQL is an ANSI (American National Standard Institute) standard programming language that is designed specifically for storing and managing the data in the relational database management system (RDBMS) using all kinds of data operations.

#### How many SQL statements are used? Define them.
SQL statements are basically divided into three categories, DDL, DML, and DCL. <br>
They can be defined as:
* **Data Definition Language (DDL)** commands are used to define the structure that holds the data. These commands are auto-committed i.e. changes done by the DDL commands on the database are saved permanently.
* **Data Manipulation Language (DML)** commands are used to manipulate the data of the database. These commands are not auto-committed and can be rolled back.
* **Data Control Language (DCL)** commands are used to control the visibility of the data in the database like revoke access permission for using data in the database.

#### Enlist some commands of DDL, DML and DCL.
* **Data Definition Language (DDL) commands:** <br>
    CREATE to create a new table or database.<br>
    ALTER for alteration.<br>
    TRUNCATE to delete data from the table.<br>
    DROP to drop a table.<br>
    RENAME to rename a table.<br>

* **Data Manipulation Language (DML) commands:**<br>
    INSERT to insert a new row.<br>
    UPDATE to update an existing row.<br>
    DELETE to delete a row.<br>
    MERGE for merging two rows or two tables.<br>

* **Data Control Language (DCL) commands:**<br>
    COMMIT to permanently save.<br>
    ROLLBACK to undo the change.<br>
    SAVEPOINT to save temporarily.<br>

#### What is Quaery Processor in DBMS?
The Query Processor receives the queries (requests) from the user and interprets them in the form of instructions. It has four components: **DML Compiler**, **DDL Interpreter**, **Query Optimizer** and **Embedded DML Pre-compiler**.

#### Define DML Compiler.
It converts the DML (Data Manipulation Language) Instructions into Machine Language (low-level language).

#### What is DDL interpreter?
It interprets the DDL (Data Definition Language) Instructions and stores the record in a data dictionary (in a table containing meta-data).

#### What is Query Optimizer?
It executes the DML Instructions and picks the lowest cost evaluation plan out of all the alternatives present.

#### What is Embedded DML Pre-compiler?
It translates the DML statements embedded in Application Programs into procedural function calls.

#### Enlist the advantages of SQL.
* Simple SQL queries can be used to retrieve a large amount of data from the database very quickly and efficiently.
* SQL is easy to learn and almost every DBMS supports SQL.
* It is easier to manage the database using SQL as no large amount of coding is required.

#### What is a Relational Database Schema?
A database schema refers to the logical and visual configuration of the entire relational database. The database objects are often grouped and displayed as tables, functions, and relations. A schema describes the organization and storage of data in a database and defines the relationship between various tables.

#### What is a Physical Level in a Relational Database.
The concept of Physical Level in a database refers to the lowest level of organization and representation of data in a database management system. At the physical level, data is represented in the form of bits, bytes, and blocks of data stored on a storage device (such as a hard drive or solid-state drive).

#### What is a Conceptual (Logical) Level in a Relational Database.
The conceptual level is a way of describing what data is stored within the whole database and how the data is inter-related. The conceptual level does not specify how the data is physically stored.

#### What is a View Level in a Relational Database?
Views are virtual tables. They are only a structure, and contain no data. Their purpose is to allow a user to see a subset of the actual data. A view can consist of a subset of one table. A View can be considered as a template query.

#### What are the advantages and disadvantages of views in the database?
**Advantages of Views:**
* As there is no physical location where the data in the view is stored, it generates output without wasting resources.
* Data access is restricted as it does not allow commands like insertion, updation, and deletion.<br>

**Disadvantages of Views:**
* The view becomes irrelevant if we drop a table related to that view.
* Much memory space is occupied when the view is created for large tables.


#### What do you understand by Data Independence? What are its two types?
Data Independence refers to the ability to modify the schema definition in one level in such a way that it does not affect the schema definition in the next higher level.<br>
The 2 types of Data Independence are:
* **Physical Data Independence:** It modifies the schema at the physical level without affecting the schema at the conceptual level.
* **Logical Data Independence:** It modifies the schema at the conceptual level without affecting or causing changes in the schema at the view level.

#### What do you understand by Functional dependency?
A relation is said to be in functional dependency when one attribute uniquely defines another attribute. For Example, R is a Relation, X and Y are two attributes. T1 and T2 are two tuples. Then,<br>
T1[X]=T2[X] and T1[Y]=T2[Y] <br>
Means, the value of component X uniquely define the value of component Y. Also, X->Y means Y is functionally dependent on X.

#### What is a Fully Functional Dependancy?
To fulfill the criteria of fully functional dependency, the relation must meet the requirement of functional dependency. A functional dependency ‘A’ and ‘B’ are said to be fully functional dependent when removal of any attribute say ‘X’ from ‘A’ means the dependency does not hold anymore.

#### What do you understand by the E-R model?
E-R model is an Entity-Relationship model which defines the Conceptual View of the database. The E-R model basically shows the real-world entities and their association/relations. Entities here represent the set of attributes in the database.

#### Define Entity, Entity type, and Entity set.
**Entity** can be anything, be it a place, class or object which has an independent existence in the real world. <br>
**Entity Type** represents a set of entities that have similar attributes.<br>
**Entity Set** in the database represents a collection of entities having a particular entity type.<br>

#### What is a Weak Entity?
In a relational database, a weak entity is an entity that cannot be uniquely identified by its attributes alone; therefore, it must use a foreign key in conjunction with its attributes to create a primary key. The foreign key is typically a primary key of an entity it is related to. 

#### Explain the terms ‘Attribute’ and ‘Relations’.
**Attribute** is described as the properties or characteristics of an entity. For Example, Employee ID, Employee Name, Age, etc., can be attributes of the entity Employee. <br>
**Relation** is a two-dimensional table containing a number of rows and columns where every row represents a record of the relation. Here, rows are also known as ‘Tuples’ and columns are known as ‘Attributes’. <br>

#### What are VDL and SDL?
**VDL** is **View Definition Language** which represents user views and their mapping to the conceptual schema. <br>
**SDL** is **Storage Definition Language** which specifies the mapping between two schemas.<br>

#### Define Cursor and its types. 
Cursor is a temporary work area that stores the data, as well as the result set, occurred after manipulation of data retrieved. A cursor can hold only one row at a time. <br>
The 2 types of Cursor are:
* **Implicit cursors** are declared automatically when DML statements like INSERT, UPDATE, DELETE is executed.
* **Explicit cursors** have to be declared when SELECT statements that are returning more than one row are executed.

#### Define Database Lock and its types.
Database lock basically signifies the transaction about the current status of the data item i.e. whether that data is being used by other transactions or not at the present point of time. <br>
There are two types of Database lock: **Shared Lock** and **Exclusive Lock**. <br>
**Shared Lock** exist when two transactions are granted read access. One transaction gets the shared lock on data and when the second transaction requests the same data it is also given a shared lock. Both transactions are in a read-only mode, updating the data is not allowed until the shared lock is released. <br>
An **Exclusive Lock** means that no other users can update or delete the item until the database server removes the lock.

#### What is Data Warehousing?
Data Warehousing integrates data and information collected from various sources into one comprehensive database. For example, a data warehouse might combine customer information from an organization's point-of-sale systems, its mailing lists, website, and comment cards.

#### What do you understand by Join?
Join is the process of deriving the relationship between different tables by combining columns from one or more tables having common values in each. When a table joins with itself, it is known as Self Join.

#### What do you understand by Index Hunting?
Index hunting is the process of boosting the collection of indexes which helps in improving the query performance as well as the speed of the database (in analogy with direct access by index in a lookup table).

#### How to improve query performance using Index hunting?
Index hunting help in improving query performance by: <br>
* Using a query optimizer to coordinate queries with the workload.
* Observing the performance and effect of index and query distribution.

#### Differentiate between ‘Cluster’ and ‘Non-cluster’ index.
**Clustered Index** alters the table and re-order the way in which the records are stored in the table. Data retrieval is made faster by using the clustered index. SQL Server clustered index creates a physical sorted data structure of the table rows according to the defined index key. This sorted data structure is called a B-tree (balanced tree). B-tree structure enables us to find the queried rows faster to using the sorted key value(s). <br>
A **Non-clustered Index** does alter the records that are stored in the table but creates a completely different object within the table.

#### What do you understand by Fragmentation?
Fragmentation is a feature that controls the logical data units, also known as fragments that are stored at different sites of a distributed database system.

#### Define Join types.
Given below are the types of Join, which are explained with respect to the tables as an example. <br>

**employee Table** 
| | |
|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|
|1000| Kolya |
|1001| Tolya |
|1002| Sasha |
|1003| Alexey |


**employee_info Table**
| | |
|:---|:---|
|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Moscow |
|1001| Spb |
|1002| Nijniy |
|1003| Novosib |

* **Inner JOIN:** Inner JOIN is also known as a simple JOIN. This SQL query returns results from both the tables having a common value in rows.
**SQLQuery:**
``` sql
SELECT * from employee, employee_info WHERE employee.EmpID = employee_info.EmpID 
```
**Result:** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Kolya |1000| Moscow |
|1001| Tolya |1001| Spb |
|1002| Sasha |1002| Nijniy |
|1003| Alexey |1003| Novosib |

* **Natural JOIN** This is a type of Inner JOIN that returns results from both the tables having the same data values in the columns of both the tables to be joined.
**SQLQuery:**
``` sql
SELECT * from employee NATURAL JOIN employee_info
```
**Result:** <br>
| | | |
|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>Adress</strong>|
|1000| Kolya | Moscow |
|1001| Tolya | Spb |
|1002| Sasha | Nijniy |
|1003| Alexey | Novosib |

* **Cross JOIN:** Cross JOIN returns the result as all the records where each row from the first table is combined with each row of the second table.<br>
**SQLQuery:**
``` sql
SELECT * from employee CROSS JOIN employee_info;
```	
* **Right JOIN:** Right JOIN is also known as Right Outer JOIN. This returns all the rows as a result from the right table even if the JOIN condition does not match any records in the left table.<br>

**employee Table** 
| | |
|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|
|1000| Kolya |
|1001| Tolya |
|1002| Sasha |
|1003| Alexey |
|1004| Masha |
|1005| Dasha |

**employee_info Table**
| | |
|:---|:---|
|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Moscow |
|1001| Spb |
|1002| Nijniy |
|1003| Novosib |
|1006| Tomsk |
|1007| Almaty |

**SQLQuery:**
``` sql
SELECT * from employee RIGHT OUTER JOIN employee_info on (employee.EmpID = employee_info.EmpID);
```
**Result:** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Kolya |1000| Moscow |
|1001| Tolya |1001| Spb |
|1002| Sasha |1002| Nijniy |
|1003| Alexey |1003| Novosib |
|Null| Null |1006| Tomsk |
|Null| Null |1007| Almaty |

* **Left JOIN:** Left JOIN is also known as Left Outer JOIN. This returns all the rows as a result of the left table even if the JOIN condition does not match any records in the right table. This is exactly the opposite of Right JOIN.

**SQLQuery:**
``` sql
SELECT * from employee LEFT OUTER JOIN employee_info on (employee.EmpID = employee_info.EmpID);
```
**Result:** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Kolya |1000| Moscow |
|1001| Tolya |1001| Spb |
|1002| Sasha |1002| Nijniy |
|1003| Alexey |1003| Novosib |
|1004| Masha |Null| Null |
|1005| Dasha |Null| Null |

* **Outer/Full JOIN:** Full JOIN return results in combining the result of both the Left JOIN and Right JOIN.

**SQLQuery:**
``` sql
SELECT * from employee FULL OUTER JOIN employee_info on (employee.EmpID = employee_info.EmpID);
```
**Result:** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>EmpID</strong>|<strong>Adress</strong>|
|1000| Kolya |1000| Moscow |
|1001| Tolya |1001| Spb |
|1002| Sasha |1002| Nijniy |
|1003| Alexey |1003| Novosib |
|1004| Masha |Null| Null |
|1005| Dasha |Null| Null |
|Null| Null |1006| Tomsk |
|Null| Null |1007| Almaty |

#### What do you understand by ‘Atomicity’ and ‘Aggregation’?
**Atomicity** is the condition where either all the actions of the transaction are performed or none. This means, when there is an incomplete transaction, the database management system itself will undo the effects done by the incomplete transaction. <br>
**Aggregation** is the concept of expressing the relationship with the collection of entities and their relationships.

#### Define Phantom Deadlock.
Phantom deadlock detection is the condition where the deadlock does not actually exist but due to a delay in propagating local information, deadlock detection algorithms identify the deadlocks.

#### Define Checkpoint.
Checkpoint declares a point before which all the logs are stored permanently in the storage disk and the database is in consistent state. In the case of crashes, the amount of work and time is saved as the system can restart from the checkpoint.

#### What is Database Partitioning?
Database partitioning is the process of partitioning tables, indexes into smaller pieces in order to manage and access the data at a finer level. This process of partitioning reduces the cost of storing a large amount of data as well as enhances the performance and manageability.

####  Explain the importance of Database Partitioning.
* Improves query performance and manageability.
* Simplifies common administration tasks.
* Acts as a key tool for building systems with extremely high availability requirements.
* Allows accessing a large part of a single partition.

#### Explain the Data Dictionary.
Data Dictionary is a set of information describing the content and structure of the tables and database objects. The job of the information stored in the data dictionary is to control, manipulate and access the relationship between database elements.

#### Explain the Primary Key and Composite Key.
**Primary Key** is that column of the table whose every row data is uniquely identified. Every row in the table must have a primary key and no two rows can have the same primary key. Primary key value can never be null nor can it be modified or updated. <br>
**Composite Key** is a form of the candidate key where a set of columns will uniquely identify every row in the table.

#### What do you understand by the Unique key?
A Unique key is the same as the primary key whose every row data is uniquely identified with a difference of null value i.e. Unique key allows one value as a NULL value.

#### What do you understand by Database Triggers?
A set of commands that automatically get executed when an event like Before Insert, After Insert, On Update, On Delete of row occurs in a table is called a Database Trigger.

#### Define Stored Procedures.
A Stored procedure is a collection of pre-compiled SQL Queries, which when executed denotes a program taking input, process and gives the output.

#### What do you understand by B-Trees?
B-Tree represents the data structure in the form of a tree for external memory that reads and writes large blocks of data. It is commonly used in databases and file systems where all the insertions, deletions, sorting, etc., are done in logarithmic time.

#### Name the different Data Models that are available for database systems.
* Relational model
* Network model
* Hierarchical model

#### Differentiate between ‘DELETE’, ‘TRUNCATE’ and ‘DROP’ commands.
After the execution of **DELETE** operation, **COMMIT** and **ROLLBACK** statements can be performed to retrieve the lost data. <br>
After the execution of **TRUNCATE** operation, **COMMIT**, and **ROLLBACK** statements cannot be performed to retrieve the lost data. <br>
**DROP** command is used to drop the table or key like the primary key/foreign key.

#### Based on the given table, solve the following queries.
**employee Table** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>Age</strong>|<strong>Adress</strong>|
|1000| Kolya |26| Moscow |
|1001| Tolya |30| Spb |
|1002| Sasha |22| Nijniy |
|1003| Alexey |50| Novosib |
|1004| Masha |28| Kaliningrad |

**a)** Write the SELECT command to display the details of the employee with empid as 1004.
**SQLQuery:**
``` sql
SELECT EmpId, EmpName, Age, Adress from Employee WHERE empId = 1004;
```

**Result:** <br>
| | | | |
|:---|:---|:---|:---|
|<strong>EmpID</strong>|<strong>EmpName</strong>|<strong>Age</strong>|<strong>Adress</strong>|
|1004| Masha |28| Kaliningrad |

**b)** Write the SELECT command to display all the records of table Employees.

**SQLQuery:**
``` sql
SELECT * from Employee;
```

**c)** Write the SELECT command to display all the records of the employee whose name starts with the character ‘T’.

**SQLQuery:**
``` sql
SELECT * from Employee WHERE EmpName LIKE ‘T%’;
```

**d)** Write a SELECT command to display id, age and name of the employees with their age in both ascending and descending order.

**SQLQuery:**
``` sql
SELECT EmpId, EmpName, Age from Employee&amp;nbsp; ORDER BY Age;
```

**SQLQuery:**
``` sql
SELECT EmpId, EmpName, Age from Employee&amp;nbsp; ORDER BY Age Desc;
```
#### What do you understand by NoSQL?
Nowadays, developers are dealing with a large volume of data which is called Big Data. So naturally, big complexity and big issues will be there. Once most of the systems are getting online, so data load increases. NoSQL helps to manage unstructured, messy, and complicated data. This is not a traditional database or relational database management.

#### How many types of NoSQL Databases are there?
* **Graph Database** - stores nodes and relationships instead of tables or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it. For example **Neo4j** is a Graph Database.
* **Key Value Calculation** - stores data as a collection of key-value pairs in which a key serves as a unique identifier. Both keys and values can be anything, ranging from simple objects to complex compound objects. Key-value databases (or key-value stores) are highly partitionable and allow horizontal scaling at a level that other types of databases cannot achieve. Examples are DynamoDB, Cassandra, Redis, etc.
* **Document Oriented** - a special type of Key-Value Store where keys can only be Strings. Moreover, the document is encoded using standards like JSON or related languages like XML (Semi-Structured Data). You can also store PDFs, image files, or text documents directly as values. Examples are CouchDB, MongoDB, etc.
* **Column View Presentation** - represents data in columnar form reducing the number of I/O operations on hardrives. Used in warehouses for big data analytics.

#### Write down the difference between vertical and horizontal databases.
**Horizontal Scaling** means that you scale by adding more machines into your pool of resources whereas **Vertical Scaling** means that you scale by adding more power (CPU, RAM) to an existing machine.<br>
An easy way to remember this is to think of a machine on a server rack, we add **more machines** across the **horizontal direction** and add **more resources** to a machine in the **vertical direction**. <br>
In the database world, horizontal-scaling is often based on the partitioning of the data i.e. each node contains only part of the data, in vertical-scaling the data resides on a single node and scaling is done through multi-core i.e. spreading the load between the CPU and RAM resources of that machine.

#### When should one use NoSQL in place of the normal database?
If you are looking for key-value stores with massive high-speed performances, you can use NoSQL. Because in the relational databases, we use ACID transactions. Once we use this kind of transaction, the schema-based process will slow down the database performance. 

Suggestive possible situations to use NoSQL are:
* If you use multiple JOIN queries.
* If the client wants high traffic site.
* If you are using denormalized data.

#### What do you know about polyglot persistence in NoSQL?
Polyglot persistence is a hybrid approach enabling usage of multiple databases in a single application/software. A Software that is capable of using more than one type of data storage is referred to as Polyglot-persistent software.

#### Clarify the Key-Value Approach in a NoSQL Database.
Key-Value Approach implies storing data in a **Hash Table**. Searching data in a hash table is of constant time complexity, which makes it very fast.

#### Explain the CAP theorem in NoSQL.
CAP theorem or Eric Brewers theorem states that we can only achieve at most two out of three guarantees for a database: Consistency, Availability, and Partition Tolerance.

#### What is Sharding an a NoSQL Database?
Sharding is a method of storing data records across many server instances. This is done through storage area networks to make hardware perform like a single server. The NoSQL framework is natively designed to support automatic distribution of the data across multiple servers including the query load.

#### What is Big SQL?
IBM Db2 Big SQL is a high performance massively parallel processing (MPP) SQL engine for Hadoop (software framework for distributed storage and processing of big data) that makes querying enterprise data from across the organization an easy and secure experience. A Db2 Big SQL query can quickly access a variety of data sources including HDFS (Hadoop Distributed File Scheme), GPFS (General Parallel File System), RDBMS, NoSQL databases, object stores, and WebHDFS by using a single database connection or single query for best-in-class analytic capabilities.

#### How does Impedance Mismatch Happening in a Database?
A Programming Impedance Mismatch occurs when data needs to be transformed into a different architectural paradigm. The most prominent example involves object-oriented codebases and relational databases.
An impedance mismatch arises when data is fetched from or inserted into a database. The properties of objects or classes within the codebase need to be mapped to their corresponding database table fields. 

#### What is an Aggregate-Oriented Database
Typical Aggregate-Oriented NoSQL databases will store an aggregation in the form of strings or entire documents. That is usually in plain text, often in a specific format or notation, such as JSON or XML. In the case of document NoSQL databases, the “value” portion of the entry can get much larger.

#### What is eventual consistency in the context of NoSQL?
Eventual consistency is a data modeling concept that ensures that updates made to distributed NoSQL databases will eventually be reflected across all nodes. This ensures that identical database queries will return the same results after some period of time.

#### What are the BASE Properties in NoSQL?
BASE Properties aim to handle large volumes of data and enable scalability and flexibility in distributed systems. Here is a breakdown of what each property means:
* **Basically Available:** BASE systems prioritize availability over strong consistency. This means that even in the face of failures or concurrent updates, the system remains operational and accessible to users.
* **Soft State:** BASE systems allow for temporary inconsistency or partial updates. The state of the system can be transiently inconsistent during concurrent updates, but the system is eventually brought back to a consistent state.
* **Eventual Consistency:** BASE systems guarantee that updates will eventually propagate and reach a consistent state across all replicas or nodes. However, immediate consistency is not a requirement, and there may be a delay in achieving consistency.

#### Can Normalization be used in a NoSQL Database?
Yes, normalization can be used by a NoSQL database. One of the famous NoSQL named Cassandra (key-value database) is based on normalization to finding stored data. It creates a series of tables related to the different fields. All these fields will be given true value in the table.

### Interview questions for C++.
### Interview questions for Python.
### Interview questions for Computer Vision.
### Interview questions for Machine Learning.
### Interview questions for Software Engineering, Architecture and Design.
