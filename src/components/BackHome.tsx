import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const BackHomeButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #3d8b3d;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

type BackHomeProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const BackHome = ({ onClick, children }: BackHomeProps) => {
  return (
    <BackHomeButton onClick={onClick}>
      <FaArrowLeft />
      {children}
    </BackHomeButton>
  );
};

export default BackHome;
