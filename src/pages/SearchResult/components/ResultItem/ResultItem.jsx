import React from 'react';
import './ResultItem.css';
import { Link } from 'react-router-dom';
import { getCurrency, getItemPrice } from '../../../../utils/helpers';
import FreeShippingIcon from '../../../../assets/ic_shipping@2x.png.png';

function ItemData({ item }) {
  return (
    <div className="item-container">

      <div className="product-picture">
        <Link to={`/items/${item?.id}`}>
          <img className="picture-img" src={item?.picture} alt={item?.title} />
        </Link>
      </div>

      <div className="product-data">
        <div className="product-price">
          <span className="currency">{getCurrency(item?.price?.currency)}</span>
          <span>{getItemPrice(item?.price?.amount, item?.price?.decimals)}</span>
          <span>{item?.free_shipping && <img className="icon" src={FreeShippingIcon} alt="Icono envío gratis" />}</span>
        </div>
        <Link to={`/items/${item?.id}`} className="product-title">
          <h2>{item?.title}</h2>
        </Link>
      </div>

      <div className="product-address">
        <span>{item?.address}</span>
      </div>
    </div>
  );
}

export default function ResultItem({ items }) {
  return (
    <div className="wrapper result-list-container">
      {items && items.map((item) => {
        return (
          <div key={item?.id} className="result-container">
            <ItemData item={item} />
          </div>
        );
      })}
    </div>
  );
}
