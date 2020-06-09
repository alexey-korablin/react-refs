import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

export class Post extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     post: null,
  //   };
  // }

  // componentDidMount() {
  //   const id = this.props.match.params.post_id;
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ post: response.data });
  //     });
  // }

  render() {
    // console.log('Post =>', this.props);
    return (
      <>
        {this.props.post ? (
          <div className='post'>
            <h4 className='center'>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
          </div>
        ) : (
          <div className='center'>Loading...</div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  // console.log('Post state =>', state);
  return { post: state.posts.find((post) => post.id === id) };
};

export default connect(mapStateToProps)(Post);
