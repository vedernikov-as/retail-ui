/* tslint:disable:object-literal-sort-keys */
/* eslint-disable max-len */
import 'regenerator-runtime/runtime';
import 'babel-polyfill';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RenderContainer from './components/RenderContainer';
import { ZIndexStorage } from './components/ZIndex';

configure({ adapter: new Adapter() });

jest.mock('react-focus-lock', () => props => <div>{props.children}</div>);
jest.mock('lodash.debounce', () =>
  jest.fn(fn => {
    fn.cancel = jest.fn();
    return fn;
  }),
);

/**
 * Since React v15.5, there's a warning printed if you access `React.createClass` or `React.PropTypes`
 * https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#new-deprecation-warnings
 *
 * `import * as React from 'react'` is required by Flowtype https://flow.org/en/docs/react/types/ ,
 * but the * causes both those deprecated getters to be called.
 * This is particularly annoying in Jest since every test prints two useless warnings.
 *
 * This file can be used as a Jest setup file to simply delete those features of the `react` package.
 * You don't need the deprecation warning. Your tests will simply fail if you're still using the old ways.
 * https://facebook.github.io/jest/docs/en/configuration.html#setupfiles-array
 */

delete React.createClass;
delete React.PropTypes;

// In general, it's easier (and performance-wise faster) to patch class once,
// than write "__mock__" implementation and call
// ```jest.mock(...)``` in every test (including indirect ones)

beforeAll(() => {
  // Stable data-rendered-container-id / keys for every test
  RenderContainer.getRootId = () => 1;

  // Stable zIndex for every test
  ZIndexStorage.incrementZIndex = () => 1000;

  // Constant theme
  for (let key in THEME_OBJECT) {
    if (THEME_OBJECT.hasOwnProperty(key)) {
      // noinspection JSAccessibilityCheck
      // ThemeManager.theme[key] = THEME_OBJECT[key];
      // }
    }
  }
});

