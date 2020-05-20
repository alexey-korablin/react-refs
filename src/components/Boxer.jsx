import React from 'react';

export default function Boxers(props) {
  const boxers = props.boxers;
  return (
    <>
      {boxers.length &&
        boxers.map((boxer, i) => (
          <div key={i}>
            <h2>{boxer.fullname}</h2>
            <p>Fights: {boxer.fights}</p>
            <p>Wins: {boxer.wins}</p>
            <p>Wins by knockout: {boxer.knockouts}</p>
            <p>Loss: {boxer.loss}</p>
            <p>Fight in a draw: {boxer.draws}</p>
          </div>
        ))}
    </>
  );
}
