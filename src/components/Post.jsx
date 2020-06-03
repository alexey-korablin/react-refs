import React, { Component } from 'react';
import axios from 'axios';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.post_id;
    const post = axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      });
  }

  render() {
    return (
      <>
        {this.state.post ? (
          <div className='post'>
            <h4 className='center'>{this.state.post.title}</h4>
            <p>{this.state.post.body}</p>
          </div>
        ) : (
          <div className='center'>Loading...</div>
        )}
      </>
    );
  }
}