const THEME_OBJECT = {
  brandXLight: '#cae5f5',
  brandLight: '#3094d0',
  brand: '#1e79be',
  brandDark: '#1363a0',
  brandXDark: '#084f85',
  white: '#fff',
  grayXxLight: '#f2f2f2',
  grayXLight: '#e5e5e5',
  grayLight: '#a0a0a0',
  gray: '#808080',
  grayDark: '#333',
  black: '#000',
  blueXxLight: '#e4f3ff',
  blueLight: '#5199db',
  blue: '#3072c4',
  blueDark: '#1e5aa4',
  blueXDark: '#044785',
  greenXxLight: '#e2f7dc',
  green: '#3f9726',
  greenDark: '#228007',
  redXxLight: '#ffd6d6',
  red: '#d70c17',
  redDark: '#ce0014',
  yellowXxLight: '#fff0bc',
  yellow: '#f69c00',
  yellowDark: '#d97e00',
  bgDefault: '#fff',
  bgDisabled: '#f2f2f2',
  bgActive: '#5199db',
  errorMain: '#d70c17',
  errorSecondary: '#ffd6d6',
  errorText: '#ce0014',
  warningMain: '#f69c00',
  warningSecondary: '#fff0bc',
  warningText: '#d97e00',
  borderColorFocus: '#5199db',
  borderColorFocusLight: '#bad7f1',
  borderColorGrayDark: 'rgba(0, 0, 0, 0.28)',
  borderColorGrayLight: 'rgba(0, 0, 0, 0.15)',
  borderColorGrayLighter: '#fff',
  borderColorError: '#d70c17',
  borderColorWarning: '#f69c00',
  placeholderColor: '#a0a0a0',
  placeholderColorLight: '#cdcdcd',
  blinkColor: '#cde4f8',
  controlBorderWidth: '1px',
  controlLineHeightSmall: '20px',
  controlLineHeightMedium: '20px',
  controlLineHeightLarge: '22px',
  controlPaddingYSmall: '6px',
  controlPaddingYMedium: '9px',
  controlPaddingYLarge: '10px',
  controlHeightSmall: '34px',
  controlHeightMedium: '40px',
  controlHeightLarge: '44px',
  textColorDefault: '#404040',
  textColorInvert: '#fff',
  textColorDisabled: '#a0a0a0',
  linkColor: '#3072c4',
  linkActiveColor: '#044785',
  linkHoverColor: '#3072c4',
  linkDisabledColor: '#a0a0a0',
  linkHoverTextDecoration: 'underline',
  dropdownMenuBorder: '#d0d0d0',
  dropdownMenuBg: '#fff',
  dropdownMenuHoverBg: '#5199db',
  dropdownMenuSelectedBg: '#f1f1f1',
  loaderBg: '#fff',
  loaderOpacity: '0.8',
  btnCheckedBg: '#737373',
  btnDefaultBg: '#f9f9f9',
  btnDefaultBgStart: '#fff',
  btnDefaultBgEnd: '#ebebeb',
  btnDefaultShadow: '0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)',
  btnDefaultShadowArrow: '1.2px -1px 0 0 rgba(0, 0, 0, 0.15), 1px 0 0 0 rgba(0, 0, 0, 0.15)',
  btnDefaultShadowArrowLeft: '1px -1px 0 0 rgba(0, 0, 0, 0.15), 0 -1px 0 0 rgba(0, 0, 0, 0.15)',
  btnDefaultHoverBgStart: '#f2f2f2',
  btnDefaultHoverBgEnd: '#dfdfdf',
  btnDefaultHoverShadow: '0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.2)',
  btnDefaultHoverShadowArrow: '1px -1px 0 0 rgba(0, 0, 0, 0.15), 1px 0 0 0 rgba(0, 0, 0, 0.2)',
  btnDefaultHoverShadowArrowLeft: '1px -1px 0 0 rgba(0, 0, 0, 0.15), 0 -1px 0 0 rgba(0, 0, 0, 0.2)',
  btnDefaultActiveBg: '#e1e1e1',
  btnDefaultActiveShadow:
    '0 -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  btnDefaultActiveShadowArrow:
    '0 -2px 0 -1px rgba(0, 0, 0, 0.1), 1px -1px 0 0 rgba(0, 0, 0, 0.2), inset 0 4px 5px -4px rgba(0, 0, 0, 0.1)',
  btnDefaultActiveShadowArrowLeft:
    '0 -1px 0 0 rgba(0, 0, 0, 0.1), 1px -0.3px 0 0 rgba(0, 0, 0, 0.2), inset -4px 0 5px -4px rgba(0, 0, 0, 0.2)',
  btnSuccessBg: '#419d14',
  btnSuccessBgStart: '#4ba91d',
  btnSuccessBgEnd: '#37910b',
  btnSuccessShadow: '0 0 0 1px rgba(25, 103, 6, 0.7), 0 1px 0 0 rgba(21, 80, 7, 0.5)',
  btnSuccessShadowArrow: '1px -1px 0 0 rgba(25, 103, 6, 0.7), 1px 0 0 0 rgba(21, 80, 7, 0.5)',
  btnSuccessShadowArrowLeft: '1px -1px 0 0 rgba(25, 103, 6, 0.7), 0 -1px 0 0 rgba(21, 80, 7, 0.5)',
  btnSuccessHoverBgStart: '#3b8d13',
  btnSuccessHoverBgEnd: '#317e0b',
  btnSuccessHoverShadow: '0 0 0 1px rgba(7, 73, 1, 0.7), 0 1px 0 0 rgba(16, 70, 4, 0.3)',
  btnSuccessHoverShadowArrow: '1px -1px 0 0 rgba(7, 73, 1, 0.7), 1px 0 0 0 rgba(16, 70, 4, 0.3)',
  btnSuccessHoverShadowArrowLeft: '1px -1px 0 0 rgba(7, 73, 1, 0.7), 0 -1px 0 0 rgba(16, 70, 4, 0.3)',
  btnSuccessActiveBg: '#35840e',
  btnSuccessActiveShadow:
    '0 0 0 1px rgba(4, 63, 0, 0.75), 0 -1px 0 0 rgba(9, 32, 4, 0.6), inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  btnSuccessActiveShadowArrow:
    '1px -1px 0 0 rgba(4, 63, 0, 0.75), 0 -2px 0 -1px rgba(9, 32, 4, 0.6), inset 0 4px 5px -4px rgba(0, 0, 0, 0.1)',
  btnSuccessActiveShadowArrowLeft:
    '1px -1px 0 0 rgba(4, 63, 0, 0.75), 0 0 0 -1px rgba(9, 32, 4, 0.6), inset -4px 0 5px -4px rgba(0, 0, 0, 0.2)',
  btnPrimaryBg: '#1e8dd4',
  btnPrimaryBgStart: '#2899ea',
  btnPrimaryBgEnd: '#167ac1',
  btnPrimaryShadow: '0 0 0 1px rgba(14, 81, 129, 0.7), 0 1px 0 0 rgba(7, 37, 80, 0.5)',
  btnPrimaryShadowArrow: '1px -1px 0 0 rgba(14, 81, 129, 0.7), 1px 0 0 0 rgba(7, 37, 80, 0.5)',
  btnPrimaryShadowArrowLeft: '1px -1px 0 0 rgba(14, 81, 129, 0.7), 0 -1px 0 0 rgba(7, 37, 80, 0.5)',
  btnPrimaryHoverBgStart: '#0087d5',
  btnPrimaryHoverBgEnd: '#167ac1',
  btnPrimaryHoverShadow: '0 0 0 1px rgba(5, 60, 99, 0.7), 0 1px 0 0 rgba(7, 37, 80, 0.3)',
  btnPrimaryHoverShadowArrow: '1px -1px 0 0 rgba(5, 60, 99, 0.7), 1px 0 0 0 rgba(7, 37, 80, 0.3)',
  btnPrimaryHoverShadowArrowLeft: '1px -1px 0 0 rgba(5, 60, 99, 0.7), 0 -1px 0 0 rgba(7, 37, 80, 0.3)',
  btnPrimaryActiveBg: '#0079c3',
  btnPrimaryActiveShadow:
    '0 0 0 1px rgba(10, 63, 99, 0.75), 0 -1px 0 0 rgba(8, 45, 96, 0.5), inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  btnPrimaryActiveShadowArrow:
    '1px -1px 0 0 rgba(10, 63, 99, 0.75), 0 -2px 0 -1px rgba(8, 45, 96, 0.5), inset 0 4px 5px -4px rgba(0, 0, 0, 0.2)',
  btnPrimaryActiveShadowArrowLeft:
    '1px -1px 0 0 rgba(10, 63, 99, 0.75), 0 0 0 -1px rgba(8, 45, 96, 0.5), inset -4px 0 5px -4px rgba(0, 0, 0, 0.2)',
  btnDangerBg: '#e14c30',
  btnDangerBgStart: '#ec5438',
  btnDangerBgEnd: '#d44327',
  btnDangerShadow: '0 0 0 1px rgba(173, 15, 0, 0.7), 0 1px 0 0 rgba(0, 0, 0, 0.4)',
  btnDangerShadowArrow: '1px -1px 0 0 rgba(173, 15, 0, 0.7), 1px 0 0 0 rgba(0, 0, 0, 0.4)',
  btnDangerShadowArrowLeft: '1px -1px 0 0 rgba(173, 15, 0, 0.7), 0 -1px 0 0 rgba(0, 0, 0, 0.4)',
  btnDangerHoverBgStart: '#d44227',
  btnDangerHoverBgEnd: '#c73013',
  btnDangerHoverShadow: '0 0 0 1px rgba(145, 0, 0, 0.7), 0 1px 0 0 rgba(90, 3, 3, 0.4)',
  btnDangerHoverShadowArrow: '1px -1px 0 0 rgba(145, 0, 0, 0.7), 1px 0 0 0 rgba(90, 3, 3, 0.4)',
  btnDangerHoverShadowArrowLeft: '1px -1px 0 0 rgba(145, 0, 0, 0.7), 0 -1px 0 0 rgba(90, 3, 3, 0.4)',
  btnDangerActiveBg: '#cd381b',
  btnDangerActiveShadow:
    '0 0 0 1px rgba(108, 7, 7, 0.75), 0 -1px 0 0 rgba(90, 3, 3, 0.4), inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  btnDangerActiveShadowArrow:
    '1px -1px 0 0 rgba(108, 7, 7, 0.75), 0 -2px 0 -1px rgba(90, 3, 3, 0.4), inset 0 4px 5px -4px rgba(0, 0, 0, 0.1)',
  btnDangerActiveShadowArrowLeft:
    '1px -1px 0 0 rgba(108, 7, 7, 0.75), 0 0 0 -1px rgba(90, 3, 3, 0.4), inset -4px 0 5px -4px rgba(0, 0, 0, 0.1)',
  btnPayBg: '#ffc943',
  btnPayBgStart: '#ffd54b',
  btnPayBgEnd: '#ffbb39',
  btnPayShadow: '0 0 0 1px rgba(238, 169, 34, 0.7), 0 1px 0 0 rgba(77, 16, 0, 0.56)',
  btnPayShadowArrow: '1px -1px 0 0 rgba(238, 169, 34, 0.7), 1px -0.3px 0 0 rgba(77, 16, 0, 0.56)',
  btnPayShadowArrowLeft: '1px -1px 0 0 rgba(238, 169, 34, 0.7), 0.2px -1px 0 -0.3px rgba(77, 16, 0, 0.56)',
  btnPayHoverBgStart: '#ffbd3a',
  btnPayHoverBgEnd: '#f8a91d',
  btnPayHoverShadow: '0 0 0 1px rgba(227, 142, 8, 0.7), 0 1px 0 0 rgba(93, 20, 3, 0.4)',
  btnPayHoverShadowArrow: '1px -1px 0 0 rgba(227, 142, 8, 0.7), 1px -0.3px 0 0 rgba(93, 20, 3, 0.4)',
  btnPayHoverShadowArrowLeft: '1px -1px 0 0 rgba(227, 142, 8, 0.7), 0 -1px 0 0 rgba(93, 20, 3, 0.4)',
  btnPayActiveBg: '#fbb028',
  btnPayActiveShadow:
    '0 0 0 1px rgba(210, 144, 0, 0.7), 0 -1px 0 0 rgba(0, 0, 0, 0.44), inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  btnPayActiveShadowArrow:
    '1px -1px 0 0 rgba(210, 144, 0, 0.7), 0 -2px 0 -1px rgba(0, 0, 0, 0.44), inset 0 4px 5px -4px rgba(0, 0, 0, 0.05)',
  btnPayActiveShadowArrowLeft:
    '1px -1px 0 0 rgba(210, 144, 0, 0.7), 2px -0.3px 0 -1px rgba(0, 0, 0, 0.44), inset -4px 0 5px -4px rgba(0, 0, 0, 0.05)',
  sltPlaceholderColor: '#888',
  tabColorFocus: '#5199db',
  tabColorError: '#e14c30',
  tabColorWarning: '#ffc943',
  tabColorSuccess: '#419d14',
  tabColorPrimary: '#1e8dd4',
  tabColorHover: '#bad7f1',
  tabColorHoverError: '#f1ac9f',
  tabColorHoverWarning: '#ffeec3',
  tabColorHoverSuccess: '#7de849',
  tabColorHoverPrimary: '#84c4ee',
  tooltipBg: '#fff',
  tooltipBorder: '#d0d0d0',
  tooltipBorderRaduis: '2px',
  tooltipBoxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)',
  tooltipCloseBtnColor: '#808080',
  tooltipCloseBtnHoverColor: '#606060',
  modalBackBg: '#333',
  modalBackOpacity: '0.6',
  modalCloseButtonColor: '#808080',
  modalCloseButtonDisabledColor: '#8b8b8b',
  modalCloseButtonHoverColor: '#333',
  modalFixedHeaderBg: '#fff',
  modalFixedHeaderShadow: '0 1px 10px #000000',
  modalFixedFooterShadow: '0 -1px 10px #000000',
  modalFooterBg: '#e9e9e9',
  modalAdaptiveThreshold: '425px',
  sidePageFooterPanelBg: '#e9e9e9',
  sidePageCloseButtonColor: 'rgba(0, 0, 0, 0.54)',
  sidePageCloseButtonHoverColor: '#333',
  sidePageContainerShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  dateInputIconColor: 'inherit',
  dateInputMaskColor: '#b8b8b8',
  calendarCellBg: '#fff',
  calendarCellHoverBgColor: '#5199db',
  calendarCellHoverColor: '#fff',
  calendarCellActiveHoverColor: '#fff',
  calendarCellWeekendColor: '#d70c17',
  calendarCellTodayBorder: '1px solid #8b8b8b',
  calendarCellSelectedBgColor: '#e9e9e9',
  calendarCellSelectedFontColor: 'inherit',
  calendarMonthHeaderStickedBgColor: '#fff',
  calendarMonthTitleBorderBottom: '1px solid #dfdede',
  dateSelectMenuBg: '#fff',
  dateSelectMenuItemBgActive: '#5199db',
  dateSelectMenuItemBgSelected: '#ececec',
  dateSelectMenuItemBgDisabled: '#fff',
  dateSelectMenuItemFontActive: '#fff',
  dateSelectMenuItemFontSelected: '#404040',
  dateSelectMenuItemFontDisabled: '#a0a0a0',
  datePickerOpenBtnColor: '#333',
  pickerBg: '#fff',
  pickerShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)',
  pickerTodayWrapperBgColor: '#fff',
  pickerTodayWrapperBorderTop: '1px solid #dfdede',
  pickerTodayWrapperHoverBgColor: '#f5f5f5',
  pagingDotsColor: '#808080',
  pagingForwardLinkColor: '#3072c4',
  pagingForwardLinkDisabledColor: '#a0a0a0',
  pagingPageLinkActiveBg: 'rgba(0, 0, 0, 0.09)',
  pagingPageLinkActiveColor: '#000',
  pagingPageLinkHoverBg: 'rgba(0, 0, 0, 0.05)',
  pagingPageLinkHintColor: '#bbb',
  menuSeparatorBorderColor: '#e6e6e6',
  toastBg: 'rgba(51, 51, 51, 0.8)',
  toastColor: '#fff',
  toastLinkColor: '#80caff',
  toastCloseColor: '#a0a0a0',
  toastCloseHoverColor: '#fff',
  tbBg: '#fff',
  tbShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1)',
  tdDividerBg: '#dfdfdf',
  logoColor: '#000',
  logoHoverColor: '#000',
  menuItemPaddingForIcon: '36px',
  menuBorder: '1px solid #d5d5d5',
  menuShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  btnShadowCheckedArrow: '1px -1px 0 0 rgba(0, 0, 0, 0.6), inset 0 4px 2px -3px rgba(0, 0, 0, 0.3)',
  btnShadowCheckedArrowLeft: '1px -1px 0 0 rgba(0, 0, 0, 0.6), inset -4px 0 2px -3px rgba(0, 0, 0, 0.3)',
  toggleBg: 'linear-gradient(-180deg, #fff, #ebebeb)',
  toggleBgDisabled: 'none',
  toggleBgHover: 'linear-gradient(-180deg, #f1f1f1, #dedede)',
  toggleBgChecked: '#3072c4',
  toggleBgWarning: '#f69c00',
  toggleBgError: '#d70c17',
  toggleBgActive: '#e5e5e5',
  toggleFocusShadowColor: '#5199db',
  toggleBorderColor: '#d0d0d0',
  btnMenuArrowColor: '#a6a6a6',
  popupBorderRadius: '2px',
  popupBorder: 'none',
  popupBorderColor: 'transparent',
  popupDropShadow: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
  popupBoxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.2)',
  inputSidePadding: '10px',
  inputBg: '#fff',
  inputDisabledBg: '#f2f2f2',
  inputDisabledBorderColor: 'rgba(0, 0, 0, 0.15)',
  inputIconColor: '#a9a9a9',
  inputColor: 'inherit',
  inputDisabledColor: '#f2f2f2',
  inputShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.05)',
  inputFocusShadow: '0 0 0 1px #5199db',
  inputFocusOutline: '#5199db',
  inputBorderWidth: '1px',
  inputBorderTopColor: 'rgba(0, 0, 0, 0.28)',
  chbShadow: '0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)',
  chbShadowDisabled: '0 0 0 1px rgba(0, 0, 0, 0.15)',
  chbShadowActive: '0 -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  chbBg: 'linear-gradient(#fdfdfd, #ededed)',
  chbIndeterminateBg: '#404040',
  chbActiveBg: '#e1e1e1',
  chbHoverBg: 'linear-gradient(-180deg, #f2f2f2 0, #dfdfdf 100%)',
  chbBorder: 'none',
  chbBorderColorFocus: '#5199db',
  chbBorderColorWarning: 'transparent',
  chbBorderColorError: 'transparent',
  chbShadowWidth: '2px',
  textareaShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.05)',
  textareaBorderTopColor: 'rgba(0, 0, 0, 0.28)',
  textareaDisabledBg: '#f2f2f2',
  textareaDisabledBorderColor: 'rgba(0, 0, 0, 0.15)',
  radioSize: '16px',
  radioVerticalAlign: '-2px',
  radioBgImage: 'linear-gradient(-180deg, #fff 0, #ebebeb 100%)',
  radioBoxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)',
  radioHoverBg: 'linear-gradient(-180deg, #f2f2f2 0, #dfdfdf 100%)',
  radioHoverShadow: '0 1px 0 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.2)',
  radioActiveBg: 'linear-gradient(-180deg, #e1e1e1 0, #e1e1e1 100%)',
  radioActiveShadow:
    '0 -1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  radioCheckedBulletColor: '#404040',
  radioDisabledShadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
  radioLabelDisplay: 'inline-table',
  specificityLevel: '0',
};
