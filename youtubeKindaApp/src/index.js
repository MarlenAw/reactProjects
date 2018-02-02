import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <div>
    Hi
  </div>
}

ReactDom.render(<App />, document.querySelector('.container'));
