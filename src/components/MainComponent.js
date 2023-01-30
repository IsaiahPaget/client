import react, { Component } from 'react';
import NavBar from './NavBarComponent.js';
import '../index.css';
import Logo from './LogoComponent.js';
import CaseStudyCards from './CaseStudyCardsComponent.js';

let colourChange = false;
let removeColorTimeout;

document.addEventListener('mousemove', (e) => {
	if (!colourChange) {
		document.getElementById('navBarBorder').classList.add('colour-rotate');
		colourChange = true;
	}
	clearTimeout(removeColorTimeout);
	removeColorTimeout = setTimeout(() => {
		document.getElementById('navBarBorder').classList.remove('colour-rotate');
		colourChange = false;
	}, 2000);
});

document.addEventListener('mouseout', (e) => {
	clearTimeout(removeColorTimeout);
	document.getElementById('navBarBorder').classList.remove('colour-rotate');
	colourChange = false;
});

class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="dark:bg-light-black min-h-screen">
				<NavBar />
				<div id="navBarBorder" className="bg-secondary h-1 drop-shadow-xl"></div>
				<Logo />
				<div className="bg-alert">
					<div className="wavy-upright"></div>
					<div className="bg-alert">
                        <CaseStudyCards />
                    </div>
					<div className="wavy-downright"></div>
				</div>
			</div>
		);
	}
}

export default Main;
