import React from "react";
import { withFauxDOM } from "react-faux-dom";
import createD3HeatMap from "./createD3HeatMap";
import styled from "styled-components";

const ChartDiv = styled.div`
  margin: auto;
  max-width: calc(75vh * 4/3);
  height: 75vh;
  box-shadow: 1px 1px 4px rgba(200, 200, 200, 0.4), -1px -1px 4px rgba(200, 200, 200, 0.3);
`;

class Chart extends React.Component {
  componentWillMount() {
    const faux = this.props.connectFauxDOM("div", "chart");
    createD3HeatMap(faux);
  }

  render() {
    return <ChartDiv>{this.props.chart}</ChartDiv>;
  }
}

export default withFauxDOM(Chart);
