import styled from "styled-components";

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  // center
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background-color: #3d8b3d;
  }
`;

export default Button;
