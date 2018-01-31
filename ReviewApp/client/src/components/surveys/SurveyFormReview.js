import React from 'react';

const SurveyFormReview = (props) =>{
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={props.onCancle}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
