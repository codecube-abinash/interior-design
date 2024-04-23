import React from 'react';

const Rating = ({ rating }) => {
  // const starPercentage = rating * 100; // Commented out the previous calculation

  const starStyle = {
    display: 'inline-block',
    width: '100px',
    height: '20px'
  };

  const starFillStyle = {
    color: '#f8ce0b'
  };

  const starEmptyStyle = {
    color: '#e4e5e9'
  };

  return (
    <div className="rating" style={starStyle}>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {(index - rating) < -1 ? (
            <i className="bi bi-star-fill" style={starFillStyle}></i>
          ) : (index - rating) < 0 ? (
            <i className="bi bi-star-half" style={starFillStyle}></i>
          ) : (
            <i className="bi bi-star" style={starEmptyStyle}></i>
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
