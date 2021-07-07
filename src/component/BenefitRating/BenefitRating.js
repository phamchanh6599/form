import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import './BenefitRating.scss';

export const BenefitDetail = ({ benefit, name, percent }) => {
  return (
    <div className='BenefitRating__detail'>
      <span className='BenefitRating__benefit'>{benefit}</span>
      <span className='BenefitRating__name'>{name}</span>
      <span>{percent}</span>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#4066B3',
    color: '#ffffff',
    padding: '4px 25px',
  },
}));

export const BenefitRating = () => {
  const classes = useStyles();

  const Benefits = [
    {
      benefit: 'Life cover',
      name: 'John',
      percent: '+75%',
    },
    {
      benefit: 'Critical illness',
      name: 'Dee',
      percent: '+25%',
    },
  ];

  return (
    <div className='BenefitRating'>
      <div>
        <Accordion>
          <AccordionSummary
            className='BenefitRating__accordion'
            classes={{
              root: classes.root,
            }}
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: green[500],
                }}
              />
            }
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <div className='BenefitRating__heading'>
              <span className='BenefitRating__plus-icon'>
                <AddCircleOutlineIcon />
              </span>
              Benefits rating
            </div>
          </AccordionSummary>
          <AccordionDetails
            classes={{
              root: classes.root,
            }}
          >
            <div className='BenefitRating__content'>
              {Benefits.map((x, idx) => (
                <BenefitDetail
                  key={idx}
                  benefit={x.benefit}
                  name={x.name}
                  percent={x.percent}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

BenefitRating.propTypes = {};
