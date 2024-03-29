import React, { Component } from 'react';


const {GetBookRequest} = require('./service_pb.js');
const {BookServiceClient} = require('./service_grpc_web_pb.js');
const grpc = {};
grpc.web = require('grpc-web');



const client = new BookServiceClient('http://localhost:8080');
 


export class Autocomplete extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    };
  }

  static defaultProperty={
    suggestions: []
  };

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  render(){
  
    const request = new GetBookRequest();
  request.setIsbn(3);
 
  console.log(client)
 
  client.getBook(request, null, (err, response) => {
    console.log(err)
    console.log(response)
  });


    const {
        onChange,
        onClick,
        onKeyDown,
        state: {
          activeSuggestion,
          filteredSuggestions,
          showSuggestions,
          userInput
        }
      } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              
              return (
                <li  key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }

    return (
       <React.Fragment>
         <input
           type="text"
           onChange={onChange}
           onKeyDown={onKeyDown}
           value={userInput}
         />
         {suggestionsListComponent}
       </React.Fragment>
     );
 };
}
export default Autocomplete;