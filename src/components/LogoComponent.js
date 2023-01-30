import react from 'react';

function Logo(props) {
	return (
		<div className='grid grid-cols-2 gap-4 justify-center mt-24'>
			<div className='ml-8 border-b-2 border-secondary'>
				<div className='text-4xl text-dark-green dark:text-secondary font-bold justify-self-center hover:-translate-y-1 duration-700'>
					Let me tell you a bit about myself!
				</div>
				<div className='text-xl justify-self-center mt-16 dark:text-white hover:-translate-y-1 duration-700'>
					<p>
						I am a software developer with a passion for skateboarding, playing guitar, and
						metal music. I have a diverse background, having attended an arts school for
						most of my life!
					</p>
					<br />
					<p>
						I am excited to bring my unique perspective and skill set to your team and am
						confident that my experience, coupled with my desire to be an
						excellent software developer, makes me a strong candidate.
					</p>
				</div>
			</div>
			<div>
				<div className='hover:-translate-y-1 duration-700'>
					<img className='headshot' src='/images/HeadShot (1).svg'/>
				</div>
			</div>
		</div>
	);
}

export default Logo;
