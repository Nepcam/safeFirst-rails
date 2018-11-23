const decode = require('jwt-decode');

import { getCookie, setCookie, deleteCookie } from "./cookie";

const cookieName = 'safeFirstToken';

export function isAuthenticated() {
  const token = getCookie(cookieName);
  return !!token;
}

export function setUserToken(authHeader) {
  const token = authHeader.split(' ')[1];
  setCookie(cookieName, token);

  return decode(token);
}

export function getUserToken() {
  return getCookie(cookieName);
}

export function removeUserToken() {
  deleteCookie(cookieName);
}
