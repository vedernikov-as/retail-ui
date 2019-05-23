export default {
  cross: {
    contents: "css`\n  color: ${t.tooltipCloseBtnColor};\n\n  &:hover {\n    color: ${t.tooltipCloseBtnHoverColor};\n  }\n`",
    variables: [
      "tooltipCloseBtnColor",
      "tooltipCloseBtnHoverColor"
    ]
  }
};