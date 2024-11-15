// Promise example with x > 0 precondition
function fetchDataPromise(x) {
    return new Promise((resolve, reject) => {
        if (x <= 0) {
            const error = new Error('x must be a positive number');
            return reject(error);
        }

        setTimeout(() => {
            const data = { user: 'John Doe', value: x };
            resolve(data);
        }, 3000);
    });
}

// Async/Await example with x > 0 precondition
async function fetchDataAsync(x) {
    if (x <= 0) {
        throw new Error('x must be a positive number');  // Precondition failure
    }

    try {
        const result = fetchDataPromise(x);  // Reusing promise function
        console.log('Async/Await Success:', result);
    } catch (error) {
        console.log('Async/Await Error:', error.message);
    }
}

// Test async/await with valid x
fetchDataAsync(5);

// Test async/await with invalid x
// fetchDataAsync(-3);