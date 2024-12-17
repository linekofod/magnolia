/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
        // Hvis du placerer noget herinde, så vil du erstatte Tailwinds styling.
        /* COLORS */
        colors: {
            "grøn-950": "rgba(6, 6, 4, 1)",
            "grøn-900": "rgba(12, 12, 8, 1)",
            "grøn-800": "rgba(28, 28, 18, 1)",
            "grøn-700": "rgba(40, 40, 26, 1)",
            "grøn-600": "rgba(56, 56, 36, 1)",
            "grøn-500": "rgba(69, 69, 45, 1)",
            "grøn-400": "rgba(117, 117, 76, 1)",
            "grøn-300": "rgba(160, 160, 110, 1)",
            "grøn-200": "rgba(193, 193, 159, 1)",
            "grøn-100": "rgba(223, 223, 206, 1)",
            "grøn-50": "rgba(239, 239, 230, 1)",
            "lyserød-950": "rgba(32, 16, 14, 1)",
            "lyserød-900": "rgba(63, 33, 29, 1)",
            "lyserød-800": "rgba(127, 65, 57, 1)",
            "lyserød-700": "rgba(184, 107, 97, 1)",
            "lyserød-600": "rgba(212, 166, 160, 1)",
            "lyserød-500": "rgba(241, 226, 224, 1)",
            "lyserød-400": "rgba(244, 232, 230, 1)",
            "lyserød-300": "rgba(247, 239, 237, 1)",
            "lyserød-200": "rgba(249, 242, 241, 1)",
            "lyserød-100": "rgba(252, 248, 248, 1)",
            "lyserød-50": "rgba(253, 252, 251, 1)",
            "beige-950": "rgba(32, 28, 19, 1)",
            "neutrals-950": "rgba(0, 0, 0, 1)",
            "beige-900": "rgba(49, 42, 28, 1)",
            "beige-800": "rgba(78, 67, 44, 1)",
            "beige-700": "rgba(110, 95, 63, 1)",
            "beige-600": "rgba(143, 122, 82, 1)",
            "beige-500": "rgba(170, 148, 106, 1)",
            "beige-400": "rgba(188, 172, 138, 1)",
            "beige-300": "rgba(205, 192, 167, 1)",
            "beige-200": "rgba(223, 216, 200, 1)",
            "beige-100": "rgba(242, 239, 232, 1)",
            "beige-50": "rgba(251, 250, 248, 1)",
            "neutrals-900": "rgba(38, 38, 38, 1)",
            "neutrals-800": "rgba(64, 64, 64, 1)",
            "neutrals-700": "rgba(89, 89, 89, 1)",
            "neutrals-600": "rgba(115, 115, 115, 1)",
            "neutrals-500": "rgba(140, 140, 140, 1)",
            "neutrals-400": "rgba(166, 166, 166, 1)",
            "neutrals-300": "rgba(191, 191, 191, 1)",
            "neutrals-200": "rgba(217, 217, 217, 1)",
            "neutrals-100": "rgba(242, 242, 242, 1)",
            "neutrals-50": "rgba(255, 255, 255, 1)",
            "transparent": "rgba(0, 0, 0, 0)"
          },

        /* SPACING */
        spacing: {
        "0": "0px",
        "4xs": "4px",
        "3xs": "8px",
        "2xs": "12px",
        "xs": "16px",
        "s": "20px",
        "sm": "26px",
        "m": "32px",
        "ml": "40px",
        "lg": "48px",
        "xl": "64px",
        "2xl": "80px",
        "3xl": "96px",
        "4xl": "112px",
        "5xl": "128px",
        "6xl": "160px",
        "7xl": "208px",
        "8xl": "320px",
        "9xl": "360px",
        "10xl": "424px",
        },
                  
          /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
        /* FONTE */
        fontFamily: {
            sans: ['poppins', 'sans-serif'],
            'headline': ['cormorant-sc', 'sans-serif'], /* eksempel på ekstra font */
        },

        /* FONTSIZE */
        fontSize: {
            link_s: ['1rem', { lineHeight: '150%' }],
            link_lg: ['1.25rem', { lineHeight: '150%' }],
            secondbody_s: ['1.125rem', { lineHeight: '150%' }],
            secondbody_lg: ['1.375rem', { lineHeight: '150%' }],
            body_s: ['0.875rem', { lineHeight: '150%' }],
            body_lg: ['1rem', { lineHeight: '150%' }],
            headline4_s: ['1.125rem', { lineHeight: '120%' }],
            headline4_lg: ['1.5rem', { lineHeight: '120%' }],
            headline3_s: ['1.5rem', { lineHeight: '120%' }],
            headline3_lg: ['2.50rem', { lineHeight: '120%' }],
            headline2_s: ['2.125rem', { lineHeight: '120%' }],
            headline2_lg: ['3.375rem', { lineHeight: '120%' }],
            headline1_s: ['3rem', { lineHeight: '120%' }],
            headline1_lg: ['5.062rem', { lineHeight: '120%' }],
            display_s: ['3.75rem', { lineHeight: '120%' }],
            display_lg: ['9.3752rem', { lineHeight: '120%' }],
          },

        /* WEIGHT */
          fontWeight: {
            extralight: '200',
            light: '300',
            regular: '400',
            semibold: '500',
            bold: '700',
          },

        
        /* BORDERWIDTH */
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            0.5: '0.5px',
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
        },

        /* BORDERRADIUS */
        borderRadius: {
            DEFAULT: '20px',
            none: '0px',
            sm: '10px',
            md: '20px',
            lg: '30px',
            xl: '40px',
            full: '999px',
        },

        /* BOXSHADOW */
        boxShadow: {
            drop25: '4px 4px 4px 0 rgb(34 34 34 / 0.25)',
            drop50: '4px 4px 4px 0 rgb(34 34 34 / 0.50)',  
            inner25: '5px 5px 5px 0 rgb(34 34 34 / 0.25) inset',
        },

		extend: {
            // Hvis du placerer noget herinde, så vil du ikke erstatte Tailwinds styling, men blot tilføje til det.

            animation: {
                'infinite-scroll': 'infinite-scroll 30s linear infinite',
              },
              keyframes: {
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                },
              },
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}