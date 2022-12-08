import React, { useState, useEffect } from 'react';

const CardHeader = (props) => {
  return <div className='cardHeader'>{props.name}</div>;
};

export default CardHeader;
