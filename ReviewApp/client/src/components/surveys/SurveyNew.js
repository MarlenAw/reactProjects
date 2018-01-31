import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {

  state = { showFormReview: false };  // false because don't show it by default..i wanna see <SurveyForm /> first

  renderContent(){
      if(this.state.showFormReview){
        return <SurveyFormReview onCancle={() => this.setState({showFormReview: false})}/>
      }

      return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true})}/>
  }

  render() {
    return (<div>
      {this.renderContent()}
    </div>);
  }
}

export default reduxForm({
  form: 'surveyForm' // adding this to clear out the input fields after hitting the cancel button and clicking on add and accessing the page again..the input fields are all empty
  // this works because we didn't include destroyOnUnmount: false

})(SurveyNew);
