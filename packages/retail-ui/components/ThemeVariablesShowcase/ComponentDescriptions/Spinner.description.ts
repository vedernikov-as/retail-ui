export default {
  cloudBg: {
    contents: "css`\n  stroke: ${t.spinnerBgColor};\n`",
    variables: [
      "spinnerBgColor"
    ]
  },
  cloudStroke: {
    contents: "css`\n  animation: \n    ${t.spinnerKeyframesCloudOffset} 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,\n    ${t.spinnerKeyframesCloudLength} 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,\n    ${t.spinnerKeyframesColor} 6s ease-in-out infinite;\n`",
    variables: [
      "spinnerKeyframesCloudOffset",
      "spinnerKeyframesCloudLength",
      "spinnerKeyframesColor"
    ]
  },
  cloudStrokeDimmed: {
    contents: "css`\n  stroke: ${t.spinnerDimmedColor};\n  animation: \n    ${t.spinnerKeyframesCloudOffset} 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,\n    ${t.spinnerKeyframesCloudLength} 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite;\n`",
    variables: [
      "spinnerDimmedColor",
      "spinnerKeyframesCloudOffset",
      "spinnerKeyframesCloudLength"
    ]
  },
  circle: {
    contents: "css`\n  animation: \n    ${t.spinnerKeyframesCircleOffset} 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite,\n    ${t.spinnerKeyframesCircleLength} 2s cubic-bezier(0.36, 0.14, 0.38, 0.69) infinite,\n    ${t.spinnerKeyframesCircleRotate} 2s linear infinite;\n`",
    variables: [
      "spinnerKeyframesCircleOffset",
      "spinnerKeyframesCircleLength",
      "spinnerKeyframesCircleRotate"
    ]
  },
  circleStroke: {
    contents: "css`\n  animation: ${t.spinnerKeyframesColor} 6s ease-in-out infinite;\n`",
    variables: [
      "spinnerKeyframesColor"
    ]
  },
  circleStrokeDimmed: {
    contents: "css`\n  stroke: ${t.spinnerDimmedColor};\n`",
    variables: [
      "spinnerDimmedColor"
    ]
  },
  caption: {
    contents: "css`\n  color: ${t.spinnerCaptionColor};\n`",
    variables: [
      "spinnerCaptionColor"
    ]
  }
};