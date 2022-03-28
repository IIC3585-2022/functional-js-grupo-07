
# node-array-module

A simple npm module that provides methods for working with arrays.

## HOW TO INSTALL

npm install my-array-module --save

## HOW TO USE

var array = require('my-array-module');


## METHODS
var arr = [1, 2, 3, 4]

```javascript
# arraySum
This function returns the sum of values in an array

var result = array.arraySum(arr);
//Returns 10

# arrayAverage
This function returns the average value of an array of numbers

var result = array.arrayAverage(arr)
//Returns 2.5

# arrayMax
This function returns the maximum value in an array of numbers

var result = array.arrayMax(arr)
// Returns 4

# arrayMin
This function returns the minimum value in an array of numbers

var result = array.arrayMin(arr)
// Returns 1

# arrayUniq
This function removes all duplicates and returns a unique array

var arr1 = [1, 3, 2, 4, 1, 1, 2, 5, 4]

var result = array.arrayUniq(arr1)
// Returns [1, 3, 2, 4, 5]

# arrayUniqSort
This function removes all duplicates and returns the sorted array

var result = array.arrayUniqSort(arr)
// Returns [1, 2, 3, 4, 5]

# arrayUniqString
This function removes duplicate string values and returns the sorted array

var arr2 = ['node', 'ruby', 'node', 'java', 'c#', 'java']
var result = array.arrayUniqString(arr2)
// Returns ['c#', 'java', 'node', 'ruby']





