/* eslint-disable */

const fetch = require('node-fetch')
const { GitHub_Auth } = process.env
const baseAPI = 'https://api.github.com';

let cardName; 
let preview;
let details = {};
let course = {};

async function callApi(path, method, body) {
  let options = {
    method: method,
    headers: {
      'Authorization': `Token ${GitHub_Auth}`,
      'Content-Type': 'application/vnd.github.v3+json',
      'Accept': `${preview ? 'application/vnd.github.inertia-preview+json' :  'application/vnd.github.v3+json'}`
    }
  };

  if(body) {
    options = {
      method: method,
      headers: {
        'Authorization': `Token ${GitHub_Auth}`,
        'Content-Type': 'application/vnd.github.v3+json',
        'Accept': `${preview ? 'application/vnd.github.inertia-preview+json' :  'application/vnd.github.v3+json'}`
      },
      body: body
    }
  }

  // console.log(options);
  
  let response = await fetch(path, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } 
  else {
    return response.json();
  }
}

async function getProjects(page, url) {
  const repo = {
    owner: 'mrsleeth',
    name: 'v2l-pattern-library'
  };

  details.page = page;
  details.url = url;
  preview = true;

  let data = await callApi(`${baseAPI}/repos/${repo.owner}/${repo.name}/projects`, 'GET')
    .catch(e => {
      console.log('There was a problem fetching the Projects data: ', e.message);
    });

    // console.log(data);
  data.forEach(project => {
    if(project.name.toLowerCase() === `${course.name} level ${course.level}`) {
      getColumns(project.columns_url);
      return true;
    }
  });
}

async function getColumns(colUrl) {
  let data = await callApi(colUrl, 'GET')
    .catch(e => {
      console.log('There was a problem fetching the Columns data: ', e.message);
    });

  data.forEach(col => {
    findCard(col.cards_url);
  });
}

async function findCard(cardsUrl) {
  let data = await callApi(cardsUrl, 'GET')
    .catch(e => {
      console.log('There was a problem fetching the Cards data: ', e.message);
    });
  
  data.forEach(card => {
    if(card.note) {
      let cardTitle = card.note.toLowerCase();
      // console.log(cardTitle,'\n', cardTitle.indexOf(cardName), '\n', cardName);
      if(cardTitle.indexOf(cardName) !== -1 && cardTitle.indexOf('feedback') !== -1 && cardTitle.indexOf('review') !== -1) {
        updateCard(card.url, card.note);
        return true;
      }
    }
    else if(card.content_url) {
      if(findIssue(card.content_url)) {
        return true;
      }
    }
  });
}

async function updateCard(cardUrl, details) {
  await callApi(cardUrl, 'PATCH', JSON.stringify({note: `${details} \n- ${details.page} - ${details.url}`}))
    .catch(e => {
      console.log('There was a problem fetching the unique card data: ', e.message);
    });
  console.log('Card updated');
}

async function findIssue(issueUrl) {
  let data = await callApi(issueUrl, 'GET')
    .catch(e => {
      console.log('There was a problem fetching the unique card data: ', e.message);
    });

    if(data.title.indexOf(cardName) !== -1 && data.title.indexOf('feedback') !== -1 && data.title.indexOf('review') !== -1) {
      console.log('Issue title: ', data.title);
      console.log(data.body);
      preview = false;
      
      await callApi(issueUrl, 'PATCH', JSON.stringify({body: `${data.body} \n- ${details.page} - ${details.url}`}))
        .catch(e => {
          console.log('There was a problem updating the issue: ', e.message);
        });
      console.log('Issue updated :D');
      return true;
    }
}


exports.handler = async event => {
  const fb = JSON.parse(event.body).payload.data
  console.log('EVENT BODY: ', event.body);
  console.log('FEEDBACK: ', fb);
  const GHJSON = {
    title: `Issue on page ${fb.page}`,
    body: `- Reviewer: ${fb.name}\n- Email: ${fb.email}\n- User Agent: ${fb.UA}\n- Full URL: https://v2lrefresh.netlify.app${fb.page}\n\n### Details\n\n${fb.message}${fb.files ? '\n\n### Screenshot\n\n![]('+fb.files.url+')' : ''}`,
    labels: ["Feedback from Review"]
  }

  course = {
    name: fb.courseName,
    level: fb.courseLevel,
    unit: fb.courseUnit,
    session: fb.courseSession,
    page: fb.coursePage
  };

  cardName = `unit ${course.unit}`;// review - feedback`;
  const API_ENDPOINT = 'https://api.github.com/repos/mrsleeth/v2l-pattern-library/issues';
  const OPTIONS =  {
    method: 'POST',
    headers: {
      'Authorization': `Token ${GitHub_Auth}`,
      'Content-Type': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify(GHJSON),
  };

  let response;

  try {
    response = await fetch(API_ENDPOINT, OPTIONS)
    // handle response
    let data = await response.json();
    getProjects(fb.page, data.html_url);

  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
