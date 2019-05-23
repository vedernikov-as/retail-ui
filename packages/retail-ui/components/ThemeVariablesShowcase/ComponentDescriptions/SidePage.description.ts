export default {
  container: {
    contents: "css`\n  background: ${t.bgDefault};\n`",
    variables: [
      "bgDefault"
    ]
  },
  shadow: {
    contents: "css`\n  .${styles.container}& {\n    box-shadow: ${t.sidePageContainerShadow};\n  }\n`",
    variables: [
      "sidePageContainerShadow"
    ]
  },
  close: {
    contents: "css`\n  color: ${t.sidePageCloseButtonColor};\n\n  &:hover {\n    color: ${t.sidePageCloseButtonHoverColor};\n  }\n`",
    variables: [
      "sidePageCloseButtonColor",
      "sidePageCloseButtonHoverColor"
    ]
  },
  panel: {
    contents: "css`\n  .${styles.footerContent}& {\n    background: ${t.sidePageFooterPanelBg};\n  }\n  .${styles.footerContent}.${styles.fixed}& {\n    background: ${t.sidePageFooterPanelBg};\n  }\n`",
    variables: [
      "sidePageFooterPanelBg"
    ]
  },
  fixed: {
    contents: "css`\n  .${styles.header}& {\n    background: ${t.bgDefault};\n    box-shadow: 0 1px ${t.borderColorGrayLight};\n  }\n  .${styles.footerContent}& {\n    background: ${t.bgDefault};\n    border-top: 1px solid ${t.borderColorGrayLight};\n  }\n`",
    variables: [
      "bgDefault",
      "borderColorGrayLight"
    ]
  }
};