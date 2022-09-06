import useSWR from 'swr';
import { useDataFetchItem, useDataFetchItemDetail } from './items';

const KEY_BASE_SWR = '/api/items';

export const useFindItem = (q) => {
  const { data, error } = useSWR(`${KEY_BASE_SWR}?q=${q}`, async () => {
    const dataFetch = await useDataFetchItem(q);
    return dataFetch;
  });
  const loading = !data && !error;

  return {
    dataItem: data ?? {},
    erroritem: error,
    loadingItem: loading,
  };
};

export const useFindItemDetail = (id) => {
  const { data, error } = useSWR(`${KEY_BASE_SWR}/${id}`, async () => {
    const dataFetch = await useDataFetchItemDetail(id);
    return dataFetch;
  });
  const loading = !data && !error;

  return {
    dataItemDetail: data ?? {},
    errorItemDetail: error,
    loadingItemDetail: loading,
  };
};
