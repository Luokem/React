import  React , {Component} from 'react';

class PecentInput extends Component {
  constructor() {
    super()
    this.state ={comment: ""};
  }

  handleChange(event) {
    if(event.target.value.length >5) {
      event.target.value = event.target.value.slice(0,5);
    }

    this.setState({comment: event.target.value},() => {
      if(this.props.onSubmit) {
        this.props.onSubmit({comment: this.state.comment});
      }
    });
  }
  render() {
    return (
      <div className="comment">
         <label>input: </label>
          <input type="number" maxLength ="3" onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}


export default PecentInput;
