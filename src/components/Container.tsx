import styled from "styled-components";

interface ContainerProps {
  display?: "flex" | "block";
  direction?: "row" | "column";
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
}

const Container = styled.div`
  display: ${(props: ContainerProps) =>
    props.display ? props.display : "flex"};
  align-items: ${(props: ContainerProps) =>
    props.align ? props.align : "center"};
  flex-direction: ${(props: ContainerProps) =>
    props.direction ? props.direction : "column"};
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 30px;
  max-width: 50em;
  padding-left: 15px;
  padding-right: 15px;
`;

export default Container;
