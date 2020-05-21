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
      },
      {
        fullname: 'Lennox Lewis',
        fights: 44,
        wins: 41,
        knockouts: 32,
        loss: 2,
        draws: 1,
      },
      {
        fullname: 'Miguel Angel Cotto',
        fights: 47,
        wins: 41,
        knockouts: 33,
        loss: 6,
        draws: 0,
      },
    ],
  };

  render() {
    return (
      <div className='test'>
        <AddBoxer />
        <Boxers boxers={this.state.boxers} />
      </div>
    );
  }
}

export default App;
