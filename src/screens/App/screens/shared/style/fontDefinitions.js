/* SYSTEM FONT */

import { css } from 'styled-components';


export const systemFont = css`
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Segoe UI Light'), local('Ubuntu Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }
  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 300;
    src: local('.SFNSText-LightItalic'),
      local('.HelveticaNeueDeskInterface-Italic'), local('.LucidaGrandeUI'),
      local('Segoe UI Light Italic'), local('Ubuntu Light Italic'),
      local('Roboto-LightItalic'), local('DroidSans'), local('Tahoma');
  }
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    src: local('.Times-New-Roman');
  }
  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 400;
    src: local('.SFNSText-Italic'), local('.HelveticaNeueDeskInterface-Italic'),
      local('.LucidaGrandeUI'), local('Segoe UI Italic'), local('Ubuntu Italic'),
      local('Roboto-Italic'), local('DroidSans'), local('Tahoma');
  }
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 500;
    src: local('.SFNSText-Medium'),
      local('.HelveticaNeueDeskInterface-MediumP4'), local('.LucidaGrandeUI'),
      local('Segoe UI Semibold'), local('Ubuntu Medium'), local('Roboto-Medium'),
      local('DroidSans-Bold'), local('Tahoma Bold');
  }
  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 500;
    src: local('.SFNSText-MediumItalic'),
      local('.HelveticaNeueDeskInterface-MediumItalicP4'),
      local('.LucidaGrandeUI'), local('Segoe UI Semibold Italic'),
      local('Ubuntu Medium Italic'), local('Roboto-MediumItalic'),
      local('DroidSans-Bold'), local('Tahoma Bold');
  }
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    src: local('.SFNSText-Bold'), local('.HelveticaNeueDeskInterface-Bold'),
      local('.LucidaGrandeUI'), local('Segoe UI Bold'), local('Ubuntu Bold'),
      local('Roboto-Bold'), local('DroidSans-Bold'), local('Tahoma Bold');
  }
  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 700;
    src: local('.SFNSText-BoldItalic'),
      local('.HelveticaNeueDeskInterface-BoldItalic'), local('.LucidaGrandeUI'),
      local('Segoe UI Bold Italic'), local('Ubuntu Bold Italic'),
      local('Roboto-BoldItalic'), local('DroidSans-Bold'), local('Tahoma Bold');
  }
`