const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// Define the Cloud Function
exports.computeSum = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // Ensure request body is not empty
    if (!request.body || !request.body.numbers) {
      return response.status(400).send('Input must contain an array of numbers');
    }

    // Extract the array of numbers from the request body
    const numbers = request.body.numbers;

    // Check if the input is an array
    if (!Array.isArray(numbers)) {
      return response.status(400).send('Input must be an array of numbers');
    }

    // Use the reduce function to calculate the sum
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Set the CORS headers
    response.set('Access-Control-Allow-Origin', '*')
    response.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    response.set('Access-Control-Allow-Headers', 'Content-Type')

    // Send the computed sum in the response
    response.status(200).json({ sum });
  });
});
