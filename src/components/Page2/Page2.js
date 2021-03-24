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
								Vendredi 7 mai à 18-19h : Annonce du thème sur 
								<u><strong><a href="https://discord.com/invite/qnckfFcSqP">Discord</a></strong></u>.
							</p>
							<p>Dimanche 16 mai à 23h59 : Arrêt de l'evenement</p>
							<p>Lundi 17 mai : Présentation des jeux par les participants</p>
							<p>Lundi 17 mai au Dimanche 23 mai : Vote par le jury et les participants</p>
							<p>Dimanche 23 mai : Annonce des meilleurs jeux</p>
						</div>
					</div>
					<div className='box'>
					</div>
					<div className='box'>
					</div>
					<div className='box'>
						<div className='box-text'>
							<h3>Avec Quoi?</h3>
							<p>Des Amis, De la patience, de la persévérance. (Et des lignes de code)</p>
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