import React, { useState, useEffect } from 'react';

const CardHeader = (props) => {
  return (
    <div className='cardHeader'>
      <h1>{props.name}</h1>
      <h3>{props.zeldaName}</h3>
    </div>
  );
};

export default CardHeader;
