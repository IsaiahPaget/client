import react from 'react';

function NavBar(props) {
	return (
		<div className="grid grid-cols-12 p-5 bg-gradient-to-r from-dark-green to-green dark:bg-gradient-to-r dark:from-tertiary dark:to-gray-dark">
			<div className="text-white font-extrabold col-span-9 dark:hover:text-secondary hover:-translate-y-1 duration-700">
				Hey, I am Isaiah!
			</div>

			<div className="text-white font-bold justify-self-center dark:hover:text-secondary hover:-translate-y-1 duration-700">
				<h1>Contact</h1>
			</div>
			<div className="text-white font-bold justify-self-center dark:hover:text-secondary hover:-translate-y-1 duration-700">
				<h1>Theme</h1>
			</div>
			<div className="text-white font-bold justify-self-center dark:hover:text-secondary hover:-translate-y-1 duration-700">
				<h1>GitHub</h1>
			</div>			
		</div>
	);
}

export default NavBar;
