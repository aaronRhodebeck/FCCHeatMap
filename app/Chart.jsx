import React from "react";
import { withFauxDOM } from "react-faux-dom";
import createD3HeatMap from "./createD3HeatMap";
import styled from "styled-components";

const ChartDiv = styled.div`
<<<<<<< HEAD
  margin: 5;
  max-width: calc(75vh * 2);
  max-height: 100%;
=======
  margin: auto;
  max-width: calc(75vh * 2);
  max-height: 75vh;
>>>>>>> Setup and scaling
  box-shadow: 1px 1px 4px rgba(200, 200, 200, 0.4), -1px -1px 4px rgba(200, 200, 200, 0.3);
`;

class Chart extends React.Component {
  componentWillMount() {
    const faux = this.props.connectFauxDOM("div", "chart");
    createD3HeatMap(faux, this.props.dataset);
  }

  render() {
    return <ChartDiv>{this.props.chart}</ChartDiv>;
  }
}

export default withFauxDOM(Chart);
