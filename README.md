# JavaScript Basics Repository

This repository contains a collection of JavaScript code snippets demonstrating the use of arrays, objects, functions, and loops. The code examples are designed to help you understand the fundamentals of JavaScript and how to work with different data types and structures.

## Table of Contents

- [Introduction](#introduction)
- [Arrays](#arrays)
- [Objects](#objects)
- [Functions](#functions)
- [Loops](#loops)
- [Usage](#usage)

## Introduction

This repository is a collection of JavaScript code examples that cover essential concepts such as arrays, objects, functions, and loops. The code is intended to provide a hands-on approach to learning JavaScript and can be used as a reference for common programming tasks.

## Arrays

The code includes examples of creating and manipulating arrays using various methods such as `push`, `pop`, `unshift`, `shift`, `join`, and `slice`. 

Example:

```javascript
const mixedTypes = ['leah', 2345, false, [1, 2, 'hello'], undefined, { a: 'b' }];
mixedTypes.push('item added', 1, true); // Modifies array by adding items
console.log(mixedTypes);

mixedTypes.pop(); // Removes last item in array
console.log(mixedTypes);

mixedTypes.unshift('first'); // Adds item at the beginning of the array
console.log(mixedTypes);

mixedTypes.shift(); // Removes item at the beginning of the array
console.log(mixedTypes);

let arrToStr = mixedTypes.join();
console.log(mixedTypes);
console.log(arrToStr);

##Author lishyamuchiri