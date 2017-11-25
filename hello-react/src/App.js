import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
  constructor( props ) {
    super(props)
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <div key="a">姓名: {user.username} </div>
        <div key="b">年龄: {user.age} </div>
        <div key="c">性别: {user.gender}</div>
        <hr />
      </div>
        )
  }
}

class Header extends Component {
  constructor() {
    super()
    this.state = {isShowHeader: true,date: new Date()}
  }
  componentWillMount() {
      $.ajax('http://laizhicheng.com/api').done((data)=>{
        $('#box').after('<h1>pangwei</h1>')
      })
  }
  componentDidMount() {
    console.log("componentdidMount ...");
  }
  componentWillUnmount() {
    console.log(" component will unmount");
  }
  render() {
    return(
      <div>
          <div> {this.props.name}</div>
          <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }

}

class ShowHeader extends Component {
  constructor() {
    super()
    this.state ={isShowHeader: true}
  }
  handle() {
    this.setState({isShowHeader: !this.state.isShowHeader});
  }

  render() {
    return(
      <div>
        <div>
          {this.state.isShowHeader?<Header />:"Header隐藏了"}
        </div>
        <button onClick={this.handle.bind(this)}> 点击</button>
      </div>
    )
  }
}


class Index extends Component {
  render() {
    return(
    <div>
      <div>
        {users.map((us,i) =>  <User user={us} key={i} />)}
      </div>
      <ShowHeader />
    </div>
  )
  }
}


export default Index;
