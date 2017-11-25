import  React , {Component} from 'react';
import PecentShow from './PecentShow';
import PecentInput from './PecentInput';
import './Pecent.css';


class PecentApp extends Component {
  constructor() {
    super()
    this.state = {comment: "请输入:"}
  }

  onSubmit(comments) {
    console.log(comments)
    this.setState({comment: comments})
  }
  render() {
    return (
      <div className="wrapper">
        <PecentInput onSubmit={this.onSubmit.bind(this)} />
        <PecentShow  comment={this.state.comment} />
      </div>
    )
  }
}


export default PecentApp ;
