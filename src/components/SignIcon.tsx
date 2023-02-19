import styled from "styled-components";

interface SignIconProps {
  color?: string;
  background?: string;
}

const SignIcon = styled.div<SignIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  margin: 1rem auto;
  padding: 2rem auto;
  border-radius: 50%;
  margin-top: 20px;
  font-size: 3rem;
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.background || "#474747"};
`;

export default SignIcon;
