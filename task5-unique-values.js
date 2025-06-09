// Task A: Unique values
function countUniqueValues(arr) {
    const unique = new Set(arr);
    return unique.size;
  }
  
  console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5])); // 5

  // Task B: Finding largest and smallest numbers
const numbers = [24,5,12,457,897,67];

function findLargestAndSmallest(arr) {
  //Sort an array
const sortedArray = numbers.sort((a,b)=> a - b);

const smallest = sortedArray[0];
const largest = sortedArray[sortedArray.length - 1];

return {smallest, largest}

}
console.log(findLargestAndSmallest(numbers));