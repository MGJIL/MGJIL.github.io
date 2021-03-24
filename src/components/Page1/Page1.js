import React from 'react';
import './Page1.css'
import de from '../../image/tmp/de.png'
import robot from '../../image/tmp/robot.png'

export default function Page1() {
	return (
		<div className="Page1">
			<div className='box'>
				<img alt="de" className="box-img" src={robot}/>

			</div>
			<div className='box'>
				<div className='box-text'>
					<h3>?</h3>
					<p>
						Unissez vos forces entre artistes, codeurs, musiciens, designeurs et écrivains  
						afin de créer un jeu vidéo en moins d'une semaine !
					</p>
				</div>
			</div>
			<div className='box'>
				<div className='box-text'>
					<h3>Help! Je sais pas coder/dessiner/autre!</h3>
					<p>
						Pas de panique! Le plus important est d'apprendre des nouvelles choses et de coopérer 
						entre lycéens. Votre créativité et esprit d'équipe sont bien plus importants ! :)
					</p>
				</div>
			</div>
			<div className='box'>
				<img alt="de" className="box-img" src={de}/>

			</div>
		</div>    
	);
}
  