// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    // 2 is prime
    if (num === 2) return true;
    // Even numbers greater than 2 are not prime
    if (num % 2 === 0) return false;
    // Check divisibility by odd numbers up to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    // If num is not divisible by any number up to its square root, it is prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(numbers) {
    // Use the filter method to create a new array containing only prime numbers
    return numbers.filter(num => isPrime(num));
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Call the filterPrimes function with the input array
const primeNumbers = filterPrimes(numbers);
// Output the array of prime numbers
console.log(primeNumbers); // Output: [2, 3, 5, 7]
