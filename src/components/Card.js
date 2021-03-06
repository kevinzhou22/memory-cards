/* eslint-disable */
import React from 'react';

function Card(props) {
  const { url, title, id, onClick, backgroundColor } = props;

  const handleClick = function handleClick() {
    onClick();
  };

  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="card" onClick={handleClick} style={cardStyle}>
      <div className="card-image-container">
        <img src={url} alt="" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
  
}

export { Card as default };
