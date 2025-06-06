function countUniqueValues(arr) {
    const unique = new Set(arr);
    return unique.size;
  }
  
  console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5])); // 5
  