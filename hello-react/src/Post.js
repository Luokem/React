import React, {Component} from 'react';
// import await from 'prop-types';
import './App.css';

class Post extends Component {
  constructor () {
    super()
    this.state = { content: '' }
  }

  componentWillMount () {
    this._loadData()
  }
  getPostData () {
   return new Promise((resolve, reject) => {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
   if (xhr.status >= 200 && xhr.status < 300) {
   var response;
    try {
   response = JSON.parse(xhr.responseText);
   } catch (e) {
   reject(e);
   }
   if (response) {
   resolve(response, xhr.status, xhr);
   }
    } else {
    reject(xhr);
   }
  }
  };
  xhr.open('GET', 'http://laizhicheng.com/api', true);
  xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.send();
  });
  };

  async _loadData () {
    this.setState({ content: '数据加载中...' })
    const content = await this.getPostData()
    this.setState({content: JSON.stringify(content) })
  }

  render () {
    return (
      <div>
        <div className='post-content'>{this.state.content}</div>
        <button onClick={() => {
          this._loadData()
        }}>刷新</button>
      </div>
    )
  }
}


export default Post;
