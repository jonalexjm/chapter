const https = require('https');

const totalRequests = 1000;
let completedRequests = 0;
const start = Date.now();



for (let i = 0; i < totalRequests; i++) {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(() => {
            completedRequests++;
            if (completedRequests === totalRequests) {
                const end = Date.now();
                console.log(`Total time taken for ${totalRequests} requests: ${end - start} ms`);
            }
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
        });
}