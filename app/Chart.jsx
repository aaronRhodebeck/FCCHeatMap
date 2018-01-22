import React from "react";
import { withFauxDOM } from "react-faux-dom";
import createD3HeatMap from "./createD3HeatMap";
import styled from "styled-components";
import { TooltipBase, TooltipDate, TooltipTemp } from "./Tooltip.jsx";

const ChartDiv = styled.div`
  margin: 5;
  max-width: calc(75vh * 2);
  max-height: 100%;
  box-shadow: 1px 1px 4px rgba(200, 200, 200, 0.4), -1px -1px 4px rgba(200, 200, 200, 0.3);
`;

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: { visibility: "hidden", top: 0, left: 0, year: 0, month: "", temp: 0 }
    };
  }

  componentWillMount() {
    const faux = this.props.connectFauxDOM("div", "chart");
    createD3HeatMap(faux, this.props.dataset, this);
  }

  render() {
    const { tooltip } = this.state;
    return (
      <ChartDiv>
        {this.props.chart}
        <TooltipBase
          visibility={tooltip.visibility}
          top={tooltip.top}
          left={tooltip.left}
        >
          <TooltipDate>
            {tooltip.month}, {tooltip.year}
          </TooltipDate>
          <TooltipTemp>{tooltip.temp}&deg;C</TooltipTemp>
        </TooltipBase>
      </ChartDiv>
    );
  }
}

export default withFauxDOM(Chart);
