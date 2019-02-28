import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {}
  }

  update = (element) => {
    const {name, value} = element.target
    this.setState({...this.state, [name]:value})
  }
  axiosUpdate = (e) => {
    e.preventDefault();
    
    axios.post(process.env.REACT_APP_API_URL, this.state)
    .then((res) => console.log(res.data))
  }
  render() {
    return (
 

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <form onSubmit={this.axiosUpdate}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={this.update}/>
          <label htmlFor="">Age</label>
          <input type="text" name="age" onChange={this.update}/>
          <input type="submit" value="Click"/>
        </form>
      </div>
    );
  }
}

export default App;
