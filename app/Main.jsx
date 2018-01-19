import React from "react";
import styled from "styled-components";
import Chart from "./Chart.jsx";

const PageTitle = styled.h1`
  text-align: center;
  font-family: Helvetica, sans-serif;
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-family: Arial, sans-serif;
`;

class Main extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>Heat Map using D3</PageTitle>
        <PageSubtitle>
          Built for freeCodeCamp.com Data Visualization Challenge using D3 and React{" "}
          <br /> by{" "}
          <a href="http://github.com/aaronRhodebeck" target="_blank">
            Aaron Rhodebeck
          </a>
        </PageSubtitle>
        <Chart />
      </div>
    );
  }
}

export default Main;
