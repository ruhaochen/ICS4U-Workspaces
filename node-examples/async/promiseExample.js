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

// Test promise with valid x
fetchDataPromise(5)
    .then(result => {
        console.log('Promise Success:', result);
    })
    .catch(error => {
        console.log('Promise Error:', error.message);
    });

// Test promise with invalid x
fetchDataPromise(-3)
    .then(result => {
        console.log('Promise Success:', result);
    })
    .catch(error => {
        console.log('Promise Error:', error.message);
    });