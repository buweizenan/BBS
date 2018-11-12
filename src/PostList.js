import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  render () {
    const data = [
      {title: '大家一起来讨论React吧', author: '张三', date: '2017-09-01 10:00', id:0},
      {title: '前端框架，你最爱哪个', author: '李四', date: '2017-09-01 10:00', id:1},
      {title: 'Web App的时代已经到来', author: '王五', date: '2017-09-01 10:00', id:2}
    ]

    return (
      <div>
        帖子列表
        <ul>
          {
            data.map(item => <PostItem key={item.id} title={item.title} author={item.author} date={item.date}/>)
          }
        </ul>
      </div>
    )
  }
}

export default PostList