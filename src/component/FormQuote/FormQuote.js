import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CreateIcon from '@material-ui/icons/Create';
import { green } from '@material-ui/core/colors';

import { Box } from '../../core-component/Box/Box';
import { RangeSlideInput } from '../../core-component/RangeSlideInput/RangeSlideInput';
import { Input } from '../../core-component/Input/Input';
import { Price } from '../Price/Price';
import { BenefitRating } from '../BenefitRating/BenefitRating';
import { Premium } from '../Premium/Premium';

import { formatNumberWithCommas } from '../../utils/helperInput';

import './FormQuote.scss';

export const Benefit = ({ name, amount }) => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [valueInput, setValueInput] = useState(amount);

  return (
    <div className='Benefit'>
      <div className='Benefit__content'>
        {/* Name  */}
        <div className='Benefit__name-detail'>
          <span className='Benefit__completed'>
            <CheckCircleOutlineIcon
              style={{
                color: '#ffffff',
                background: green[500],
                borderRadius: '50%',
              }}
            />
          </span>
          <span className='Benefit__name'>{name}</span>
        </div>

        {/* Detail  */}
        <div className='Benefit__amount-detail'>
          <div className='Benefit__amount'>
            <Input
              type='text'
              value={valueInput && formatNumberWithCommas(valueInput)}
              onChange={(e) => {
                const value = e.target.value.replaceAll(',', '');
                setValueInput(formatNumberWithCommas(value));
              }}
              readonly={!isOpenForm}
            />
          </div>

          {/* Edit Icon  */}
          {!config.isEditBenefit && !config.isEditPremium && (
            <span
              className='Benefit__edit'
              onClick={() => {
                setIsOpenForm(true);
                dispatch({
                  type: 'EDIT_BENEFIT',
                  payload: {
                    isEditBenefit: true,
                  },
                });
              }}
            >
              <CreateIcon
                style={{
                  color: '#043594',
                }}
              />
            </span>
          )}
        </div>

        {/* Amount  */}
        <div className='Benefit__amount-cover'>
          {formatNumberWithCommas(valueInput)}
        </div>
      </div>

      {/* Form  */}
      {isOpenForm && (
        <div className='Benefit__form'>
          <div className='Benefit__input'>
            <RangeSlideInput
              onChange={(value) => {
                setValueInput(formatNumberWithCommas(value));
              }}
              value={amount}
            />
          </div>
          <div className='Benefit__buttons'>
            <span
              onClick={() => {
                setIsOpenForm(false);
                dispatch({
                  type: 'EDIT_BENEFIT',
                  payload: {
                    isEditBenefit: false,
                  },
                });
              }}
            >
              Cancel
            </span>
            <span
              onClick={() => {
                setIsOpenForm(false);
                dispatch({
                  type: 'EDIT_BENEFIT',
                  payload: {
                    isEditBenefit: false,
                  },
                });
              }}
            >
              Update
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export const FormQuote = () => {
  const benefits = [
    {
      name: 'Life cover',
      amount: '500000',
      isEdit: true,
      isAmount: true,
      isCompleted: true,
    },
    {
      name: ' Critical illness',
      amount: '400000',
      isEdit: true,
      isAmount: true,
      isCompleted: true,
    },
    {
      name: 'Permanent & total disability',
      amount: '500000',
      isEdit: true,
      isAmount: true,
      isCompleted: false,
    },
  ];

  return (
    <div className='FormQuote'>
      <Box>
        {/* Header  */}
        <div className='FormQuote__header'>
          <Price price='173.58' type='per month' currency='USD' />

          {/* Line  */}
          <div className='FormQuote__sticky-hide'></div>

          <Premium price='2083' type='USD Annualised premium' />
        </div>

        {/* Benefit Rating */}
        <BenefitRating />

        {/* Benefit  */}
        <div className='FormQuote__benefit'>
          {/* Name  */}
          <div className='FormQuote__name'>
            <span className='FormQuote__first-name'>John</span>
            <span className='FormQuote__last-name'>Dee</span>
          </div>

          {/* Content  */}
          {benefits.map((item, idx) => {
            return <Benefit key={idx} name={item.name} amount={item.amount} />;
          })}
        </div>
      </Box>
    </div>
  );
};

FormQuote.propTypes = {
  props: PropTypes,
};
