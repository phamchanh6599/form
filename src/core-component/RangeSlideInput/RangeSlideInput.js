import React, { useState, useRef } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import './RangeSlideInput.scss';

const RangeInput = withStyles({
  root: {
    color: '#4066B3',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#043594',
    border: '2px solid #043594',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export const RangeSlideInput = ({ onChange, value }) => {
  const currentValue = useRef(value);

  const handleValue = (value) => {
    const newValue = Number(currentValue.current) + value;
    onChange(newValue);
    currentValue.current = newValue;
  };

  return (
    <div className='RangeSlideInput'>
      <span
        className='RangeSlideInput__minus'
        onClick={() => handleValue(-100)}
      >
        -
      </span>
      <div className='RangeSlideInput__input'>
        <RangeInput
          max={1000000}
          step={10000}
          defaultValue={currentValue.current}
          onChange={(event, newValue) => onChange(newValue)}
        />
      </div>
      <span className='RangeSlideInput__plus' onClick={() => handleValue(100)}>
        +
      </span>
    </div>
  );
};
