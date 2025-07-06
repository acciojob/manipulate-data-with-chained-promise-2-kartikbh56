//your JS code here. If required.
function manipulateArray() {
  // Step 1: Return a promise that resolves after 3 seconds with [1, 2, 3, 4]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  // Step 2: Filter out odd numbers (even numbers only)
  .then((arr) => {
    return new Promise((resolve) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      setTimeout(() => {
        document.getElementById('output').textContent = evenNumbers.toString();
        resolve(evenNumbers);
      }, 1000); // Delay after filtering
    });
  })
  // Step 3: Multiply even numbers by 2
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const doubled = evenNumbers.map(num => num * 2);
      setTimeout(() => {
        document.getElementById('output').textContent = doubled.toString();
        resolve(doubled);
      }, 2000); // Delay after multiplying
    });
  });
}

// Call the function when the script loads
manipulateArray();
