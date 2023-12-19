import type { Config } from 'tailwindcss'
const { colorsConfig } = require('./src/themes/color.ts')
const { nextui } = require('@nextui-org/react')
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: colorsConfig,
    },
    screens: {
      xs: '475px',
      '13inch': '1350px',
      '2xxl': '1700px',
      '3xl': '1940px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            bg: '#fff',
            text: '#808388',
            primary1: '#f5b500',
            selection: '#fffa65',
            section: '#DADADA',
            border: '#262b42',
            primaryYellow: '#fbb613',
            primaryBlue: '#f5b500',
            primaryText: '#1F2326',
            baseBlack: '#282828',
            primaryBlue1: '#f5b500',
            primaryYellow1: '#FCB713',
          },
        },
        dark: {
          colors: {
            bg: '#2c3168',
            text: '#fff',
            primary1: '#3d8aff',
            selection: '#d835a7',
            section: '#33BBCF',
            border: '#262b42',
            primaryYellow: '#fbb613',
            primaryBlue: '#27377d',
            primaryText: '#1F2326',
            baseBlack: '#282828',
            primaryBlue1: '#405AB7',
            primaryYellow1: '#FCB713',
          },
        },
      },
    }),
  ],
}
export default config
