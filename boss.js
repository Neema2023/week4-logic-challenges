
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

// Tests
console.log(validatePassword("Kigali123!"));
console.log(validatePassword("kigali123"));
console.log(validatePassword("Kigali 123!"));
console.log(validatePassword("")); // Edge case


/*
Challenge 19: romanNumeral(n)

Pseudocode:
1. If n is not an integer, less than 1, or greater than 3999,
   return "Invalid".
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

// Tests
console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(9));    // IX
console.log(romanNumeral(58));   // LVIII
console.log(romanNumeral(0));    // Edge case: Invalid


/*
Challenge 20: nationalIdCheck(id)

Pseudocode:
1. Check whether the ID contains exactly 16 digits.
2. Check whether the first digit is 1.
3. Extract the birth year and check whether it is between
   1900 and 2026.
4. Check whether the sixth digit is 7 or 8.
5. Return an error message if a check fails.
6. Return true if all checks pass.
*/

function nationalIdCheck(id) {
  if (!/^\d{16}$/.test(id)) {
    return "Invalid: ID must contain exactly 16 digits.";
  }

  if (id[0] !== "1") {
    return "Invalid: First digit must be 1.";
  }

  const birthYear = Number(id.slice(1, 5));

  if (birthYear < 1900 || birthYear > 2026) {
    return "Invalid: Birth year must be between 1900 and 2026.";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "Invalid: Sixth digit must be 7 or 8.";
  }

  return true;
}

// Tests
console.log(nationalIdCheck("1199877234567890"));
console.log(nationalIdCheck("2199877234567890"));
console.log(nationalIdCheck("12345"));
console.log(nationalIdCheck("")); // Edge case
