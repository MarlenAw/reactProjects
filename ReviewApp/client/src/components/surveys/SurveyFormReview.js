import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = (props) =>{

  const reviewFields = _.map(formFields, field => {
    return(
      <div key={field.name}>
        <label>{field.label}</label>
        <div>
          {props.formValues[field.name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>

      {/* insted of doing this for all fields..will use map */}
      {/* <div>
        <div>
          <label>Survey Title</label>
          <div>{props.formValues.title}</div>
        </div>
      </div> */}


      {reviewFields}

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
