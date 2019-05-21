import React, { Component } from 'react';
import './App.css';
import NoiDung from './noiDung';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2"
    }
  }
  
  
  // componentWillMount() {
  //   console.log('componentWillMount da chay');
  // }
  // componentDidMount() {
  //   console.log('componentDidMount da chay');
  // }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate da chay');
  //   return true;
  // }
  
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate da chay');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate da chay');
  // }
  
  capNhatState = () => {
    this.setState({
      trangthai:"trang thai 1 duoc update",
      trangthai2:"trang thai 2 duoc update"
    })
  }

  render() {
    // console.log(this.state.trangthai);
    return (
      <div className="App">
        <NoiDung name={this.state.trangthai2}/>
        <button onClick={() => this.capNhatState()}>Click de update state</button>
      </div>
    );
  }
}

export default App;
