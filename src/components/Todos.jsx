import React from 'react';

export default function Todos(props) {
  return (
    <div className='todos collection'>
      {props.todos.length ? (
        props.todos.map((todo) => (
          <div className='collection-item' key={todo.id}>
            <span onClick={() => props.deleteTodo(todo.id)}>
              {todo.content}
            </span>
          </div>
        ))
      ) : (
        <p className='center'>You have no todos left</p>
      )}
    </div>
  );
}
