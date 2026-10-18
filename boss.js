
/*
Challenge 18: validatePassword(pw)

Pseudocode:
1. Create an empty errors array.
2. Check whether the password has at least 8 characters.
3. Check for an uppercase letter.
4. Check for a lowercase letter.
5. Check for a digit.
6. Check for a special character from !@#$%^&*.
7. Check whether the password contains spaces.
8. Return an object with valid and errors.
*/

function validatePassword(pw) {
  const errors = [];

  if (pw.length < 8) {
    errors.push("Password must have at least 8 characters.");
  }

  if (!/[A-Z]/.test(pw)) {
    errors.push("Password must contain an uppercase letter.");
  }

  if (!/[a-z]/.test(pw)) {
    errors.push("Password must contain a lowercase letter.");
  }

  if (!/[0-9]/.test(pw)) {
    errors.push("Password must contain a digit.");
  }

  if (!/[!@#$%^&*]/.test(pw)) {
    errors.push("Password must contain a special character.");
  }

  if (/\s/.test(pw)) {
    errors.push("Password must not contain spaces.");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

// Test 1: Valid password
console.log(validatePassword("Kigali123!"));

// Test 2: Missing uppercase and special character
console.log(validatePassword("kigali123"));

// Test 3: Password contains a space
console.log(validatePassword("Kigali 123!"));

// Test 4: Edge case — empty password
console.log(validatePassword(""));



/*
Challenge 19: romanNumeral(n)

Pseudocode:
1. If n is less than 1 or greater than 3999, return "Invalid".
2. Create arrays of Roman numeral values and symbols.
3. Create an empty result string.
4. Loop through the values from largest to smallest.
5. While n is greater than or equal to the current value:
   a. Add its symbol to the result.
   b. Subtract its value from n.
6. Return the result.
*/

function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [
    1000, 900, 500, 400, 100, 90,
    50, 40, 10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD", "C", "XC",
    "L", "XL", "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

// Test 1: Normal number
console.log(romanNumeral(1994)); // MCMXCIV

// Test 2: Small number
console.log(romanNumeral(9)); // IX

// Test 3: Another number
console.log(romanNumeral(58)); // LVIII

// Test 4: Edge case — zero
console.log(romanNumeral(0)); // Invalid
