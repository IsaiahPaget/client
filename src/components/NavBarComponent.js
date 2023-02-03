import react, { useState } from "react";
import { motion } from "framer-motion";


function NavBar(props) {

	return (
		<div className='p-5 bg-gradient-to-r from-alert to-secondary dark:bg-gradient-to-r dark:from-tertiary dark:to-gray-dark'>
			<div className='flex max-w-7xl mx-auto'>
				<div className='text-white font-extrabold flex-grow dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<a href='/'>Hey, I am Isaiah!</a>
				</div>

				<div className='text-white font-bold justify-self-center dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<button onClick={props.onModalClick}>Contact</button>
				</div>
				<div className='text-white font-bold justify-self-center ml-8 dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<a href='https://github.com/IsaiahPaget' target='_blank' rel="noreferrer">
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
