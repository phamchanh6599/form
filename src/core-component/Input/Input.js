import React from 'react';

import './Input.scss';

export const Input = (props) => {
  const { readonly } = props;
  return (
    <div className='Input'>
      <input
        {...props}
        className={`Input__input ${readonly ? 'Input__no-border' : ''}`}
      />
    </div>
  );
};
