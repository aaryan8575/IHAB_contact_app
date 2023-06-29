/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-jakarta)"],
      },
      colors: {
        primary: "#2242D8",
        background: "#ffff",

        card: "#F4F6FD",
        border: "#2242D8",
        textblue: "#768AE7",
        lightblue: "#E9ECFB",
        secondary: "#DFE4F9",
        emailSignBgColor: "#F4F6FD",
        notification: "",
        error: "#ff0000",
        warning: "",
        success: "#00ff00",
        textGray: "#A4A4A4",
        black: "#000000",
        white: "#ffffff",
        buttonBg: "#90CAF9",
        buttonText: "#616161",
        PhotoBg: "#E0E0E0",
        antiwhite: "#F6F8FF",
        light: "#686868",
        subscribe: "#896126",

      },



      textColor: {
        primary: "#2242D8",
        seconday: "#fff",
        error: "#ff0000",

      },
      fontSize: ({ theme }) => {
        return {
          h1: [
            "3.75rem", //60px
            {
              lineHeight: "5.625rem",
              letterSpacing: "-0.02em",
              fontWeight: 500,
              // fontFamily: theme("fontFamily.sans"),
            },
          ],
          h2: [
            "3rem", //48px
            {
              lineHeight: "4.5rem", //72px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          h3: [
            "2.625rem", //42px
            {
              lineHeight: "3.938rem", //63px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          h4: [
            "2.25rem", //36px
            {
              lineHeight: "3.375rem", //54px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          h5: [
            "1.875rem", //30px
            {
              lineHeight: "2.438rem", //39px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          h6: [
            "1.75rem", //28px
            {
              lineHeight: "2.625rem", //42px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          body1: [
            "1.5rem", //24px
            {
              lineHeight: "2.25rem", //36px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          body2: [
            "1.25rem", //20px
            {
              lineHeight: "1.875rem", //30px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          body3: [
            "1.125rem", //18px
            {
              lineHeight: "1.688rem", //27px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          subtitle1: [
            "1.125rem", //18px
            {
              lineHeight: "1.5rem", //24px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          subtitle2: [
            "1rem", //16px
            {
              lineHeight: "1.313rem", //21px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          buttontext1: [
            "1.25rem", //20px
            {
              lineHeight: " 1.875rem", //30px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          buttontext2: [
            "1.25rem", //20px
            {
              lineHeight: "1.618rem", //25.88px
              letterSpacing: "-0.02em",
              fontWeight: 400,
            },
          ],
          captiontext1: [
            "1.25rem", //20px
            {
              lineHeight: "1.875rem", //30px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
          captiontext2: [
            "1.125rem", //18px
            {
              lineHeight: "1.688rem", //27px
              letterSpacing: "-0.02em",
              fontWeight: 500,
            },
          ],
        };
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
