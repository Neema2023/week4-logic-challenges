
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

/*
Challenge 2: getBMICategory(weightKg, heightM)

Pseudocode:
1. If height is 0 or less, return "Invalid height".
2. Calculate BMI using weight / (height * height).
3. If BMI is below 18.5, return "Underweight".
4. If BMI is below 25, return "Normal".
5. If BMI is below 30, return "Overweight".
6. Otherwise, return "Obese".
*/

function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) {
    return "Invalid height";
  }

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi < 25) {
    return "Normal";
  }

  if (bmi < 30) {
    return "Overweight";
  }

  return "Obese";
}

// Test 1: Normal category
console.log(getBMICategory(60, 1.7)); // Normal

// Test 2: Underweight category
console.log(getBMICategory(45, 1.7)); // Underweight

// Test 3: Overweight category
console.log(getBMICategory(85, 1.7)); // Overweight

// Test 4: Edge case — invalid height
console.log(getBMICategory(60, 0)); // Invalid height
