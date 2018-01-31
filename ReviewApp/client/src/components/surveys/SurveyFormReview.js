import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = (props) =>{
  return (
    <div>
      <h5>Please confirm your entries</h5>

      {/* <div>
        <div>
          <label>Survey Title</label>
          <div>{props.formValues.title}</div>
        </div>
      </div> */}



      <button className="yellow darken-3 btn-flat" onClick={props.onCancle}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state){
  console.log(state);
  return{
    formValues: state.form.surveyForm.values //this line here is coming from console.log(state) from the browser
  }
}

export default connect(mapStateToProps)(SurveyFormReview);
