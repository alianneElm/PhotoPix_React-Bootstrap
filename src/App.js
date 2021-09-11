import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';


class App extends Component {
  state = {
    input: '',
    pictures: [],
  }

  connectingAPI = ()=>{

    const url = `https://pixabay.com/api/?key=23344003-cd3dd871a746fdc518fde5fa1&q=${this.state.input}&per_page=40`;
    console.log(url);

    fetch(url).then(response => response.json())
              .then(result => this.setState({pictures: result.hits}))
  }

  searchData = (input)=>{
    this.setState({
      input
    }, ()=>{
      this.connectingAPI();
    });
  };

  render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <h1 className="lead text-center">PhotoPix</h1>


        <Search
        searchData={this.searchData}
        />

      </div>
      <Response
        pictures={this.state.pictures}
      />
    </div>
  );
}
}

export default App;
