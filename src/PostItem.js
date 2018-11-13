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
    }

    this.handleVote = this.handleVote.bind(this)
  }

  // 这里应为构造函数、 方法、 访问器或属性
  handleClick () {
    let vote = this.state.vote
    vote++
    this.setState({
      vote: vote
    })
  }
  render () {
    const {title, author, date} = this.props
    let vote = this.state.vote
    return (
      <li> {/*这个是作为ul标签内的组件，所以最外层应使用li标签*/}
        <div>{title}</div>
        <div>创建人：<span>{author}</span></div>
        <div>创建时间: <span>{date}</span></div>
        <div><button onClick={this.handleClick}>点赞</button>&nbsp;<span>{vote}</span></div>
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