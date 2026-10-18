
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


/*
Challenge 3: motoFare(km)

Pseudocode:
1. If km is 0 or less, return 0.
2. If km is 2 or less, return 300.
3. Calculate the extra distance after the first 2 km.
4. Round the extra distance up using Math.ceil().
5. Add 107 RWF for each extra kilometer to 300 RWF.
6. Return the total fare.
*/

function motoFare(km) {
  if (km <= 0) {
    return 0;
  }

  if (km <= 2) {
    return 300;
  }

  const extraKm = Math.ceil(km - 2);
  const fare = 300 + extraKm * 107;

  return fare;
}

// Test 1: Normal journey
console.log(motoFare(5)); // 621

// Test 2: Exactly 2 km
console.log(motoFare(2)); // 300

// Test 3: Partial extra kilometer
console.log(motoFare(2.5)); // 407

// Test 4: Edge case — zero distance
console.log(motoFare(0)); // 0


/*
Challenge 4: convertSeconds(total)

Pseudocode:
1. Calculate the hours using Math.floor(total / 3600).
2. Calculate the remaining minutes.
3. Calculate the remaining seconds.
4. Make minutes and seconds have two digits.
5. Return the result in the format "2h 05m 09s".

Comparison:
Using separate variables makes the code easier to read.
A single complex expression might be shorter, but it is harder to understand.
*/

function convertSeconds(total) {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${hours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

// Test 1: Normal time
console.log(convertSeconds(7509)); // 2h 05m 09s

// Test 2: Less than one minute
console.log(convertSeconds(45)); // 0h 00m 45s

// Test 3: Exactly one hour
console.log(convertSeconds(3600)); // 1h 00m 00s

// Test 4: Edge case — zero seconds
console.log(convertSeconds(0)); // 0h 00m 00s



/*
Challenge 5: changeMaker(amount)

Pseudocode:
1. Create an array of available denominations from largest to smallest.
2. Create an empty result array.
3. For each denomination:
   a. Calculate how many times it fits into the remaining amount.
   b. If the count is greater than zero, save the denomination and count.
   c. Subtract the value used from the remaining amount.
4. Return the result.

Comparison:
A loop avoids repeating the same calculation for every denomination.
Writing a separate if statement for each denomination is possible,
but the loop is easier to maintain when denominations change.
*/

function changeMaker(amount) {
  if (amount < 0 || !Number.isInteger(amount)) {
    return "Invalid amount";
  }

  const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  const result = [];

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(amount / denomination);

    if (count > 0) {
      result.push(`${count} x ${denomination} RWF`);
      amount = amount % denomination;
    }
  }

  if (result.length === 0) {
    return "No change needed";
  }

  return result.join(", ");
}

// Test 1: Normal amount
console.log(changeMaker(7385));
// 1 x 5000 RWF, 1 x 2000 RWF, 3 x 100 RWF,
// 1 x 50 RWF, 1 x 20 RWF, 1 x 10 RWF, 1 x 5 RWF

// Test 2: Exact denomination
console.log(changeMaker(5000));
// 1 x 5000 RWF

// Test 3: Zero amount
console.log(changeMaker(0));
// No change needed

// Test 4: Edge case — negative amount
console.log(changeMaker(-100));
// Invalid amount
