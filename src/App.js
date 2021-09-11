import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Search</p>


        <Search
        sms="Hi there!"
        />
      </div>
    </div>
  );
}

export default App;
