import React, {Component} from 'react';
import $ from 'jquery';


class Clock extends Component {

      constructor() {
        super()
        this.state = {isShowHeader: true}
      }
      changeShow() {
        this.setState({isShowHeader: !this.state.isShowHeader})
      }
      render() {
        return (
          <div>
            <i>现在时间是:</i><br />

            <i>{this.state.isShowHeader ? <Header />: "隐藏了"}</i><br />
            <button onClick= {this.changeShow.bind(this)}>submit </button>
          </div>

        )
      }
  }

class Header extends Component {

  constructor() {
    super()
    this.state = {isShowHeader: true, date: new Date()}
  }


  componentWillMount() {
    $.ajax('http://laizhicheng.com/api').done ((userData) => {
    console.log(JSON.stringify(userData))
})
    this.timer = setInterval(() => {
      this.setState( {date: new Date()})
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
      {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
