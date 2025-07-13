// src/components/HorizontalCardRow.jsx
import React from 'react';
import './HorizontalCardRow.css';

function HorizontalCardRow({ title, items }) {
  return (
    <div className="horizontalCardRow">
      <h2 className="horizontalCardRow__title">{title}</h2>
      <div className="horizontalCardRow__container">
        {items.map((item, index) => (
          <div key={index} className="horizontalCardRow__card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCardRow;
