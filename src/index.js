import React, { Component } from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyARO7zct2lmuqgK1Sy0_kFjEVRsNZ4HQlQ';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null
    }
    
    YTSearch({key : API_KEY, term : 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) 
      // this.setState ({ videos }) equal => this.setState ({ videos: videos })
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList onSelectedVideo={(video)=> {this.setState({selectedVideo: video})}} videos={ this.state.videos }/>
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));

