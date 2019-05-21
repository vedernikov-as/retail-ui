export default {
  root: {
    contents: "css`\n  color: ${t.inputColor};\n  background-color: ${t.inputBg};\n  box-shadow: ${t.inputShadow};\n  border: ${t.inputBorderWidth} solid ${t.borderColorGrayLight};\n  border-top-color: ${t.inputBorderTopColor};\n  }\n`",
    variables: [
      "inputColor",
      "inputBg",
      "inputShadow",
      "inputBorderWidth",
      "borderColorGrayLight",
      "inputBorderTopColor"
    ]
  },
  useDefaultColor: {
    contents: "css`\n  .${classes.leftIcon}&, .${classes.rightIcon}& {\n    color: ${t.inputIconColor};\n  }\n`",
    variables: [
      "inputIconColor"
    ]
  },
  focus: {
    contents: "css`\n  .${classes.root}& {\n    border-color: ${t.borderColorFocus};\n    box-shadow: ${t.inputFocusShadow};\n  }\n  .rt-ie-any .${classes.root}& {\n    outline: 1px solid ${t.inputFocusOutline};\n  }\n`",
    variables: [
      "borderColorFocus",
      "inputFocusShadow",
      "inputFocusOutline"
    ]
  },
  placeholder: {
    contents: "css`\n  color: ${t.placeholderColor};\n\n  .${classes.root}.${classes.focus} & {\n    color: ${t.placeholderColorLight};\n  }\n`",
    variables: [
      "placeholderColor",
      "placeholderColorLight"
    ]
  },
  input: {
    contents: "css`\n  color: ${t.inputTextColor};\n\n  .${classes.root}.${classes.focus} &:-moz-placeholder {\n    color: ${t.placeholderColorLight};\n  }\n  .${classes.root}.${classes.focus} &::-moz-placeholder {\n    color: ${t.placeholderColorLight};\n  }\n  .${classes.root}.${classes.focus} &::placeholder {\n    color: ${t.placeholderColorLight};\n  }\n  .${classes.root}.${classes.disabled} & {\n    color: ${t.textColorDisabled};\n  }\n  .${classes.root}.${classes.disabled} &:-moz-placeholder {\n    -webkit-text-fill-color: ${t.placeholderColor};\n  }\n  .${classes.root}.${classes.disabled} &::-moz-placeholder {\n    -webkit-text-fill-color: ${t.placeholderColor};\n  }\n  .${classes.root}.${classes.disabled} &::placeholder {\n    -webkit-text-fill-color: ${t.placeholderColor};\n  }\n  &:-moz-placeholder {\n    color: ${t.placeholderColor};\n  }\n  &::-moz-placeholder {\n    color: ${t.placeholderColor};\n  }\n  &::placeholder {\n    color: ${t.placeholderColor};\n  }\n`",
    variables: [
      "inputTextColor",
      "placeholderColorLight",
      "textColorDisabled",
      "placeholderColor"
    ]
  },
  warning: {
    contents: "css`\n  .${classes.root}& {\n    border-color: ${t.borderColorWarning};\n    box-shadow: 0 0 0 1px ${t.borderColorWarning};\n  }\n  .rt-ie-any .${classes.root}& {\n    outline: 1px solid ${t.borderColorWarning};\n  }\n`",
    variables: [
      "borderColorWarning"
    ]
  },
  error: {
    contents: "css`\n  .${classes.root}& {\n    border-color: ${t.borderColorError};\n    box-shadow: 0 0 0 1px ${t.borderColorError};\n  }\n  .rt-ie-any .${classes.root}& {\n    outline: 1px solid ${t.borderColorError};\n  }\n`",
    variables: [
      "borderColorError"
    ]
  },
  disabled: {
    contents: "css`\n  .${classes.root}& {\n    border-color: ${t.inputDisabledBorderColor};\n    background: ${t.inputDisabledBg};\n  }\n`",
    variables: [
      "inputDisabledBorderColor",
      "inputDisabledBg"
    ]
  },
  blink: {
    contents: "css`\n  .${classes.root}& {\n    background-color: ${t.blinkColor};\n  }\n`",
    variables: [
      "blinkColor"
    ]
  },
  sizeSmall: {
    contents: "css`\n  line-height: ${t.controlLineHeightSmall};\n  padding-top: ${t.controlPaddingYSmall};\n  padding-bottom: ${t.controlPaddingYSmall};\n  height: ${t.controlHeightSmall};\n\n  .rt-ie-any & {\n    padding-top: ${DimensionFunctions.shift(t.controlPaddingYSmall, '-1')};\n    padding-bottom: ${DimensionFunctions.shift(t.controlPaddingYSmall, '1')};\n  }\n`",
    variables: [
      "controlLineHeightSmall",
      "controlPaddingYSmall",
      "controlHeightSmall"
    ]
  },
  sizeMedium: {
    contents: "css`\n  line-height: ${t.controlLineHeightMedium};\n  padding-top: ${t.controlPaddingYMedium};\n  padding-bottom: ${t.controlPaddingYMedium};\n  height: ${t.controlHeightMedium};\n\n  .rt-ie-any & {\n    padding-top: ${DimensionFunctions.shift(t.controlPaddingYMedium, '-1')};\n    padding-bottom: ${DimensionFunctions.shift(t.controlPaddingYMedium, '1')};\n  }\n`",
    variables: [
      "controlLineHeightMedium",
      "controlPaddingYMedium",
      "controlHeightMedium"
    ]
  },
  DEPRECATED_sizeMedium: {
    contents: "css`\n  line-height: ${t.controlLineHeightMedium};\n  padding-top: ${t.controlPaddingYMedium};\n  padding-bottom: ${t.controlPaddingYMedium};\n  height: ${t.controlHeightMedium};\n\n  .rt-ie-any & {\n    padding-top: ${DimensionFunctions.shift(t.controlPaddingYMedium, '-1')};\n    padding-bottom: ${DimensionFunctions.shift(t.controlPaddingYMedium, '1')};\n  }\n`",
    variables: [
      "controlLineHeightMedium",
      "controlPaddingYMedium",
      "controlHeightMedium"
    ]
  },
  sizeLarge: {
    contents: "css`\n  line-height: ${t.controlLineHeightLarge};\n  height: ${t.controlHeightLarge};\n  padding-top: ${DimensionFunctions.shift(t.controlPaddingYLarge, '-1')};\n  padding-bottom: ${DimensionFunctions.shift(t.controlPaddingYLarge, '1')};\n\n  .rt-ie-any & {\n    padding-top: ${DimensionFunctions.shift(t.controlPaddingYLarge, '-2')};\n    padding-bottom: ${DimensionFunctions.shift(t.controlPaddingYLarge, '2')};\n  }\n`",
    variables: [
      "controlLineHeightLarge",
      "controlHeightLarge",
      "controlPaddingYLarge"
    ]
  },
  prefix: {
    contents: "css`\n  color: ${t.placeholderColor};\n`",
    variables: [
      "placeholderColor"
    ]
  },
  suffix: {
    contents: "css`\n  color: ${t.placeholderColor};\n`",
    variables: [
      "placeholderColor"
    ]
  }
};