import React, { useEffect, useState } from "react";
import mariobox from '../../image/pngPages/mariobox.png'

class PInsideTruc extends React.Component{
	constructor(props) {
		super(props);
		this.Render_Sur_Combien = this.Render_Sur_Combien.bind(this);
	}
	Render_Sur_Combien(){
		switch (this.props.interval) {
			case "jours":
				return 365
			case "heures":
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
						stroke="url(#linear)" strokeWidth="4" fill="none" strokeDasharray="175" 
						strokeDashoffset={this.props.timeLeft[this.props.interval]/this.Render_Sur_Combien()*173} strokemitterlimit="0"/>
				</svg>
			</React.Fragment>
		);
	}
}

function Countdown() {
    const TimeGameJam = +new Date(2022, 2, 1, 9,55,0)
    const TimeFinGameJam = +new Date(2025, 4, 24, 23,59,59)
	// https://github.com/do-community/react-hooks-timer/tree/859cb4439bf61bcf56a61238bd3b26518cc9f03c
	const calculateTimeLeft = () => {
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
				jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
				heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const calculateTimeLeftText = () => {
		const DifTimeGameJam = TimeGameJam - +new Date();
		const DifTimeFinGameJam = TimeFinGameJam - +new Date();
		if (DifTimeGameJam < 0){
			return 'Temps avant la fin';
		}else if (DifTimeFinGameJam < 0){
			return 'Time up';
		}else{
            return 'Temps avant le début'
		}
	};

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
					<span className="Horloge" key={interval+"span"}>
						<PInsideTruc timeLeft={timeLeft} interval={interval}/>
					</span>
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
				<div className="Boite_Interval"><h2>{calculateTimeLeftText().toString()}:</h2>{timerComponents}<br/>{nameComponents}</div> 
				: <div className="Boite_Interval"><h2>Temps Fini</h2></div> 
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
						<h2>Quand?</h2>
						<p>
							<strong>Vendredi 12 Mai à 19h</strong> : Annonce du thème sur <u>
								<strong>
									<u>
										<a href="https://discord.com/invite/qnckfFcSqP">Discord</a>
									</u>
								</strong>
							</u>.
						</p>
						<p><strong>Lundi 24 Mai à 23h59</strong> : Arrêt de l'événement</p>
						<p><strong>Sam 29 - Dim 30 Mai</strong> : Présentation des jeux par les participants</p>
						<p><strong>Lun 31 mai - Ven 4 Juin</strong> : Vote par le jury et les participants</p>
						<p><strong>Sam 4 - Dim 5 Juin</strong> : Événement de fin et annonce des meilleurs jeux</p>
					</div>
				</div>
				<div className='Boite'>
					<Countdown/>
				</div>
				<div className='Boite'>
					<div className='Boite-image'>
						<img alt="mariobox" src={mariobox}/>
					</div>	
				</div>
				<div className='Boite'>
					<div className='Boite-texte'>
						<h2>Le thème?</h2>
						<h3>Sera dévoilé le Vendredi 12 Mai à 19h</h3>
						<p>Ici même et sur <a href="https://discord.com/invite/qnckfFcSqP">Discord</a></p>

					</div>
				</div>
			</div>    
		);
	}
}
export default Page2;
