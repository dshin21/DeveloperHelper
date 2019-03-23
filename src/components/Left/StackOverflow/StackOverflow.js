import React, {Component} from "react";
import stackoverflow from "./api";

class StackOverflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
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
        });
        console.log(response);
    };
    
    render = () => {
        return (
          <div className="search-bar ui segment">
              <form className="ui form" onSubmit={this.onFormSubmit}>
                  <div className="field">
                      <label>Search Stack Overflow</label>
                      <input type="text" value={this.state.term}
                             onChange={this.onInputChange}/>
                  </div>
              </form>
          </div>
        );
    };
}

export default StackOverflow;
