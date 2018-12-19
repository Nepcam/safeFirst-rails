export function getCookie(name) {
  var matchedCookie = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (matchedCookie) return matchedCookie[2];
}

export function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/;`;
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
