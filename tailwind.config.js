module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://www.google.com/search?sca_esv=557388832&rlz=1C5CHFA_enIN1017IN1017&sxsrf=AB5stBhny1DT0qJiC_OjfF0zsXHvKsx_2w:1692177950974&q=sky+background+png&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjM5qeN7uCAAxXtUGwGHfkwBHUQ0pQJegQICxAB&biw=737&bih=826&dpr=2#imgrc=cuU8tcOLYpHuSM&imgdii=tEtK2gCdyG43YM')",
        },
      },
    },
    plugins: [],
  };