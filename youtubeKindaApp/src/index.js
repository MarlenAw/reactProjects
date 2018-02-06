import _ from 'lodash';
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
      selectedVideos: null
    };
    this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key: keys.youtubeAPIKey, term: term}, (data) => {
      this.setState({videos: data, selectedVideos: data[0]});
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList videos={this.state.videos} onVideoSelect={videoSelected => this.setState({selectedVideos: videoSelected})}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
