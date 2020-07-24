/* eslint-disable */

const fetch = require('node-fetch')
const { GitHub_Auth } = process.env

exports.handler = async event => {
  const fb = JSON.parse(event.body).payload.data

  const GHJSON = {
    title: `Issue on page ${fb.page}`,
    body: `- Reviewer: ${fb.name}\n- Email: ${fb.email}\n- User Agent: ${fb.UA}\n- Full URL: https://v2lrefresh.netlify.app/${fb.page}\n\n### Details\n\n${fb.message}${fb.files ? '\n\n### Screenshot\n\n'+JSON.stringify(fb.files) : ''}`,
    labels: ["Feedback from Review"]
  }

  return fetch('https://api.github.com/repos/mrsleeth/v2l-pattern-library/issues', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${GitHub_Auth}`,
      'Content-Type': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify(GHJSON),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted Issue to GitHub:\n ${JSON.stringify(data)}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}