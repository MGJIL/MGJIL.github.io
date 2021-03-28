import React, { useEffect, useState } from "react";

class PInsideTruc extends React.Component{
	constructor(props) {
		super(props);
		this.Render_Sur_Combien = this.Render_Sur_Combien.bind(this);
	}
	Render_Sur_Combien(){
		switch (this.props.interval) {
			case "days":
				return 365
			case "hours":
				return 24
			case "minutes":
				return 60
			case "seconds":
				return 60
			default:
				return 100
		}
	}
	render() {
		return (
			<React.Fragment>
				{(this.props.timeLeft[this.props.interval].toString().length===1 ? "0":"")+this.props.timeLeft[this.props.interval]}
				
				<svg width="60" height="60" viewBox="0 0 60 60">
					<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%"   stopColor="var(--freshjam-color)"/>
						<stop offset="100%" stopColor="var(--wood-color)"/>
					</linearGradient>
					<circle transform="rotate(-90) translate(-60)" strokeLinecap="round"  cx="30" cy="30" r="28" 
						stroke="url(#linear)" strokeWidth="4" fill="none" strokeDasharray="173" 
						strokeDashoffset={this.props.timeLeft[this.props.interval]/this.Render_Sur_Combien()*173} strokemitterlimit="0"/>
				</svg>
			</React.Fragment>
		);
	}
}

function Countdown() {
	
	// https://github.com/do-community/react-hooks-timer/tree/859cb4439bf61bcf56a61238bd3b26518cc9f03c
	const calculateTimeLeft = () => {
		const TimeGameJam = +new Date(2021, 4, 7, 20,0,0)
		const TimeFinGameJam = +new Date(2021, 4, 16, 23,59,59)
		const DifTimeGameJam = TimeGameJam - +new Date();
		const DifTimeFinGameJam = TimeFinGameJam - +new Date();
		let difference;
		if (DifTimeGameJam < 0){
			difference = DifTimeFinGameJam;
		}else if (DifTimeFinGameJam < 0){
			difference = 0;
		}else{
			difference = DifTimeGameJam;
		}
		let timeLeft = {};
		
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		timerComponents.push(
			<span key={interval+"span"}>
				<div key={interval} className="Boite_Interval1">
					<p className="Horloge" key={interval+"p"}>
						<PInsideTruc timeLeft={timeLeft} interval={interval}/>
					</p>
				</div>
			</span>
		);
	});
	
	const nameComponents = [];
	Object.keys(timeLeft).forEach((interval) => {

		nameComponents.push(
			<span key={interval+"spanname"}>
				<div key={interval+"name"} className="Boite_Interval1name">
					<p>{interval}</p>
				</div>
			</span>
		);
	});
	return (
		<div>
			{timerComponents.length ? 
				<div className="Boite_Interval"><h3>Temps avant:</h3>{timerComponents}<br/>{nameComponents}</div> 
				:<span>Time's up!</span>
			}
		</div>
	);
}
/*
	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		nameComponents.push(
		);
			
		



return (
				<div className="Page2">
					
		);
	});


*/
class Page2 extends React.Component {
	render(){
		return (
			<div className="Page2">
				<div className='Boite'>
					<div className='Boite-texte'>
						<h3>Quand?</h3>
						<p>
							<strong>Vendredi 7 mai à 18-19h</strong> : Annonce du thème sur <u>
								<strong>
									<a href="https://discord.com/invite/qnckfFcSqP">Discord</a>
								</strong>
							</u>.
						</p>
						<p><strong>Dimanche 16 mai à 23h59</strong> : Arrêt de l'evenement</p>
						<p><strong>Lundi 17 mai</strong> : Présentation des jeux par les participants</p>
						<p><strong>Lundi 17 mai au Dimanche 23 mai</strong> : Vote par le jury et les participants</p>
						<p><strong>Dimanche 23 mai</strong> : Annonce des meilleurs jeux</p>
					</div>
				</div>
				<div className='Boite'>
					<Countdown/>
				</div>
				<div className='Boite'>
					<div className='Boite-texte'>
						<h3>Avec Quoi?</h3>
						<p>Des Amis, De la patience, de la persévérance. (Et des lignes de code)</p>
					</div>

				</div>
				<div className='Boite'>
					<div className='Boite-texte'>
						<h3>Pourquoi ?</h3>
						<p>
							Créer un jeu n'est pas facile, et nécessitera de mettre en commun les connaissances de différences personnes. <br/>
							Dans les bonnes conditions, une jamest une super expérience qui donne envie ensuite de continuer à apprendre, bien au delà du jeu vidéo. <br/>
							Et parfois, des nouvelles amitiés se forment après une jam !
						</p>
					</div>
				</div>
			</div>    
		);
	}
}
export default Page2;