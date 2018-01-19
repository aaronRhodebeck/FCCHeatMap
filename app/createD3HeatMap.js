import * as d3 from "d3";
import { interpolateRdYlBu } from "d3-scale-chromatic";

export default function createD3HeatMap(
  elementToAttachTo,
  dataset,
  reactComponent,
  classes = [],
  svgConfig = {
    width: 600,
    height: 330,
    margin: { left: 30, top: 50, right: 10, bottom: 80 },
    scaleable: true
  }
) {
  //#region Shared variables
  const { width, height, margin, scaleable } = svgConfig;
<<<<<<< HEAD
  const { baseTemperature, monthlyVariance } = dataset;
=======
>>>>>>> Setup and scaling
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

<<<<<<< HEAD
  //#region Scale names
  const scaleX = d3.scaleTime(); // Year
  const scaleY = d3.scaleBand(); // Month
  const scaleColor = d3.scaleSequential(interpolateRdYlBu); // Colors
  //#endregion

  //#region Setup scales
=======
  //#region Make scales
  const scaleX = d3.scaleLinear(); // Year
  const scaleY = d3.scaleBand(); // Month
  const scaleColor = d3.scaleSequential(interpolateRdYlBu);

>>>>>>> Create scales
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
<<<<<<< HEAD
  const parseYear = d3.timeParse("%Y");

  const tempVarianceDomain = d3.extent(monthlyVariance, d => d.variance);
  console.log(tempVarianceDomain);

  const yearDomain = d3.extent(monthlyVariance, d => parseYear(d.year));
  console.log(yearDomain);

  const monthDomain = d3.extent(monthlyVariance, d => d.month);
=======

  const tempVarianceDomain = d3.extent(dataset.monthlyVariance, d => d.variance);
  console.log(tempVarianceDomain);

  const yearDomain = d3.extent(dataset.monthlyVariance, d => d.year);
  console.log(yearDomain);

  const monthDomain = d3.extent(dataset.monthlyVariance, d => d.month);
>>>>>>> Create scales
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

  //#region Add rectangles for data
  const barWidth = 2;
  console.log(scaleX(parseYear(yearDomain[0] + 1)) - scaleX(parseYear(yearDomain[0])));
  const barHeight = scaleY.bandwidth;

  const bars = chart
    .selectAll("rect")
    .data(monthlyVariance)
    .enter()
    .append("rect")
    .attr("width", barWidth)
    .attr("height", barHeight)
    .attr("x", d => scaleX(parseYear(d.year)) + barWidth / 2)
    .attr("y", d => scaleY(months[d.month - 1]))
    .attr("fill", d => scaleColor(d.variance))
    .attr("year", d => d.year)
    .attr("month", d => d.month)
    .attr("variance", d => d.variance);
  console.log(monthlyVariance);
  //#endregion

  //#region Add axes to chart
  const xAxis = d3.axisBottom(scaleX);
  const yAxis = d3.axisLeft(scaleY);

  chart
    .append("g")
    .call(xAxis)
    .attr("transform", `translate(0, ${height - margin.bottom})`);

  chart
    .append("g")
    .call(yAxis)
    .attr("transform", `translate(${margin.left}, 0)`);
  //#endregion

  //#region Add color legend
  const colorLegend = chart
    .append("g")
    .attr("transform", `translate(${margin.left + 30}, ${height - margin.bottom + 30})`);
  const colorTicks = (range, numberOfTicks) => {
    let ticks = [];
    for (let i = 0; i <= numberOfTicks; i++) {
      ticks.push(range[0] + i * ((range[1] - range[0]) / numberOfTicks));
    }
    return ticks;
  };
  const squareHeight = (margin.bottom - 20) / 4;
  const squareWidth = squareHeight * 2;

  const legendSquares = colorLegend
    .selectAll("rect")
    .data(colorTicks(tempVarianceDomain, 8))
    .enter()
    .append("rect")
    .attr("height", squareHeight)
    .attr("width", squareWidth)
    .attr("transform", (d, i) => `translate(${i * squareWidth}, 0)`)
    .attr("fill", d => scaleColor(d))
    .attr("stroke", "black")
    .style("stroke-width", 0.5);

  const legendLabels = colorLegend
    .selectAll("text")
    .data(colorTicks(tempVarianceDomain, 8))
    .enter()
    .append("text")
    .text(d => (baseTemperature + d).toFixed(1))
    .attr(
      "transform",
      (d, i) => `translate(${squareWidth * i + squareWidth / 2}, ${squareHeight + 2})`
    )
    .style("font-size", 10)
    .style("text-anchor", "middle")
    .style("alignment-baseline", "hanging");

  //#endregion
}
