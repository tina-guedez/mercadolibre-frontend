import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindItem, useFindItemDetail } from '../../hooks/api';
import './ItemDetail.css';

import {
  getCurrency, getItemPrice, getCondition, getItemDecimals,
} from '../../utils/helpers';

import Breadcrumb from '../SearchResult/components/Breadcrumb/Breadcrumb';

function DetailData({ item }) {
  return (
    <div className="data-detail-container">

      <div className="data-detail-picture">
        <div className="picture-container">
          <img src={item?.picture} alt={item?.title} />
        </div>
        <div className="data-detail-description">
          <h2>Descripción del producto</h2>
          <p>{item?.description}</p>
        </div>
      </div>

      <div className="data-detail-product">
        <span className="sold-condition">
          {getCondition(item?.condition)}
          {' '}
          -
          {' '}
          {item?.sold_quantity}
          {' '}
          vendidos
          {' '}

        </span>
        <span className="title">{item?.title}</span>
        <span className="price">
          <span className="currency">{getCurrency(item?.price?.currency)}</span>
          <span>{getItemPrice(item?.price?.amount, item?.price?.decimals)}</span>
          <span className="decimals">{getItemDecimals(item?.price?.amount)}</span>
        </span>
        <button type="button" className="buy"> Comprar </button>

      </div>

    </div>
  );
}

export default function ItemDetail() {
  const { id } = useParams();
  const { dataItemDetail } = useFindItemDetail(id);
  const { dataItem } = useFindItem(dataItemDetail?.items?.title);
  return (
    <div className="item-detail-container">
      <Breadcrumb categories={dataItem?.categories} />
      <div className="wrapper">
        <DetailData item={dataItemDetail?.item} />
      </div>
    </div>
  );
}
