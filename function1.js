// Function definition to swap case of characters in a string
function swapCase(inputString) {
    // Initialize an empty string to store the swapped characters
    let swappedString = '';
    // Iterate through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Get the current character
        let char = inputString[i];
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // If uppercase, convert it to lowercase and add to swappedString
            swappedString += char.toLowerCase();
        } else {
            // If lowercase, convert it to uppercase and add to swappedString
            swappedString += char.toUpperCase();
        }
    }
    // Return the swapped string
    return swappedString;
}

// Example input
let inputString = 'The Quick Brown Fox';

// Function call to swap case
let outputString = swapCase(inputString);

// Displaying the output
console.log(outputString);
