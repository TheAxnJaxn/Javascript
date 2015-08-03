towers:

 - open towers/html/towers.html in a browser to play Towers of Hanoi

tictactoe.js:

 - Javascript Tic Tac Toe game (Note: incomplete)

argumentsExercises.js:
 - sum: takes any number of arguments and returns the sum.
 - myBind: binds context, arguments given when called, and any extra arguments.
 - curriedSum: takes an integer (how many numbers to sum) and returns a function that can be successively called with single arguments until it finally returns a sum.
 - curry: returns a function that will collect arguments until there are the correct number of them, and then call the original function with all arguments applied. If there ar enot enough arguments, it returns itself.
 - inherits: implements class inheritance using a surrogate. If the child class's prototype were set directly to the parent class's prototype, then any new methods defined on the child class's prototype would end up also being added to the parent class's prototype.

arrayExercises.js:

 - myEach: takes a callback function, calls that function on every element of the array, and then returns the original array.
 - myMap: returns a new array with the results of running the called block once for each element. Must use myEach function.
 - myReduce: applies a function against an accumulator and each value of the array to reduce it to a single value. Takes a function; start the accumulator variable with the first value.
 - myUniq: returns new array of unique elements, in the order in which they first appeared. Must use myEach.
 - twoSum: finds all pairs of positions where the elements at those positions sum to zero.
 - myTranspose: called on a square matrix (two-dimensional grid of numbers), converts between the row-oriented and column-oriented representations of that matrix.

iterationAndRecursionExercises.js:

 - bubbleSort: https://en.wikipedia.org/wiki/Bubble_sort. Iterate through the Array at least once, comparing two elements at a time. If the first element is larger than the second, then swap them in the Array and note that a swap was made.
 - mySubstrings: takes a String and returns an Array containing each of its substrings, without repeat substrings. Example output: substrings("aab") => ["a", "aa", "aab", "ab", "b"].
 - range: takes a start and an end and returns an array of all numbers between. If end < start, returns the empty array.
 - exponent1: one recursive way of returning the value of one integer to the power of another integer.
 - exponent2: a second recursive way of returning the value of one integer to the power of another integer.
 - fib: return the first n Fibonacci numbers in an array.
 - bsearch: recursive binary search (https://en.wikipedia.org/wiki/Binary_search_algorithm).
 - makeChange: http://web.archive.org/web/20130215052843/http://rubyquiz.com/quiz154.html
 - mergeSort: sorts an array of integers using heper method merge.
 - subsets: return all subsets of an array.

courses.js:

 - A set of classes to model Students and Courses with appropriate functions. Each Student has a first and last name, and Array of courses. Each Course has a name, department, credits, Array of students, Array of days, and time block #1-8.
