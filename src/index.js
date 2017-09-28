import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';
import {Coments} from './components/coments.js';
const API_KEY = 'AIzaSyAoN3ApNc-pVD9fu8OxdvT-f6vtzr3XqVs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null,
      comments:[],
      newComent:"",
    }
    this.videoSearch=this.videoSearch.bind(this);
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    var aux=this.state.comments
    this.state.newComent? aux.push(this.state.newComent): null
    console.log("llegue")
    this.setState({
      comments:aux
    })

  }



  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]

      });
      for (var i = 0; i < 5; i++) {
      console.log(videos[i])
           }
    });
  }

  render() {
    console.log(this)
    //const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
    <div>
      <Coments newComent={this.state.newComent} handleClick={this.handleClick}/>
      <SearchBar onSearchTermChange={this.videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
      videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
