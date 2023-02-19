import styled from "styled-components";

interface HelpTextProps {
  width?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  isHoverSign?: string;
  display?: boolean;
}

const HelpText = styled.div<HelpTextProps>`
  position: absolute;
  color: #000;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid black;
  padding: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: ${(props) => (props.display ? "inherit" : "none")};
`;

export default HelpText;
