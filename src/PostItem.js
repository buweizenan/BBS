import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostItem.css'
import like from './images/timg.jpg'

//复杂逻辑的类式PostItem组件
class PostItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,  // 帖子是否处于编辑态
      post: props.post 
    };

    this.handleVote = this.handleVote.bind(this)
    this.handleEditPost = this.handleEditPost.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  // 这里应为构造函数、 方法、 访问器或属性
shouldComponentUpdate (nextProps) {
  // 父组件跟新post后，更新PostItem的state
  if (this.props.post !== nextProps) {
    this.setState({
      post: nextProps.post
    })
  }
}
  // 处理点赞事件
  handleVote () {
    this.props.onVote(this.props.post.id)
  }
  // 保存/编辑按钮点击后的逻辑
  handleEditPost () {
    const editing = this.state.deiting
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFromatDate()
      })
    }
    this.setState({
      editing: !editing
    })
  }
  // 处理标题textarea值的变化
  handleTitleChange(event) {
    const newPost = {
      ...this.state.post, title:event.target.value
    }
    this.setState({
      post: newPost
    })
  }

  getFromatDate () {

  }
  render () {
    const {post} = this.state
    return (
      <li className="item"> 
        <div className="title">{this.state.editing? <from><textarea value={post.title} onChange={this.handleTitleChange} /></from>: post.title}</div>
        <div>创建人：<span>{post.author}</span></div>
        <div>创建时间: <span>{post.date}</span></div>
        <div className="like"><span><img src={like} alt="vote" onClick={this.handleVote} />></span><span>{post.vote}</span></div>
        <div>
          <button onClick={this.handleEditPost}>{this.state.editing? '保存': '编辑'}</button>
        </div>
      </li>
    )
  }
}

// 简单功能的函数式PostItem组件
// function  PostItem(props) {
//   const handleClick = () => {
//     props.onVote(props.post.id)
//   }

//   PostItem.propTypes = {
//     post: PropTypes.shape({
//       title: PropTypes.string,
//       id: PropTypes.number,
//       vote: PropTypes.number,
//       date: PropTypes.string
//     }).isRequired,
//     onVote: PropTypes.func.isRequired
//   }

//   const {post} = props //只接收props中的post对象 等价于 const post = props.post
//   // const post = props.post

//   return (
//     <li className="item">
//       <div className="title">{post.title}</div>
//       <div>创建人: <span>{post.author}</span></div>
//       <div>创建时间: <span>{post.date}</span></div>
//       <div className="like">
//         <span><img src={like} onClick={handleClick} alt=""/></span><span>{post.vote}</span>
//         </div>
//     </li>
//   )
// }

export default PostItem