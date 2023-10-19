import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';


const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	
	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

    function Button({ title }) {
        return <button>{title}</button>;
    }

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"></div>
			{/* Header menu links and small screen hamburger menu */}
			<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/"
						className='w-auto'
						aria-label='Projects'>
						</Link>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark "
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

			{/* Header links small screen */}
			<div
				className={
					showMenu
						? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
						: 'hidden'
				}
				>
					<Link
					to="/"
					className="block text-left text-lg text-primary-dark  hover:text-secondary-dark   sm:mx-4 mb-2 sm:py-2"
					aria-label="Home"
				>
					Home
				</Link>
				

				<Link
					to="/about"
					className="block text-left text-lg text-primary-dark  hover:text-secondary-dark   sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light "
					aria-label="About"
				>
					About
				</Link>
				<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light ">
					<Link to="/contact">
						<span className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24" aria-label="Book a Call">
							<Button title="Book a Call" />
						</span>
					</Link>
				</div>
			</div>

			{/* Header links large screen */}
			<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
			<Link
					to="/"
					className="block text-left text-lg text-primary-dark  hover:text-secondary-dark   sm:mx-4 mb-2 sm:py-2"
					aria-label="Home"
				>
					Home
				</Link>
			
			
				<Link
					to="/about"
					className="block text-left text-lg text-primary-dark  hover:text-secondary-dark   sm:mx-4 mb-2 sm:py-2"
					aria-label="About"
				>
					About
				</Link>
				
				
			
				

				<div className="hidden sm:flex justify-end items-center md:flex-row ml-auto">
						<Link to="https://calendly.com/andresbarriga/30min">
							<span
								className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 "
								aria-label="Hire Me Button"
							>
								<Button title="Meet me" />
							</span>
						</Link>
				</div>
				</div>
		</motion.nav>


	);
};

export default AppHeader;