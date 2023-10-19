import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails.jsx';


const Contact = () => {
	return (
        <div>
			<div className='flex flex-col justify-items items-center mx-auto'>
			<ContactDetails />
			</div>
			
			 
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			
		</motion.div>
        </div>
	);
};

export default Contact;