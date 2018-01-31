import _ from 'lodash'; //_ is has helper functions and one of them is a math function
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'; //reduxForm is actually named reducer -> but we named it reduxForm for more clearity-check ../reducers/index.js
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

  renderFields(){
    return _.map(formFields, field => {
      return <Field key={field.name} type="text" label={field.label} name={field.name} component={SurveyField}/>
    });
  }

  render() {
    return (
    <div>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {/* <Field type="text" name="surveyTitle" component="input"/> */}
        {this.renderFields()}

        <Link to="/dashboard" className="red btn-flat white-text">
          Cancel
        </Link>

        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
  }
}

function validate(values){
  const errors = {};

  // if(!values.title){
  //   errors.title = 'You must provide a title';
  // }                               //instead of doing this for every field we can iterate over using _.each and adding a property of noValueError to the FIELDS object

  errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name, noValueError}) => {
      if(!values[name]){
        errors[name] = noValueError;
      }
    });
  return errors;
}

export default reduxForm({ //handleSubmit() is a built in function from reduxForm..thats why we can use props
  form: 'surveyForm',
  validate: validate,
  destroyOnUnmount: false //destroyOnUnmount is a built in reduxForm/reducer.. when click on back from <SurveyFormReview />..don't empty the input boxes..keep the data i inserted before hitting next
})(SurveyForm);
