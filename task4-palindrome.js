function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
  
  console.log(isPalindrome("Radar"));        // true
  console.log(isPalindrome("Not a Palindrome")); // false
  
  