import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      });
  }

  render() {
    const posts = this.state.posts.slice(0, 10);
    return (
      <div className='container'>
        <h4 className='center'>Home</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit exercitationem reiciendis consequuntur cupiditate qui
          eveniet similique distinctio et voluptate animi! Quod
          excepturi sed hic, rerum molestias nam nulla cumque delectus.
        </p>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id} className='post card'>
              <div className='card-content'>
                <span className='card-title'>{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          ))
        ) : (
          <div className='center'>No posts yet</div>
        )}
      </div>
    );
  }
}
