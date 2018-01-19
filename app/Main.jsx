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
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  componentWillMount() {
    const component = this;
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json",
      true
    );
    request.send();
    request.onload = function() {
      const data = JSON.parse(request.responseText);
      component.setState({ data: data });
    };
  }

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
        <Chart dataset={this.state.data} />
        <p>{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default Main;
