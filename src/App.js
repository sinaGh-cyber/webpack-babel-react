import React from 'react';

const App = () => {
  return (
    <>
      <h1>
        || {process.env.NODE_ENV} || {process.env.NAME}
      </h1>
      <div>hey there</div>
    </>
  );
};
export default App;
