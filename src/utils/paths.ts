export const BASE_URL = import.meta.env.BASE_URL;

export const page = (path = '') =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;

export const asset = (path) =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;
