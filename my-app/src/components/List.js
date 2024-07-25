import React from 'react';

const List = ({retreat}) => {
  return (
    <div className="retreat-item">
      <img src={retreat.image} />
      <h2>{retreat.title}</h2>
      <p>{retreat.description}</p>
      <p>Date:  {new Date(retreat.date).toLocaleDateString()}</p>
      <p>Location: {retreat.location}</p>
      <p>Price: ${retreat.price}</p>
    </div>
  );
};

export default List;
