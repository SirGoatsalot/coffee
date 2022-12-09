import React from 'react';
import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';

const App = () => {
  return (
    <div>
      <Header name={'Custom Recipe'} />
      <CardContainer />
    </div>
  );
};

export default App;
