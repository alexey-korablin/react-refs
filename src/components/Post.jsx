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

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        {this.props.post ? (
          <div className='container post center'>
            <h4 className='center'>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button className='btn grey' onClick={this.handleClick}>
              Delete post
            </button>
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
  return { post: state.posts.find((post) => post.id === id) };
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch({ type: 'DELETE_POST', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
