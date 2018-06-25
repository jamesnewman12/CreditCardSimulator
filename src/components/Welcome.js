import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({totalExpense}) => {
  let cardName, cardStyle;
  if (totalExpense < 200) {
    cardName = 'Green Card';
    cardStyle = 'green';
  } else if (totalExpense >= 200 && totalExpense < 700) {
    cardName = 'Gold Card';
    cardStyle = 'gold';
  } else if(totalExpense >= 700) {
    cardName = 'Platinum Card';
    cardStyle = 'platinum';
  }

  return (
    <div className="thankYou">
      <div className='content'>
      <strong>Thank you!</strong>
      <p> We recommend </p>
      <p className={`card-name ${cardStyle}`}>{cardName}</p>
      <p>Based on your expenses information</p>
      </div>
      <Link to='/' className="button">Try again</Link>
    </div>
  )
};

export default Welcome;
