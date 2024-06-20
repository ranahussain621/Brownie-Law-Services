import React from 'react';
import "../Styles/reviewStar.css"
const ReviewStar = ({ filled }) => {
  return (
    <span className={filled ? 'star filled' : 'star empty'}>
      &#9733;
    </span>
  );
};

export default ReviewStar;