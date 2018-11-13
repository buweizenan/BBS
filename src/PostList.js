import React, { Component } from 'react';
import PostItem from './PostItem';
import './PostList.css'

// class PostList extends Component {
//   render () {
//     const data = [
//       {title: '大家一起来讨论React吧', author: '张三', date: '2017-09-01 10:00', id:0},
//       {title: '前端框架，你最爱哪个', author: '李四', date: '2017-09-01 10:00', id:1},
//       {title: 'Web App的时代已经到来', author: '王五', date: '2017-09-01 10:00', id:2}
//     ]

//     return (
//       <div>
//         帖子列表
//         <ul>
//           {
//             data.map(item => <PostItem key={item.id} title={item.title} author={item.author} date={item.date}/>)
//           }
//         </ul>
//       </div>
//     )
//   }
// }

// 改进后的PostList组件

class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      name: '',
      password: ''
    }
    this.timeId = null // 定时器ID
    this.handleVote = this.handleVote.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.timeId = setTimeout(
      () => {
        this.setState({
          posts: [
            {title: '大家一起来讨论React吧', author: '张三', date: '2017-09-01 10:00', id:1, vote:0},
            {title: '前端框架，你最爱哪个', author: '李四', date: '2017-09-01 10:00', id:2, vote:0},
            {title: 'Web App的时代已经到来', author: '王五', date: '2017-09-01 10:00', id:3, vote:0}
          ]
        })
      }, 1000)
  }

  componentWillUnmount () {
    if (this.timeId) {
      clearTimeout(this.timeId)
    }
  }

  handleVote (id) {
    // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id? {...item, vote: ++item.vote} : item
      return newItem
    })

    this.setState({
      posts: posts
      // posts
    })
  }

  handleChange (event) {
    const target = event.target
    // console.log(target.name)
    // console.log(target.value)
    this.setState({
      // name: target.value,
      // password: target.value
      [target.name]:target.value
    })
  }

  handleSubmit (event) {
    console.log('login successfully')
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div>
          <form>
            <label>
              用户名:
              <input type="text" name="name" value={this.state.name}  onChange={this.handleChange}/>
            </label>
            <label>
              密码:
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>
          </form>
        </div>
        帖子列表
        <ul>
          {
            this.state.posts.map(item => <PostItem key={item.id} post={item} onVote={this.handleVote} />)
          }
        </ul>
      </div>
    )
  }
}

export default PostList