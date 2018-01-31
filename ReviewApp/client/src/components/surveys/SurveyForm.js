import _ from 'lodash'; //_ is has helper functions and one of them is a math function
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'; //reduxForm is actually named reducer -> but we named it reduxForm for more clearity-check ../reducers/index.js
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';


const FIELDS = [
  { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
  { label: 'Subject Line', name: 'subject', noValueError: 'You must provide a subject' },
  { label: 'Email Body', name: 'body', noValueError: 'You must ente an Email'},
  { label: 'Recipient List', name: 'emails', noValueError: 'You must ente the recipient list' }
];

class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, field => {
      return <Field key={field.name} type="text" label={field.label} name={field.name} component={SurveyField}/>
    });
  }

  render() {
    return (
    <div>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({name, noValueError}) => {
      if(!values[name]){
        errors[name] = noValueError;
      }
    });
  return errors;
}

export default reduxForm({ //handleSubmit() is a built in function from reduxForm..thats why we can use props
  form: 'surveyForm',
  validate: validate
})(SurveyForm);
