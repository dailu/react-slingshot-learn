import axios from 'axios';
import buildUrl from 'build-url';

import localStorageVariables from './localStorageVariables';

export function databaseEndpoint(withDatabase = false) {
  const url = {
    path: '/',
    queryParams: {}
  };

  const user = localStorage.getItem(localStorageVariables.database.user);
  if (user) {
    url.queryParams.user = user;
  }

  const password = localStorage.getItem(localStorageVariables.database.pass);
  if (password) {
    url.queryParams.password = password;
  }

  if (withDatabase) {
    url.queryParams.database = localStorage.getItem(localStorageVariables.database.use);
  }

  return buildUrl(localStorage.getItem(localStorageVariables.database.host), url);
}

export async function runQuery(query, withDatabase = false) {
/*  const head = {
    headers: {crossDomain: true}
};*/
  return axios.post(databaseEndpoint(withDatabase)+"&add_http_cors_header=1", `${query} FORMAT JSON`);
}
