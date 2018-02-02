import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const keys = require("../config/keys");


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],

    };

    YTSearch({key: keys.youtubeAPIKey, term: 'surfboards'}, (data) => {
      this.setState({
        videos: data,

      });
    });
  }

  render() {
    return(
      <div>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
