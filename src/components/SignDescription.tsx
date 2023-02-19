import styled from "styled-components";

interface SignDescriptionProps {
  backgroundColor?: string;
  textColor?: string;
}

const SignDescriptionDiv = styled.div<SignDescriptionProps>`
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem auto;
  color: ${(props) => props.textColor ?? "#FFF"};
  width: 100%;
  background-color: ${(props) => props.backgroundColor ?? "#666"};
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    max-width: 70vw;
  }
`;

const CenteredSignDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignDescription = ({ children, ...props }: React.PropsWithChildren<SignDescriptionProps>) => {
  return (
    <CenteredSignDescription>
      <SignDescriptionDiv {...props}>
        {children}
      </SignDescriptionDiv>
    </CenteredSignDescription>
  )
}

export default SignDescription;
