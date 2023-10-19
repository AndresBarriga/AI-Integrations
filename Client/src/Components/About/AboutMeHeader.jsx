import profileImage from '../../Images/profile.jpeg';
import Contact from './Contact.jsx';


const AboutMeBio = () => {
	

	return (
		<> <div className="container mx-auto">
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="flex flex-col  mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-1/3 sm:w-4/5" alt="" />
                
				<div className='flex  md:justify-start'> 
                
			</div>
            
			</div>
				

			<div className="font-general-light text-sm text-gray-500 w-full text-left">
				
					<p
						className="mb-4 text-sm sm:text-base   "
					>
						I am a <span className='text-indigo-400 text-general-bold'>Product Manager</span> passionate about customer-centric design and use data to make informed decisions, driven by my desire to create <span className='text-indigo-400 text-general-bold'>impactful products </span> and <span className='text-indigo-400 text-general-bold'>reduce waste.</span> 

					</p>

                    <p
						className="mb-4 text-sm sm:text-base   "
					>
					As I embark on my journey of learning to <span className='text-indigo-400 text-general-bold'>write code and delve into development myself</span>, this page showcases a project that reflects my passion for technology and innovation.
					</p>
                    <p
						className="mb-4 text-sm sm:text-base   "
					>
					By adopting this approach, we can craft products that genuinely make a <span className='text-indigo-400 text-general-bold'> positive impact on the world</span>. In my current role, I spearheaded the development of a Telemedicine App that enables thousands of patients to monitor their vital signs from home.
			
					</p>
                    <p
						className="mb-4 text-sm sm:text-base   "
					>
						I am always looking for new challenges and opportunities to <span className='text-indigo-400 text-general-bold'>learn and grow.</span> I am also a team player and I thrive on collaborating with others to build successful products.
		
					</p>
                    <p
						className="mb-4 text-sm sm:text-base   "
					>
						Join me as we explore the fascinating intersection of <span className='text-indigo-400 text-general-bold'>technology, innovation, and product management.</span>
	
					</p>
				
			</div>   

           
               
		</div>
        <Contact></Contact>
        </div>
					</>
	);
};

export default AboutMeBio;