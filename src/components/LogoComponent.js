import react from "react";

function Logo(props) {
	return (
		<div className='p-5 my-8 lg:my-32'>
			<div className='grid max-w-7xl mx-auto lg:flex'>
				<div className='lg:w-1/2 border-b-2 border-secondary'>
					<div className='text-4xl text-alert dark:text-secondary font-bold hover:-translate-y-1 duration-700'>
						Let me tell you a bit about myself!
					</div>
					<div className='text-xl mt-8 pb-8 text-light-black dark:text-white hover:-translate-y-1 duration-700'>
						<p>
							I am a software developer with a passion for skateboarding, playing guitar, and
							metal music.
						</p>
						<br />
						<p>
							My educational background is diverse, with multiple alternative educational
							experiences including art school.
						</p>
						<br />
						<p>I am excited to bring my unique perspective and skill set to your team.</p>
						<br />
						<p>
							I am confident that my experience in arts, coupled with my desire to be an
							excellent software developer, makes me a strong candidate.
						</p>
						<br />
						<p>
							This website features dark mode, consider changing your colour settings if you
							haven't already!
						</p>
					</div>
				</div>
				<div className='flex justify-center align-center mt-8 lg:my-auto lg:ml-auto hover:-translate-y-1 duration-700'>
					<img className='headshot' src='/images/HeadShot (1).svg' />
				</div>
			</div>
		</div>
	);
}

export default Logo;
