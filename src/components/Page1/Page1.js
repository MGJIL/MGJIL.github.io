import React from 'react';
import './Page1.css'
import de from '../../image/tmp/de.png'
import robot from '../../image/tmp/robot.png'

export default function Page1() {
	return (
		<div className="WhatIs">
			<div className='box'>
				<img alt="de" className="box-img" src={robot}/>

			</div>
			<div className='box'>
				<div className='box-text'>
					<h3>Qu'est-ce que c'est?</h3>
					<p>Quest ce que la game Jam? C'est un truc de ouf. On s'ammuse comme des fous</p>
				</div>
			</div>
			<div className='box'>
				<div className='box-text'>
					<h3>Je sais pas coder/dessiner/faire de la musique! Help!</h3>
					<p>Bah c'est con</p>
				</div>
			</div>
			<div className='box'>
				<img alt="de" className="box-img" src={de}/>

			</div>
		</div>    
	);
}
  