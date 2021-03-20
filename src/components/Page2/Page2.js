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
							<p>Annonce du theme le vendredi 7 mai vers 18-19h sur le <strong><a href="https://discord.com/invite/qnckfFcSqP">discord</a></strong>.</p>
							<p>Arrêt de l'evenement le Dimanche 16 mai à 00H00</p>
							<p>Vote et présentation du 17 au 23 mai par les jurys et les participants</p>
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