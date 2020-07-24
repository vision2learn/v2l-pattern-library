/* eslint-disable */

/* eslint-disable */

// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const fetch = require('node-fetch')
const { GitHub_Auth } = process.env
exports.handler = async event => {
  const fb = JSON.parse(event.body).payload.data
  // console.log(`Recieved feedback: ${JSON.stringify(fb)}`)

  const issueBody = `
    - Reviewer: ${fb.name}\n
    - Email: ${fb.email}\n
    - User Agent: ${fb.UA}\n\n

    ### Details
    ${fb.message}
  `;

  console.log(issueBody)

  return fetch('https://api.github.com/repos/mrsleeth/v2l-pattern-library/issues', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${GitHub_Auth}`,
      'Content-Type': 'application/vnd.github.v3+json',
    },
    body: {
      "title": `Issue on page ${fb.page}`,
      "body": issueBody
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted Issue to GitHub:\n ${JSON.stringify(data)}`)
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