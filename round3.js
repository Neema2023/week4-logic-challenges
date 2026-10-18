
/*
Challenge 13: sumTo(n)

Pseudocode:
1. If n is less than 1, return 0.
2. Create a variable total and set it to 0.
3. Use a loop from 1 to n.
4. Add each number to total.
5. Return total.

Comparison:
The loop is easy to follow and practise.
The formula n * (n + 1) / 2 is shorter and faster,
but the loop helps us practise iteration.
*/

function sumTo(n) {
  if (n < 1) {
    return 0;
  }

  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// Test 1: Normal input
console.log(sumTo(5)); // 15

// Test 2: One
console.log(sumTo(1)); // 1

// Test 3: Larger number
console.log(sumTo(10)); // 55

// Test 4: Edge case — zero
console.log(sumTo(0)); // 0
