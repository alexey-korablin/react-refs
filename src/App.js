import React, { Component } from 'react';
import './App.css';

import Boxers from './components/Boxer';
import AddBoxer from './components/AddBoxer';

class App extends Component {
  state = {
    boxers: [
      {
        fullname: 'Bernard Hopkins',
        fights: 67,
        wins: 55,
        knockouts: 32,
        loss: 8,
        draws: 2,
        id: 1,
      },
      {
        fullname: 'Lennox Lewis',
        fights: 44,
        wins: 41,
        knockouts: 32,
        loss: 2,
        draws: 1,
        id: 2,
      },
      {
        fullname: 'Miguel Angel Cotto',
        fights: 47,
        wins: 41,
        knockouts: 33,
        loss: 6,
        draws: 0,
        id: 3,
      },
    ],
  };

  componentDidMount() {
    console.log('App has mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  addBoxer = (boxer) => {
    this.setState({
      boxers: [...this.state.boxers, boxer],
    });
  };

  deleteBoxer = (id) => {
    console.log('delete boxer with id ', id);
    this.setState({
      boxers: this.state.boxers.filter((boxer) => boxer.id !== id),
    });
  };

  render() {
    return (
      <div className='container'>
        <AddBoxer addBoxer={this.addBoxer} />
        <Boxers
          boxers={this.state.boxers}
          deleteBoxer={this.deleteBoxer}
        />
      </div>
    );
  }
}

export default App;
