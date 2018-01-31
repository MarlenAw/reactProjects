import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

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

      <button className="green btn-flat right white-text" onClick={() => props.submitSurvey(props.formValues, props.history)}>
        {/* submitSurvey -> ../../actions/index  */}
        Send Survey
        <i className="material-icons right">email</i>
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

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
