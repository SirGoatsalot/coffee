import React from 'react';

const DeleteButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.deleteDrink(props.id);
        }}
        className='cardButton deleteButton'
      >
        X
      </button>
    </div>
  );
};

export default DeleteButton;
