import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Title extends Component {
  render() {
    return (
    <div>
      <h1> react.小书 </h1>
      <button> </button>
      </div>
    )
  }
}
class Header extends Component {
  render() {
    return(
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
  )
  }
}

class Main extends Component {
  render() {
    return (
      <div>This is Main content</div>
    )
  }
}


class Footer extends Component {
  render() {
    return (
      <div>This is Footer </div>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Index;
