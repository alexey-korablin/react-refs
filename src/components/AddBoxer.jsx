import React, { Component } from 'react';

export default class AddBoxer extends Component {
  state = {
    fullname: '',
    fights: '',
    wins: '',
    knockouts: '',
    loss: '',
    draws: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    this.props.addBoxer({ ...this.state, id });
    console.log(this.state);
    this.setState({
      fullname: '',
      fights: '',
      wins: '',
      knockouts: '',
      loss: '',
      draws: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='fullname'>Name</label>
        <input
          type='text'
          id='fullname'
          onChange={this.handleChange}
          value={this.state.fullname}
        />
        <label htmlFor='fights'>Fights</label>
        <input
          type='text'
          id='fights'
          onChange={this.handleChange}
          value={this.state.fights}
        />
        <label htmlFor='wins'>Wins</label>
        <input
          type='text'
          id='wins'
          onChange={this.handleChange}
          value={this.state.wins}
        />
        <label htmlFor='knockouts'>Knockouts</label>
        <input
          type='text'
          id='knockouts'
          onChange={this.handleChange}
          value={this.state.knockouts}
        />
        <label htmlFor='loss'>Loss</label>
        <input
          type='text'
          id='loss'
          onChange={this.handleChange}
          value={this.state.loss}
        />
        <label htmlFor='draws'>Draws</label>
        <input
          type='text'
          id='draws'
          onChange={this.handleChange}
          value={this.state.draws}
        />
        <button>Add</button>
      </form>
    );
  }
}
