import  React , {Component} from 'react';

class PecentShow extends Component {
  percentTransfor(num) {
     if(num >1) {
        return "请输入小于1的数";
      }
      else if(0 < num && num <1){
          return  `${num.substr(0, num.indexOf(".")+3)}%`;
      }
      else {
        return "请输入!"
      }

  }
  render() {
    return (
      <div>
        请输入:{ this.percentTransfor(this.props.comment.comment)}
      </div>
    )
  }
}


export default PecentShow;
