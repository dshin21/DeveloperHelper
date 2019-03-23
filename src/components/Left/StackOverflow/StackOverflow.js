import React, {Component} from "react";
import stackoverflow from "./api";
import QuestionList from "./QuestionList";
import SearchBar from "../Youtube/components/Youtube";

class StackOverflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term:      '',
            questions: [],
        };
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.onTermSubmit();
    };

    onTermSubmit = async () => {
        const response = await stackoverflow.get('/search', {
            params: {
                intitle: this.state.term,
            }
        });

        this.setState({
            questions: response.data.items,
        });
    };

    onQuestionSelect = (question) => {
        let win = window.open(question.link, '_blank');
        win.focus();
    };

    render = () => {
        return (
          <div className="ui container">
              <div className="search-bar ui segment">
                  <form className="ui form" onSubmit={this.onFormSubmit}>
                      <div className="field">
                          <label>Search Stack Overflow</label>
                          <input type="text"
                                 value={this.state.term}
                                 onChange={this.onInputChange}/>
                      </div>
                      <div className="twelve wide column centered">
                          <QuestionList questions={this.state.questions} onQuestionSelect={this.onQuestionSelect}
                          />
                      </div>
                  </form>
              </div>
              {/*<div className="ui container">*/}
                  {/*<SearchBar onFormSubmit={this.onTermSubmit}/>*/}
                  {/*<div className="ui grid">*/}
                      {/*<div className="ui row">*/}
                          {/*<div className="twelve wide column centered">*/}
                              {/*<VideoDetail video={this.state.selectedVideo}/>*/}
                          {/*</div>*/}
                          {/*<div className="twelve wide column centered">*/}
                              {/*<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              {/*</div>*/}
          </div>

        );
    };
}

export default StackOverflow;
