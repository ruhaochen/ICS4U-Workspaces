// Callback example with x > 0 precondition
function fetchDataCallback(x, callback) {
    console.log('starting...')
    if (x <= 0) {
        const error = new Error('x must be a positive number');
        return callback(error, null);
    }

    setTimeout(() => {
        const data = { user: 'John Doe', value: x };
        callback(null, data);
    }, 2000);
}

// Test callback with valid x
fetchDataCallback(5, (error, result) => {
    if (error) {
        console.log('Callback Error:', error.message);
    } else {
        console.log('Callback Success:', result);
    }
});

// // Test callback with invalid x
fetchDataCallback(-3, (error, result) => {
    if (error) {
        console.log('Callback Error:', error.message);
    } else {
        console.log('Callback Success:', result);
    }
});