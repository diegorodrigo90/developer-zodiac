import Link from "next/link";
import styled from "styled-components";

interface StyledLinkProps {
  currentRelativePath: string;
  href: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 0 10px;
  color: ${(props) =>
    props.currentRelativePath === props.href ? "#666" : "#007bff"};
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 10px;
    color: ${(props) =>
      props.currentRelativePath === props.href ? "#CCC" : "#fff"};
    &:hover {
      color: #fff;
    }
  }
`;

export default StyledLink;
