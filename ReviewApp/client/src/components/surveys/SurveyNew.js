import React, {Component} from 'react';
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

export default SurveyNew;
