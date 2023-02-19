import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/theme";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Link from "next/link";
import GlobalStyles from "@/globalStyles";
import Navbar from "@/components/NavBar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  type Theme = "light" | "dark";

  const [theme, setTheme] = useState(lightTheme);

  // TODO: add theme toggle button, and theme light/dark.
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </Container>
      <Footer>
        <p>This app use ChatGPT API to generate horoscopes.</p>
        <p>
          Made with ❤️ by{" "}
          <Link
            href="https://diegorodrigo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diego Rodrigo
          </Link>
        </p>
      </Footer>
    </ThemeProvider>
  );
}
