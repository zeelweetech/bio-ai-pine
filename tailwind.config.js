module.exports = {
    // ... other config
    extend: {
        animation: {
            blob: "blob 7s infinite",
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                    transform: "translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                    transform: "translate(-20px, 20px) scale(0.9)",
                },
                "100%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
            },
        },
        clipPath: {
            'polygon-default': 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 16% 20%)',
            'polygon-lg': 'polygon(21% 0, 101% 0, 103% 102%, 0% 100%, 18% 15%)',
            'diagonal-bottom': 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
            'left-diagonal': 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            'cross-cut': 'polygon(15% 0, 100% 0, 100% 100%, 0 85%)',
            'diagonal-cut': 'polygon(0 0, 100% 0, 100% 100%, 0 70%)',
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.clip-path-polygon-\\[polygon\\(20\\%_0\\,_100\\%_0\\,_100\\%_100\\%\\,_0\\%_100\\%\\)\\]': {
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
                },
                '.clip-path-polygon-\\[polygon\\(21\\%_0\\,_101\\%_0\\,_103\\%_102\\%\\,_0\\%_100\\%\\,_18\\%_15\\%\\)\\]': {
                    clipPath: 'polygon(21% 0, 101% 0, 103% 102%, 0% 100%, 18% 15%)'
                },
                '.clip-path-polygon-\\[polygon\\(0_0\\,_100\\%_0\\,_100\\%_100\\%\\,_0_85\\%\\)\\]': {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)'
                },
                '.clip-path-polygon-\\[polygon\\(15\\%_0\\,_100\\%_0\\,_100\\%_100\\%\\,_0_85\\%\\)\\]': {
                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 85%)'
                },
                '.clip-path-polygon-\\[polygon\\(0_0\\,_100\\%_0\\,_100\\%_100\\%\\,_0_70\\%\\)\\]': {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)'
                }
            }
            addUtilities(newUtilities)
        }
    ]
} 