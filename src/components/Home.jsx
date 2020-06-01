import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => console.log(response));
  }

  render() {
    return (
      <div className='container'>
        <h4 className='center'>Home</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit exercitationem reiciendis consequuntur cupiditate qui
          eveniet similique distinctio et voluptate animi! Quod
          excepturi sed hic, rerum molestias nam nulla cumque delectus.
        </p>
      </div>
    );
  }
}
