import React from 'react';
import './Page2.css'
class Page2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: false};
		this.changeType = this.changeType.bind(this);
	}
	changeType() {
		this.setState({page: !(this.state.page)})
		console.log(this.state.page)
		this.state.page? document.body.style.overflow = "auto": document.body.style.overflow = "hidden"
	}
	render(){
		if(this.state.page){
			return(
				<div className="Floating">
					<div className="FloatingBox">
						<p onClick={this.changeType} class="backarrow">backarrow here</p>
						<p>Hello</p>
					</div>
				</div>
			);
		}else{
			return (
				<div className="Page2">
					<div className='box'>
						<div className='box-text'>
							<h3>Quand?</h3>
							<p>
								<strong>Vendredi 7 mai à 18-19h</strong> : Annonce du thème 
								sur <u><strong><a href="https://discord.com/invite/qnckfFcSqP">
									Discord
								</a></strong></u>.
							</p>
							<p><strong>Dimanche 16 mai à 23h59</strong> : Arrêt de l'evenement</p>
							<p><strong>Lundi 17 mai</strong> : Présentation des jeux par les participants</p>
							<p><strong>Lundi 17 mai au Dimanche 23 mai</strong> : Vote par le jury et les participants</p>
							<p><strong>Dimanche 23 mai</strong> : Annonce des meilleurs jeux</p>
						</div>
					</div>
					<div className='box'>
					</div>
					<div className='box'>
					</div>
					<div className='box'>
						<div className='box-text'>
							<h3>Pourquoi ?</h3>
							<p>
								Créer un jeu n'est pas facile, et nécessitera de mettre en commun les connaissances de 
								différences personnes. Dans les bonnes conditions, une jam
								est une super expérience qui donne envie ensuite de continuer à apprendre, bien au delà du jeu vidéo. 
								Et parfois, des nouvelles amitiés se forment après une jam !
							</p>
							<strong className="GoToPageHelp">
								<button onClick={this.changeType}>Aller à la page d'aide.</button>
							</strong>
						</div>

					</div>
				</div>    
			);
		}
	}
}
export default Page2;