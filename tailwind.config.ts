import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#101418",
          900: "#171c21",
          800: "#242b32",
          700: "#34404a",
        },
        paper: "#f8f7f2",
        mint: "#4fb88f",
        coral: "#ef7d62",
        sky: "#79a9d8",
        amber: "#d9a441",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 20, 24, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
