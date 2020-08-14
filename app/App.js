import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render(){
    return (
      <select value="B">
        <option value="A">Mobile</option>
        <option value="B">Work</option>
        <option value="C">Home</option>
      </select>
    );
  }
}

render(<App />, document.getElementById('root'));
