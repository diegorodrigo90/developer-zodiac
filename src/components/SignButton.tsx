import styled from "styled-components";

interface SignButtonProps {
  width?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  color?: string;
  background?: string;
  colorHover?: string;
  backgroundHover?: string;
}

const SignButton = styled.button<SignButtonProps>`
  border: none;
  width: 150px;
  height: 100px;
  padding: 20px 24px;
  margin: 1rem;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.background || "#474747"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  outline: none;
  transition: background 0.8s;
  &:hover {
    color: ${(props) => props.colorHover || "#fff"};
    background: ${(props) => props.backgroundHover || "#474747"};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default SignButton;
