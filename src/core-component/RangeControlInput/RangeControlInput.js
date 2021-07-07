import './RangeControlInput.scss';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  formatNumberWithCommas,
  preventEnterNonNumber,
} from '../../utils/helperInput';

export const RangeControlInput = ({ onChange, name, id, value, min, max }) => {
  const [valueInput, setValueInput] = useState(value || 0);
  const currentValue = useRef(value || 0);

  const handleOnchange = (e) => {
    const value = e.target.value.replaceAll(',', '');

    onChange(value);
    setValueInput(value);
    currentValue.current = value;
  };

  const handleMinusOrPlus = (value) => () => {
    const newValue =
      Number(currentValue.current.toString().replaceAll(',', '')) + value;
    const newValueWithCommas = formatNumberWithCommas(newValue);
    setValueInput(newValueWithCommas);
    currentValue.current = newValueWithCommas;
    onChange(newValueWithCommas);
  };

  return (
    <div className='RangeControlInput'>
      <div className='RangeControlInput__container'>
        <span
          className='RangeControlInput__minus'
          onClick={handleMinusOrPlus(-100)}
        >
          -
        </span>
        <div className='RangeControlInput__form'>
          <input
            type='text'
            id={id}
            name={name}
            onChange={handleOnchange}
            onKeyDown={preventEnterNonNumber}
            value={formatNumberWithCommas(valueInput)}
            onBlur={(e) => {
              setValueInput(formatNumberWithCommas(e.target.value));
            }}
            className='RangeControlInput__input'
          />
        </div>
        <span
          className='RangeControlInput__plus'
          onClick={handleMinusOrPlus(100)}
        >
          +
        </span>
      </div>
    </div>
  );
};

RangeControlInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};
