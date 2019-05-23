export default {
  focused: {
    contents: "css`\n  .${styles.kebab}& {\n    border-color: ${t.borderColorFocus};\n  }\n`",
    variables: [
      "borderColorFocus"
    ]
  },
  menu: {
    contents: "css`\n  border-radius: ${t.popupBorderRadius};\n`",
    variables: [
      "popupBorderRadius"
    ]
  }
};