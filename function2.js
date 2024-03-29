// Define a function named rangeBetween that takes two parameters: start and end
function rangeBetween(start, end) {
    // Initialize an empty array to store the range of numbers
    let arr = [];
    
    // Loop from the start value to the end value (inclusive)
    for (let i = start; i <= end; i++) {
        // Push each value into the array
        arr.push(i);
    }
    
    // Return the array containing the range of numbers
    return arr;
}

// Call the rangeBetween function with arguments 4 and 7, then print the result
console.log(rangeBetween(4, 7));

// Call the rangeBetween function with arguments -4 and 7, then print the result
console.log(rangeBetween(-4, 7));
