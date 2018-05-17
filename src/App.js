import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Add extends Component {

	handleClick = () => {
    this.props.onClickFunc(this.props.incrementValue)
	};

	render(){
  	return (
    	<button onClick={this.handleClick}>
      	Add ({this.props.incrementValue})
      </button>
    );
  }
}

class Sub extends Component {

	handleClick = () => {
    this.props.onClickFunc(this.props.decrementValue)
	};

	render(){
  	return (
    	<button onClick={this.handleClick}>
      	Subtract ({this.props.decrementValue})
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends Component {
	state = {counter:0};
  
  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => ({
			counter: prevState.counter + incrementValue
		}));
  }
  
  decrementCounter = (decrementValue) => {
  	this.setState((prevState) => ({
			counter: prevState.counter - decrementValue
		}));
  }
  
  render() {
  	return (
    	<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adding and Subtracting</h1>
        </header>
        <p>Use the buttons below to add or subract 1 from the total</p>
      	<Add incrementValue={1} onClickFunc={this.incrementCounter} />
        <Sub decrementValue={1} onClickFunc={this.decrementCounter} />
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;