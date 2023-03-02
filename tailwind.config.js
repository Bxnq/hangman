/* @type {import('tailwindcss').Config}*/
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                light: {
                    100: "#F8F8F8",
                    200: "#D9D9D9",
                },
                secondary: "#EDD96F",
                primary: "#4CA9FF",
                green: "#7BF65C",
                red: "#F44545",
            },
            spacing: {
                15: "15px",
                30: "30px",
                50: "50px",
                84: "84px",
            },
            borderRadius: {
                15: "15px",
                5: "5px",
            },
        },
        fontFamily: {
            main: ["Inter"],
        },
    },
    plugins: [],
};
