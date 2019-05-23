export default {
  textarea: {
    contents: "css`\n  background: ${t.textareaBg};\n  border: 1px solid ${t.borderColorGrayLight};\n  border-top-color: ${t.textareaBorderTopColor};\n  color: ${t.textareaColor};\n  min-height: ${t.controlHeightSmall};\n  box-shadow: ${t.textareaShadow};\n\n  &:focus {\n    border-color: ${t.borderColorFocus};\n    box-shadow: 0 0 0 1px ${t.borderColorFocus};\n\n    &::placeholder {\n      color: ${t.placeholderColorLight};\n    }\n  }\n  &:disabled {\n    color: ${t.textColorDisabled};\n    background: ${t.textareaDisabledBg};\n    border-color: ${t.textareaDisabledBorderColor};\n  }\n\n  &::placeholder {\n    color: ${t.placeholderColor};\n  }\n\n  &:-moz-placeholder {\n    color: inherit; // Need to be discussed\n  }\n\n  &::-moz-placeholder {\n    color: inherit;\n  }\n`",
    variables: [
      "textareaBg",
      "borderColorGrayLight",
      "textareaBorderTopColor",
      "textareaColor",
      "controlHeightSmall",
      "textareaShadow",
      "borderColorFocus",
      "placeholderColorLight",
      "textColorDisabled",
      "textareaDisabledBg",
      "textareaDisabledBorderColor",
      "placeholderColor"
    ]
  },
  error: {
    contents: "css`\n  .${styles.textarea}& {\n    border-color: ${t.borderColorError};\n    box-shadow: 0 0 0 1px ${t.borderColorError};\n  }\n  .${styles.textarea}&:focus {\n    border-color: ${t.borderColorError};\n    box-shadow: 0 0 0 1px ${t.borderColorError};\n  }\n`",
    variables: [
      "borderColorError"
    ]
  },
  warning: {
    contents: "css`\n  .${styles.textarea}& {\n    border-color: ${t.borderColorWarning};\n    box-shadow: 0 0 0 1px ${t.borderColorWarning};\n  }\n  .${styles.textarea}&:focus {\n    border-color: ${t.borderColorWarning};\n    box-shadow: 0 0 0 1px ${t.borderColorWarning};\n  }\n`",
    variables: [
      "borderColorWarning"
    ]
  }
};