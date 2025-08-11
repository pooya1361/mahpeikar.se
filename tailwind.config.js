/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-color': '#12F7D6',
            }
        },
        screens: {
            'xs': '430px', // min-width
        },
    },
    plugins: [],
}