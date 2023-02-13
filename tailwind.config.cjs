/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            width: {
                184: '48rem',
                188: '49rem',
                192: '50rem',
            },
            maxWidth: {
                95: '95%',
            },
        },
    },
    plugins: [],
};
