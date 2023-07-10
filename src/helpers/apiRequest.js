import { encode } from 'js-base64';

//const https = require('https');

// ONLY IN DEVELOPMENT
//const httpsAgent = new https.Agent({
//  rejectUnauthorized: false
//});

// TODO: ADD TRY & CATCH TO HANDLE EXCEPTIONS AND DON'T DISPLAY ERROR MESSAGES TO THE USER

function authHeader(token) {
  const isLoggedIn = token;

  if (isLoggedIn) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

function handleResponse(response, url, requestOptions) {
  return response.text().then((text) => {
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      data = text;
    }

    if (!response.ok) {
      const request = JSON.stringify({
        status: response.status,
        statusText: response.statusText,
        url,
        method: requestOptions.method,
        body: JSON.stringify(requestOptions.body),
        headers: requestOptions.headers,
      });
      const errorCode = encode(request);

      return Promise.reject(errorCode);
    }

    return data;
  });
}

function get(token, url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(token),
    // agent: httpsAgent,
  };

  // console.log(`OPTIONS: ${JSON.stringify(requestOptions)}`);

  return fetch(url, requestOptions).then(
    (response) => handleResponse(response, url, requestOptions),
  );
}

function post(token, url, body, contentType = 'application/json') {
  let headers = {};
  let formattedBody = body;

  if (contentType === 'application/json') {
    headers = { 'Content-Type': 'application/json' };
    formattedBody = JSON.stringify(body);
  }

  const requestOptions = {
    method: 'POST',
    headers: { ...headers, ...authHeader(token) },
    // agent: httpsAgent,
    body: formattedBody,
  };

  return fetch(url, requestOptions).then(
    (response) => handleResponse(response, url, requestOptions),
  );
}

function put(token, url, body, contentType = 'application/json') {
  let formattedBody = body;
  let headers = {};

  if (contentType === 'application/json') {
    headers = { 'Content-Type': 'application/json' };
    formattedBody = JSON.stringify(body);
  }

  const requestOptions = {
    method: 'PUT',
    headers: { ...headers, ...authHeader(token) },
    //agent: httpsAgent,
    body: formattedBody,
  };
  return fetch(url, requestOptions).then(
    (response) => handleResponse(response, url, requestOptions),
  );
}

// apidelete because delete is a reserved word in javascript
function apidelete(token, url) {
  const requestOptions = {
    method: 'DELETE',
    //agent: httpsAgent,
    headers: authHeader(token),
  };
  return fetch(url, requestOptions).then(
    (response) => handleResponse(response, url, requestOptions),
  );
}

function objectToQueryString(obj, key = null) {
  const str = [];

  if (obj !== null && obj !== undefined) {
    Object.keys(obj).forEach((p) => {
      if (typeof obj[p] === 'object') {
        const f = objectToQueryString(obj[p], p);
        str.push(f);
      } else if (obj[p] !== null && obj[p] !== undefined) {
        str.push(`${key !== null ? key : encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
      }
    });
  }

  return str.join('&');
}

const apiRequest = {
  get,
  post,
  put,
  delete: apidelete,
  objectToQueryString,
};

export default apiRequest;
