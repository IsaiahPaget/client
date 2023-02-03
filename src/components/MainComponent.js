import react, { Component } from "react";
import NavBar from "./NavBarComponent.js";
import "../index.css";
import Logo from "./LogoComponent.js";
import CaseStudyCards from "./CaseStudyCardsComponent.js";
import ContactModal from "./ContactModalComponent.js";
import { motion, AnimatePresence } from "framer-motion";

const app = initializeApp(firebaseConfig);

let colourChange = false;
let removeColorTimeout;

document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("mousemove", (e) => {
		if (!colourChange) {
			document.getElementById("navBarBorder").classList.add("colour-rotate");
			colourChange = true;
		}
		clearTimeout(removeColorTimeout);
		removeColorTimeout = setTimeout(() => {
			document.getElementById("navBarBorder").classList.remove("colour-rotate");
			colourChange = false;
		}, 2000);
	});

	document.addEventListener("mouseout", (e) => {
		clearTimeout(removeColorTimeout);
		document.getElementById("navBarBorder").classList.remove("colour-rotate");
		colourChange = false;
	});
});

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};

		this.onModalClick = this.onModalClick.bind(this);
		this.handlesubmit = this.handlesubmit.bind(this);
	}
	onModalClick() {
		this.setState({ modalOpen: !this.state.modalOpen });
	}

	async handlesubmit(event) {
		event.preventDefault();

		const name = await event.target.elements.name.value;
		const email = await event.target.elements.email.value;
		const body = await event.target.elements.message.value;

	}

	componentDidMount() {
		window.addEventListener("scroll", () => {
			if (this.state.modalOpen) {
				this.onModalClick();
			}
		});
	}
	render() {
		return (
			<div className='dark:bg-light-black min-h-screen' id='contact'>
				<NavBar onModalClick={this.onModalClick} />
				<div id='navBarBorder' className='bg-secondary h-1 drop-shadow-xl'></div>
				<Logo />
				<div className='bg-alert'>
					<div className='wavy-upright'></div>
					<div className='bg-alert'>
						<CaseStudyCards />
					</div>
					<div className='wavy-downright'></div>
				</div>
				<AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
					{this.state.modalOpen && (
						<ContactModal
							handlesubmit={this.handlesubmit}
							onModalClick={this.onModalClick}
						/>
					)}
				</AnimatePresence>
			</div>
		);
	}
}

export default Main;
