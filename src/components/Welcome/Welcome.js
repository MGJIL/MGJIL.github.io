import React from 'react';
import Pot from '../../image/svg/PotRez.svg';
import PipesRight from '../../image/svg/piperight.svg';
import PipesLeft from '../../image/svg/pipeleft.svg';
import GameJam from '../../image/svg/Gamejam.svg';

export default function Welcome() {
  return (
    <div className="Welcome">
      <div className="pot"><img className="svg-image" src={Pot} alt="Pot"/></div>
      <div className="piperight"><img className="svg-image" src={PipesRight} alt="Pot"/></div>
      <div className="pipeleft"><img className="svg-image" src={PipesLeft} alt="Pot"/></div>
      <div className="gamejam"><img className="svg-image" src={GameJam} alt="Pot"/></div>
    </div>
  );
}
  