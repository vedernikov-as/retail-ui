export default {
  bg: {
    contents: "css`\n  background: ${t.modalBackBg};\n  opacity: ${t.modalBackOpacity};\n`",
    variables: [
      "modalBackBg",
      "modalBackOpacity"
    ]
  },
  window: {
    contents: "css`\n  background: ${t.bgDefault};\n`",
    variables: [
      "bgDefault"
    ]
  },
  centerContainer: {
    contents: "css`\n  @media screen and (max-width: ${t.modalAdaptiveThreshold}) {\n    margin: 0;\n    width: 100%;\n  }\n`",
    variables: [
      "modalAdaptiveThreshold"
    ]
  },
  close: {
    contents: "css`\n  &.${styles.disabled} {\n    color: ${t.modalCloseButtonDisabledColor};\n  }\n\n  &:after,\n  &:before {\n    background: ${t.modalCloseButtonColor};\n  }\n\n  &:focus::before,\n  &:focus::after,\n  &:hover::before,\n  &:hover::after {\n    background: ${t.modalCloseButtonHoverColor};\n  }\n\n  &:focus {\n    &.${styles.closeOutline} {\n      border: 2px solid ${t.borderColorFocus};\n    }\n  }\n`",
    variables: [
      "modalCloseButtonDisabledColor",
      "modalCloseButtonColor",
      "modalCloseButtonHoverColor",
      "borderColorFocus"
    ]
  },
  footer: {
    contents: "css`\n  &.${styles.panel} {\n    background: ${t.modalFooterBg};\n  }\n`",
    variables: [
      "modalFooterBg"
    ]
  },
  fixedHeader: {
    contents: "css`\n  background: ${t.modalFixedHeaderBg};\n\n  &:after {\n    box-shadow: ${t.modalFixedHeaderShadow};\n  }\n`",
    variables: [
      "modalFixedHeaderBg",
      "modalFixedHeaderShadow"
    ]
  },
  fixedFooter: {
    contents: "css`\n  background: ${t.modalFixedHeaderBg};\n\n  &:before {\n    box-shadow: ${t.modalFixedFooterShadow};\n  }\n`",
    variables: [
      "modalFixedHeaderBg",
      "modalFixedFooterShadow"
    ]
  }
};