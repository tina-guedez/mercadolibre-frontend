import React from 'react';
import './Breadcrumb.css';

export const Breadcrumb = ({ categories }) => {
  return (
    <div className='container-breadcrumb'>
      {categories && categories.map((category, i, arr) => {return (
        <span key={category}> {category} {arr.length - 1 !== i && ` > ` } </span>
        )})}
    </div>
  )
};

export default Breadcrumb;
