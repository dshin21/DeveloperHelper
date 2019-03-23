import React, {Component} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from '../apis/api';

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos:        [],
            selectedVideo: null
        };
    };

    componentDidMount() {
        this.onTermSubmit('JavaScript');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos:        response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    render = () => {
        return (
          <div className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              <div className="ui grid">
                  <div className="ui row">
                      <div className="twelve wide column centered">
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div className="twelve wide column centered">
                          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
        );
    };
}

export default Youtube;
