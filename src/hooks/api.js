import useSWR from 'swr';
import { useDataFetchItem, useDataFetchItemDetail } from './items';

export const useFindItem = (q) => {
  const { data, error } = useSWR('dataFetchItem', async () => {
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
  const { data, error } = useSWR('dataFetchItemDetail', async () => {
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
