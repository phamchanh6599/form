import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { RangeControlInput } from '../../core-component/RangeControlInput/RangeControlInput';
import { formatNumberWithCommas } from '../../utils/helperInput';

import './Premium.scss';

const UpdateButton = withStyles({
  root: {
    background: '#ffffff',
    color: '#043594',
    padding: '16px 30px',
    marginRight: '25px',
    '&:hover': {
      backgroundColor: '#4066B3',
      color: '#ffffff',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const CancelButton = withStyles({
  root: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '16px',
    borderBottom: '1px dotted white',
    borderRadius: 0,
    '&:hover': {
      borderBottom: '1px solid white',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export const PremiumEdit = ({ handleSubmit }) => {
  return (
    <div className='Premium__Edit'>
      <div className='Premium__form'>
        {/* Range Control Input  */}
        <div className='Premium__input'>
          <RangeControlInput onChange={(val) => console.log(val)} value={200} />
        </div>

        {/* Button */}
        <div className='Premium__button'>
          <UpdateButton onClick={handleSubmit}> Update </UpdateButton>
          <div className='Premium__cancel-button'>
            <CancelButton onClick={handleSubmit}>Cancel</CancelButton>
          </div>
        </div>
      </div>

      <span className='Premium__note'>
        Note: editing the premium directly impacts the level of life cover, and
        resets the extra benefits.
      </span>
    </div>
  );
};

export const Premium = ({ price, type }) => {
  const [isPremiumEdit, setIsPremiumEdit] = useState(false);
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);

  return (
    <div className='Premium'>
      {!isPremiumEdit ? (
        <div className='Premium__content'>
          {/* Price  */}
          <span className='Premium__price'>
            {formatNumberWithCommas(price)} {type}
          </span>

          {/* Edit */}
          {!config.isEditBenefit && (
            <span
              className='Premium__edit-icon'
              onClick={() => {
                setIsPremiumEdit(true);
                dispatch({
                  type: 'EDIT_PREMIUM',
                  payload: {
                    isEditPremium: true,
                  },
                });
              }}
            >
              <CreateIcon style={{ color: '#2A64BF' }} />
            </span>
          )}
        </div>
      ) : (
        <PremiumEdit
          handleSubmit={() => {
            setIsPremiumEdit(false);
            dispatch({
              type: 'EDIT_PREMIUM',
              payload: {
                isEditPremium: false,
              },
            });
          }}
        />
      )}
    </div>
  );
};
