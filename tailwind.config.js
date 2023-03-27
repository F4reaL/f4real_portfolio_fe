/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-bg": "#282C33",
                sunglo: "#E06B74",
                olivine: "#98C379",
                "harvest-gold": "#E5C07A",
                "cornflower-blue": "#62AEEF",
                lavender: "#C778DD",
                "lavender-20": "rgba(199, 120, 221, 0.2)",
                "fountain-blue": "#55B6C2",
                "cadet-blue": "#ABB2BF",
                "cadet-blue-20": "rgba(171, 178, 191, 0.2)",
            },
            fontFamily: {
                FiraCode: ["Firacode", "monospace"],
            },
            screens: {
                lap1366: "1366px",
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};