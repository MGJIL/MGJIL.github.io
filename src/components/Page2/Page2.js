import React, { useEffect, useState } from "react";
import './Page2.css'

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
						<stop offset="0%"   stopColor="#2ed8a7"/>
						<stop offset="100%" stopColor="#a6ceff"/>
					</linearGradient>
					<circle transform="rotate(-90) translate(-60)" strokeLinecap="round"  cx="30" cy="30" r="28" 
						stroke="url(#linear)" strokeWidth="4" fill="none" strokeDasharray="173" 
						strokeDashoffset={this.props.timeLeft[this.props.interval]/this.Render_Sur_Combien()*173} strokemitterlimit="0"/>
				</svg>
			</React.Fragment>
		)
	}
}

function Countdown() {
	// https://github.com/do-community/react-hooks-timer/tree/859cb4439bf61bcf56a61238bd3b26518cc9f03c
	const calculateTimeLeft = () => {
		const difference = +new Date(2021, 4, 7, 20,0,0) - +new Date();
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
	const nameComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span key={interval+"span"}>
					<div key={interval} className="Boite_Interval1">
						<p key={interval+"p"}>
							<PInsideTruc timeLeft={timeLeft} interval={interval}/>
						</p>
					</div>
			</span>
		);
	});
	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

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
				<div className="Boite_Interval"><h3>Temps restant avant:</h3>{timerComponents}<p>{nameComponents}</p></div> 
				:<span>Time's up!</span>
			}
		</div>
	);
}


class Page2 extends React.Component {
	render(){
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
					<Countdown/>
				</div>
				<div className='box'>
				</div>
				<div className='box'>
					<div className='box-text'>
						<h3>Avec Quoi?</h3>
						<p>Des Amis, De la patience, de la persévérance. (Et des lignes de code)</p>
					</div>

				</div>
			</div>    
		);
	}
	
}
export default Page2;