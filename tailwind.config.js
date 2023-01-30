/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
	content: ['./src/**/*.{html,js}','./public/**/*.{html,js}'],
	theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
          colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'primary': '#237ADE',
            'secondary': '#FFA50B',
            'tertiary': '#242c30',
            'info': '#1F51D1',
            'alert': '#EC7200',
            'white': '#f0f8ff',
            'whitesmoke': '#e5e5e5',
            'light-black': '#22272f',
            'dark-green': '#2EA37A',

          },
          fontFamily: {
            sans: ['Ubuntu', 'sans-serif'],
          },
		extend: {},
	},
	plugins: [],
};
