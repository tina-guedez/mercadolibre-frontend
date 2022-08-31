import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useQueryParams = () => {
  const location = useLocation();
  const urlSearchParams = useMemo(
    () => { return Object.fromEntries(new URLSearchParams(location.search)); },
    [location.search],
  );
  return urlSearchParams;
};

export const getCurrency = (item) => { return (item?.price?.currency === 'USD' ? 'U$S' : '$'); };

export const getItemPrice = (amount, decimals) => {
  return amount?.toLocaleString('es-AR', {
    maximumFractionDigits: decimals,
  });
};

export const getItemDecimals = (item) => {
  const itemAbs = Math.abs(item || 0);
  const decimals = itemAbs - Math.floor(itemAbs);
  return decimals.toFixed(2).toString().split('.')[1];
};

export const getCondition = (condition) => { return (condition === 'new' ? 'Nuevo' : 'Usado'); };
