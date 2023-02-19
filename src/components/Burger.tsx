import React, { useState } from "react";
import RightNav from "./RightNav";
import StyledBurger from "./StyledBurger";

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
