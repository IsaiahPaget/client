import react from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import projects from '../data/projects';

function CaseStudyCards(props) {
	const Cards = (props) => {
		return projects.map((project) => {
			return (
				<article className="text-light-black dark:text-white flex relative flex-col shadow-lg card-trick p-3 rounded-lg bg-gradient-to-r from-whitesmoke to-white dark:from-tertiary dark:to-gray-dark hover:-translate-y-3 duration-700">
					<div className="">
						<h1 className="text-lg font-bold mb-3">{project.title}</h1>
						<img className='rounded-lg dark:border-secondary dark:border-2 card-picture' src={ project.image} />
						<p className="mt-2">&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</p>
					</div>
				</article>
			);
		});
	};

	return (
		<div>
			<h1 className="text-center text-white drop-shadow-lg font-bold text-4xl hover:-translate-y-1 duration-700">
				&#60;Projects /&gt;
			</h1>
			<section className="flex p-10 sm:justify-center card-list overflow-x-scroll">
				<Cards />
			</section>
		</div>
	);
}

export default CaseStudyCards;
