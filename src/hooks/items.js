const URL_BASE = 'http://localhost:3000/api/items';

export const useDataFetchItem = async (q) => {
  const req = await fetch(`${URL_BASE}?q=${encodeURI(q)}`);
  const res = await req.json();
  return req.status === 200 ? res : null;
};

export const useDataFetchItemDetail = async (id) => {
  const req = await fetch(`${URL_BASE}/${id}`);
  const res = await req.json();
  return req.status === 200 ? res : null;
};
