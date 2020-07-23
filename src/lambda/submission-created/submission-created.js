/* eslint-disable */

/* eslint-disable */

// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const fetch = require('node-fetch')
const { GH_TOKEN } = process.env.GitHub_Auth
exports.handler = async event => {
  const fb = JSON.parse(event.body).payload
  console.log(`Recieved feedback: ${fb}`)
  return fetch('https://api.github.com/repos/mrsleeth/v2l-pattern-library/issues', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${GH_TOKEN}`,
      'Content-Type': 'application/vnd.github.v3+json',
    },
    body: {
      title: `Test Issue ${+new Date()}`,
      body: JSON.stringify({ fb })
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted Issue to GitHub:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}


// const fetch = require('node-fetch');

// const API_ENDPOINT = "https://icanhazdadjoke.com/";

// exports.handler = async (event, context) => {
//   return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
//     .then(response => response.json())
//     .then(data => ({
//       statusCode: 200,
//       body: data.joke
//     }))
//     .catch(error => ({ statusCode: 422, body: String(error) }));
// };