import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)", 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        plusJakartaSans: ["Plus_Jakarta_Sans", "sans-serif"], 
      },
      screens: {
        'sm': { 'min': '360px' },
        'md': { 'min': '768px' },
        'lg': { 'min': '1280px' },
      },
      fontSize: {
        'mobile-xs': ['8px', { lineHeight: '10.67px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};

export default config;
