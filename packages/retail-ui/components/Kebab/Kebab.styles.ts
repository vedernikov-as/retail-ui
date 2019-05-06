import { css } from 'emotion';
import styles from './Kebab.less';
import { ITheme } from '../../lib/theming/Theme';

const jsStyles = {
  focused(t: ITheme) {
    return css`
      .${styles.kebab}& {
        border-color: ${t.borderColorFocus};
      }
    `;
  },

  menu(t: ITheme) {
    return css`
      border-radius: ${t.popupBorderRadius};
    `;
  },
};

export default jsStyles;
