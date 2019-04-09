import { css } from 'emotion';
import { ITheme } from '../../lib/ThemeManager';

const jsStyles = {
  root(t: ITheme) {
    return css`
      background: ${t.bgDefault};
    `;
  },

  shadow(t: ITheme) {
    return css`
      border: ${t.menuBorder};
      box-shadow: ${t.menuShadow};
    `;
  },
};

export default jsStyles;