import React, { Component } from 'react';

class PostItem extends Component {
  constructor () {
    super()
    this.state({
      vote: 0
    })
  }
  // 这里应为构造函数、 方法、 访问器或属性
  render () {
    const {title, author, date} = this.props
    return (
      <li> {/*这个是作为ul标签内的组件，所以最外层应使用li标签*/}
        <div>{title}</div>
        <div>创建人：<span>{author}</span></div>
        <div>创建时间: <span>{date}</span></div>
        <div><button>点赞</button></div>
      </li>
    )
  }
}

export default PostItem