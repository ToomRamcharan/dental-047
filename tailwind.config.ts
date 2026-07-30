import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#22c55e', rgb: '34,197,94' }, accent: { DEFAULT: '#15803d', rgb: '21,128,61' } }, fontFamily: { heading: ['DM Serif Display', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;