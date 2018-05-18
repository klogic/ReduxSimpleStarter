import React, { Component } from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyARO7zct2lmuqgK1Sy0_kFjEVRsNZ4HQlQ';


class App extends Component {

  constructor(props){
    super(props);
    this.state = { videos : []}
    
    YTSearch({key : API_KEY, term : 'surfboards'}, (videos) => {
      this.setState({ videos }) 
      // this.setState ({ videos }) equal => this.setState ({ videos: videos })
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
}


ReactDom.render(<App />, document.querySelector('.container'));

