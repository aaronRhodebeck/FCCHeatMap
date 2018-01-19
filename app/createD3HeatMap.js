import * as d3 from "d3";

export default function createD3HeatMap(
  elementToAttachTo,
  dataset,
  reactComponent,
  classes = [],
  svgConfig = {
    width: 600,
    height: 300,
    margin: { left: 30, top: 50, right: 10, bottom: 50 },
    scaleable: true
  }
) {
  //#region Shared variables
  const { width, height, margin, scaleable } = svgConfig;
  const classesString = classes.join(" ");
  const chart = d3.select(elementToAttachTo).append("svg");
  //#endregion

  // #region SVG setup and scaling
  chart.attr("class", classesString);
  if (scaleable) {
    chart
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMin");
  } else {
    chart.attr("width", width).attr("height", height);
  }
  //#endregion
}
