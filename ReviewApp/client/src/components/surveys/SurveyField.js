import React from 'react';

export default ({ input, label }) => { // es6 for input.props
  return(
    <div>
      <label>{label}</label>
      <input {...input}/>
    </div>
  );
};
