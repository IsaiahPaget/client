import { motion } from "framer-motion";

function BackDrop({ children, onclick }) {
	return (
		<motion.div
			className='flex justify-center absolute top-0 left-0 h-full w-full backDropModal'
			onClick={onclick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
		>
			{children}
		</motion.div>
	);
}

export default BackDrop;
