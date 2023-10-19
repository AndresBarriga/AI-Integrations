/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
	  extend: {
		fontSize: {
		  'xs': '.75rem',
		  'sm': '.875rem',
		  'base': '1rem',
		  'lg': '1.125rem',
		  'xl': '1.25rem',
		  '2xl': '1.5rem',
		  '3xl': '1.875rem',
		  '4xl': '2.25rem',
		  '5xl': '3rem',
		  '6xl': '4rem',
		  '16px': '16px',
		  '18px': '18px',
		  '20px': '20px',
		  '22px': '22px',
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
    },
  },
  plugins: ['@tailwindcss/forms'],
}

