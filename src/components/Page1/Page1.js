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
						La Montpellier Game Jam est un événement où des équipes de lycéens unissent leurs forces entre 
						artistes, codeurs, musiciens, designeurs et écrivains afin de créer un jeu vidéo 
						en moins de <b>9 jours</b> !
					</p>
				</div>
			</div>
			<div className='Boite'>
				<div className='Boite-texte'>
					<h3>Pourquoi ?</h3>
					<p>
						Créer un jeu n'est pas facile, et nécessitera de mettre en commun les connaissances de différentes personnes. <br/>
						Dans les bonnes conditions, une game jam est une super expérience qui donne envie ensuite de continuer à apprendre, bien au delà du jeu vidéo. <br/>
						Et parfois, des nouvelles amitiés se forment après une jam !
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
  