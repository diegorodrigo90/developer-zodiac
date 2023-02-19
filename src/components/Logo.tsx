import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <LogoContainer>
          <FaStar />
          <span>Zodiac Signs</span>
        </LogoContainer>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
