// Youtube Api Key

const API_KEY = "AIzaSyBbP8z9WhDz6B7wprJg4wD-3Lu1PNiG8qM";

// Import Core libraries

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

// Import Components

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create new component.

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('React Js');
   }
    //ajax call
    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
    }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchtermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// append it to the dom

ReactDOM.render(<App />, document.getElementById("main"));
