import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      music: {
        "light": '#EFEEE0',
        "dark": '#1D2123',
        "primary": '#1DB954',
        "green-light": "#1ed760",
        "dark-alt": '#1A1E1F',
        "alt": '#A4C7C6',
      },

    }
  },
  plugins: [],
};
export default config;
