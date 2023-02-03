import { motion } from "framer-motion";
import BackDrop from "./BackDropComponent";

function ContactModal(props) {
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	};

	return (
		<BackDrop onclick={props.onModalClick}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='m-auto p-8 rounded-lg modal bg-gradient-to-r from-alert to-secondary dark:bg-light-black'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<div className='flex'>
					<h1 className=' font-extrabold text-white'>Email Me</h1>
					<button onClick={props.onModalClick} className='ml-auto font-extrabold text-white'>
						Close
					</button>
				</div>
				<form className='flex-col flex' id="contact" onSubmit={props.handlesubmit}>
					<input type='text' id="name" className='mt-3 rounded' placeholder=' Enter Your Name'></input>
					<input
						type='email'
						className='mt-3 rounded'
						placeholder=' Enter Your Email'
                        id="email"
					></input>
					<textarea
						type='text'
						rows='5'
						className=' mt-3 rounded'
						placeholder=' Message'
                        id="message"
					></textarea>
                    <div className="flex justify-center">

                    <button type="sumbit" className="font-extrabold p-3 mt-3 rounded text-gray-dark bg-white shadow-lg">Submit</button>
                    </div>
				</form>
			</motion.div>
		</BackDrop>
	);
}

export default ContactModal;
