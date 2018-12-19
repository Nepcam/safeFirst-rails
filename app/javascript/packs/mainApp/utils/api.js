// TODO: refactor into middleware

import request from 'superagent';

import { isAuthenticated, getUserToken } from './auth';

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send';
  const headers = {
    Accept: 'application/json'
  };

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${getUserToken()}`
  }

  return request[method](endpoint)
    .set(headers)[dataMethod](data)
}
