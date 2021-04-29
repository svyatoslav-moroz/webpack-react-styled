import { createGlobalStyle } from 'styled-components';
import rem from '../mixins/rem';
import reset from 'styled-reset'
import { normalize } from 'styled-normalize';
import RobotoThin from '../../../fonts/Roboto-Thin.ttf';
import RobotoLight from '../../../fonts/Roboto-Light.ttf';
import RobotoRegular from '../../../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../../../fonts/Roboto-Medium.ttf';
import RobotoBold from '../../../fonts/Roboto-Bold.ttf';

const grid_max_width = 1600;

const fonts = `
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Thin'),
        url(${RobotoThin}) format('ttf');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Light'),
        url(${RobotoLight}) format('ttf');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Regular'),
        url(${RobotoRegular}) format('ttf');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Medium'),
        url(${RobotoMedium}) format('ttf');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto-Bold'),
        url(${RobotoBold}) format('ttf');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
`

const htmlFontSize = `
    html {
        // default
        font-size: 16px;

        @media (min-width: 1900px) {
        font-size: 21.5px;
        }
        @media (min-width: 1800px) and (max-width: 1899px) {
        font-size: 20px;
        }
        @media (min-width: 1700px) and (max-width: 1799px) {
        font-size: 19px;
        }
        @media (min-width: 1600px) and (max-width: 1699px) {
        font-size: 18px;
        }
        @media (min-width: 1500px) and (max-width: 1599px) {
        font-size: 17px;
        }
        // lg
        @media (min-width: 1400px) and (max-width: 1499px) {
        font-size: 16px;
        }
        @media (min-width: 1300px) and (max-width: 1399px) {
        font-size: 14.5px;
        }
        @media (min-width: 1200px) and (max-width: 1299px) {
        font-size: 13.5px;
        }
        @media (min-width: 1100px) and (max-width: 1199px) {
        font-size: 12px;
        }
        @media (min-width: 1024px) and (max-width: 1099px) {
        font-size: 11.5px;
        }
        @media (min-width: 990px) and (max-width: 1023px) {
        font-size: 11px;
        }

        // md
        @media (min-width: 940px) and (max-width: 989px) {
        font-size: 20px;
        }
        @media (min-width: 890px) and (max-width: 939px) {
        font-size: 19px;
        }
        @media (min-width: 840px) and (max-width: 889px) {
        font-size: 18px;
        }
        @media (min-width: 790px) and (max-width: 839px) {
        font-size: 17px;
        }
        @media (min-width: 768px) and (max-width: 789px) {
        font-size: 16px;
        }
        @media (min-width: 640px) and (max-width: 767px) {
        font-size: 14px;
        }

        // sm
        @media (min-width: 470px) and (max-width: 639px) {
        font-size: 20px;
        }
        @media (min-width: 420px) and (max-width: 469px) {
        font-size: 18px;
        }
        @media (min-width: 360px) and (max-width: 419px) {
        font-size: 16px;
        }
        @media (max-width: 359px) {
        font-size: 12px;
        }
  }
`

const htmlFont = `
html {
    font-family: 'Roboto', sans-serif;;
    font-weight: normal;
    font-style: normal;
  }`

const wrapper = `
  .wrapper {
    width: 100%;
    max-width: ${rem(grid_max_width)};
    margin-left: auto;
    margin-right: auto;
  }
`

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${normalize};
    ${htmlFontSize};
    ${fonts};
    ${htmlFont};
    ${wrapper}
`;

export default GlobalStyles;
