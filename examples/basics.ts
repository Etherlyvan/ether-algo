import {
  reverseArray, findMax, Stack, Queue, linearSearch, binarySearch,
  bubbleSort, insertionSort, mergeSort,
} from "../src/index.js";

const input = [3, 1, 2];
console.log("Input:", input);
console.log("Reverse:", reverseArray(input));
console.log("Maximum:", findMax(input));

const stack = new Stack<string>();
stack.push("first");
stack.push("second");
console.log("Stack pop (LIFO):", stack.pop());

const queue = new Queue<string>();
queue.enqueue("first");
queue.enqueue("second");
console.log("Queue dequeue (FIFO):", queue.dequeue());
console.log("Linear search index of 1:", linearSearch(input, 1));
console.log("Binary search index of 2:", binarySearch([1, 2, 3], 2));
console.log("Bubble sort:", bubbleSort(input));
console.log("Insertion sort:", insertionSort(input));
console.log("Merge sort:", mergeSort(input));
console.log("Original input:", input);
