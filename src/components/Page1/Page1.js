import React from 'react';
import de from '../../image/tmp/de.png'
import PersoCaisse from '../../image/pngPages/PersoCaisse.png'

export default function Page1() {
	return (
		<div className="Page1">
			<div className='Boite'>
				<div className="Boite-image">
					<img alt="PersoCaisse" src={PersoCaisse}/>
				</div>
			</div>
			<div className='Boite'>
				<div className='Boite-texte'>
					<h3>C'est quoi ?</h3>
					<p>
						Unissez vos forces entre artistes, codeurs, musiciens, designeurs et écrivains <br/>
						afin de créer un jeu vidéo en moins d'une semaine !
					</p>
				</div>
			</div>
			<div className='Boite'>
				<div className='Boite-texte'>
					<h3>Comment?</h3>
					<p>
						Pas de panique! Le plus important est d'apprendre des nouvelles choses et de coopérer <br/>
						entre lycéens. Votre créativité, esprit d'équipe, et persévérance sont bien plus importants ! :)
					</p>
				</div>
			</div>
			<div className='Boite'>
				<div className="Boite-image">
					<img alt="de" src={de}/>
				</div>
			</div>
		</div>    
	);
}
  