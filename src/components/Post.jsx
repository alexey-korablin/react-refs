import React, { Component } from 'react';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.post_id;
    this.setState({ id });
  }

  render() {
    return (
      <div className='container'>
        <h4>Post id is: {this.state.id}</h4>
      </div>
    );
  }
}
