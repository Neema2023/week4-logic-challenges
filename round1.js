
/*
Challenge 1: isLeapYear(year)

Understand:
Input: a year.
Output: true if it is a leap year, otherwise false.

Examples:
2024 -> true
1900 -> false
2000 -> true

Pseudocode:
1. If year is divisible by 400, return true.
2. If year is divisible by 100, return false.
3. If year is divisible by 4, return true.
4. Otherwise, return false.
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}

// Test 1: Normal leap year
console.log(isLeapYear(2024)); // true

// Test 2: Century year that is not a leap year
console.log(isLeapYear(1900)); // false

// Test 3: Century year that is a leap year
console.log(isLeapYear(2000)); // true

// Test 4: Edge case
console.log(isLeapYear(2023)); // false
