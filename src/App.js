import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <h1>
        || {process.env.NODE_ENV} || {process.env.NAME}
      </h1>
      <div>hey there</div>
      <Counter />
    </>
  );
};
export default App;
