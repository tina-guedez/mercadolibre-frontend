import React from 'react';
import './SearchResult.css';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { useFindItem } from '../../../hooks/api';
import { useQueryParams } from '../../../utils/helpers';
import ResultItem from './ResultItem/ResultItem';

export default function SearchResult() {
  const { q } = useQueryParams();
  const { dataItem } = useFindItem(q);
  const categories = dataItem?.categories;
  return (
    <div className="container-search-result">
      { dataItem && (
        <>
          <Breadcrumb categories={categories} />
          <ResultItem items={dataItem?.items} />
        </>
      )}
    </div>
  );
}
