import React from 'react';
import GameJam from './image/svg/Gamejam.svg';

export default function Unknown() {
  return (
    <div className="UnknownPage">
        <img className="svg-image" src={GameJam} alt="Pot"/>
        <h1>Page not found</h1>
        <p>We're sorry, we couldn't find the page you requested.</p>
        <a href="/">Go to Main Page.</a>
    </div>
  );
}