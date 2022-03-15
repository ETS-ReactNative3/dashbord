export const PORT = '443';
export const PROTOCOL = 'https';
export const DOMAIN = '195.15.218.240';
export const BASE_URL = `${PROTOCOL}://${DOMAIN}:${PORT}/ic/api`;
export const CONTENT_TYPE = 'application/json';
export const AUTHORIZATION = 'Bearer '+localStorage.getItem('token');
export const HEADERS = {
    Authorization: AUTHORIZATION
};
