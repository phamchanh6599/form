import React from 'react';
import { useSelector } from 'react-redux';

import './Price.scss';

export const Price = ({ price, type, currency }) => {
  const config = useSelector((state) => state.config);

  return (
    <div className={`${config.isEditPremium ? 'Price-blur' : 'Price'}`}>
      <div className='Price__content'>
        <span className='Price__currency'>{currency}</span>
        <span className='Price__price'>{price}</span>
        <span className='Price__type'>{type}</span>
      </div>
    </div>
  );
};
