import React from 'react';

export default ({ input, label, meta: { error, touched } }) => { // es6 for input.props
  // console.log(meta);
  return(
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}} >
          {touched && error}   {/*// if touched is true and error exists then show the error */}
      </div>
    </div>
  );
};
