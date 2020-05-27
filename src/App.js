import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: 'buy some milk' },
        { id: 2, content: 'play mario kart' },
      ],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  addTodo(text) {
    const id = Math.floor(Math.random() * 100);
    this.setState({
      todos: [...this.state.todos, { id, constent: text }],
    });
  }

  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
