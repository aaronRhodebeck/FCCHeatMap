import styled from "styled-components";

export const TooltipBase = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  color: rgb(225, 225, 225);
  max-width: 15%;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  border-radius: 10px;
  visibility: ${props => props.visibility};
  top: ${props => props.top - 35 + "px"};
  left: ${props => props.left + 20 + "px"};
  text-align: center;
`;

export const TooltipDate = styled.h3`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2.4vh;
`;

export const TooltipTemp = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 2.1vh;
`;
