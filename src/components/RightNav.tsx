import { useRouter } from "next/router";
import React from "react";
import StyledLink from "./StyledLink";
import Ul from "./Ul";

interface Props {
  open: boolean;
  setOpen: any;
}

const RightNav: React.FC<Props> = ({ open, setOpen }) => {
  const currentRelativePath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const router = useRouter();

  const handleHomeNavigation = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.cookie = `lastSign=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setOpen(false);
    router.push("/");
  };

  const handleCloseNavigation = () => {
    setOpen(false);
  };

  return (
    <Ul open={open}>
      <StyledLink
        currentRelativePath={currentRelativePath}
        onClick={handleHomeNavigation}
        href={"/"}
      >
        Home
      </StyledLink>
      <StyledLink
        onClick={handleCloseNavigation}
        currentRelativePath={currentRelativePath}
        href={"/about"}
      >
        About
      </StyledLink>
      <StyledLink
        onClick={handleCloseNavigation}
        currentRelativePath={currentRelativePath}
        href={"/documentation"}
      >
        Docs
      </StyledLink>
    </Ul>
  );
};

export default RightNav;
