import * as d3 from "d3";
import { interpolateRdYlBu } from "d3-scale-chromatic";

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

  //#region Make scales
  const scaleX = d3.scaleLinear(); // Year
  const scaleY = d3.scaleBand(); // Month
  const scaleColor = d3.scaleSequential(interpolateRdYlBu);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const tempVarianceDomain = d3.extent(dataset.monthlyVariance, d => d.variance);
  console.log(tempVarianceDomain);

  const yearDomain = d3.extent(dataset.monthlyVariance, d => d.year);
  console.log(yearDomain);

  const monthDomain = d3.extent(dataset.monthlyVariance, d => d.month);
  console.log(monthDomain);

  scaleX.domain(yearDomain).range([margin.left, width - margin.right]);
  console.log(
    "X-Scale start: " + scaleX(yearDomain[0]),
    "X-Scale end: " + scaleX(yearDomain[1])
  );

  scaleY
    .domain(months)
    .range([height - margin.bottom, margin.top])
    .round();
  console.log("Y-Scale start: " + scaleY("Jan"), scaleY("Jul"), scaleY("Dec"));

  scaleColor.domain([tempVarianceDomain[1], tempVarianceDomain[0]]);
  console.log(
    "Color Scale start: " + scaleColor(tempVarianceDomain[0]),
    "Color scale end: " + scaleColor(tempVarianceDomain[1])
  );
  //#endregion
}
