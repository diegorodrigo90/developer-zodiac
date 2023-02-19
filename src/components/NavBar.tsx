import { useRouter } from "next/router";
import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Nav from "./Nav";
import StyledLink from "./StyledLink";

const Navbar: React.FC = () => {
  const router = useRouter();

  const currentRelativePath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const handleHomeNavigation = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.cookie = `lastSign=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    router.push("/");
  };

  return (
    <Nav>
      <StyledLink
        currentRelativePath={currentRelativePath}
        onClick={handleHomeNavigation}
        href={"/"}
      >

        <Logo />
      </StyledLink>
      <Burger />
    </Nav>
  );
};

export default Navbar;
