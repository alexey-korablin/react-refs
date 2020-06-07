import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokeball from '../pokeball.png';

export class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ posts: response.data });
  //     });
  // }

  render() {
    console.log('props =>', this.props);
    const { posts } = this.props;
    return (
      <div className='container home'>
        <h4 className='center'>Home</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit exercitationem reiciendis consequuntur cupiditate qui
          eveniet similique distinctio et voluptate animi! Quod
          excepturi sed hic, rerum molestias nam nulla cumque delectus.
        </p>
        {posts?.length ? (
          posts.map((post) => (
            <div key={post.id} className='post card'>
              <img src={Pokeball} alt='A pakeball' />
              <div className='card-content'>
                <Link to={'/' + post.id}>
                  <span className='card-title red-text'>
                    {post.title}
                  </span>
                </Link>
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

const mapStateToProps = (state) => {
  console.log('state =>', state);
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Home);
