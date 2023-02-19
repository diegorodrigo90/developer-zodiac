import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

interface Theme extends GlobalStyleComponent {
  mode: "light" | "dark";
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  backgroundColor: string;
}
