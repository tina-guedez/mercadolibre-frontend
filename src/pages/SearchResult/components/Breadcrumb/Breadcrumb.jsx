import React from 'react';
import './Breadcrumb.css';
import PropTypes from 'prop-types';

export default function Breadcrumb({ categories = [] }) {
  return (
    <div className="container-breadcrumb">
      {categories && categories.map((category, i, arr) => {
        return (
          <span key={category}> {category} {arr.length - 1 !== i && ` > `} </span>
        );
      })}
    </div>
  );
}

Breadcrumb.propTypes = {
  // eslint-disable-next-line react/require-default-props
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};
