import { GetServerSideProps } from "next";
import getSigns from "../data/signs";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import SignButton from "@/components/SignButton";
import HelpText from "@/components/HelpText";
import Header from "@/components/Header";
import IndexSignContainer from "@/components/IndexSignContainer";
import React from "react";

function IndexPage() {
  const [isHoverSign, setIsHoverSign] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (sign: string, event: any) => {
    setIsHoverSign(sign);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setIsHoverSign(null);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const zodiacSigns = getSigns();

  const handleSelectSign = (sign: string) => {
    document.cookie = `lastSign=${sign}`;
  };

  return (
    <div className="container">
      <Head>
        <title>Horoscope for developers</title>
      </Head>
      <div className="sign-content">
        <Header>Hello developer</Header>
        <p>Select your zodiac sign to see your horoscope for today.</p>
        <IndexSignContainer onMouseMove={handleMouseMove}>
          {zodiacSigns.map((sign, index) => (
            <React.Fragment key={index}>
              <Link
                href={`/${sign.slug}`}
                onMouseEnter={(event) => handleMouseEnter(sign.slug, event)}
                onMouseLeave={handleMouseLeave}
              >
                <SignButton
                  onClick={() => handleSelectSign(sign.slug)}
                  color={sign.color}
                  background={sign.background}
                  colorHover={sign.colorHover}
                  backgroundHover={sign.backgroundHover}
                >
                  <div className="icon">
                    <sign.icon />
                  </div>
                  <div className="name">{sign.sign}</div>
                </SignButton>
              </Link>
              {isHoverSign === sign.slug && (
                <Link href={`/${sign.slug}`}>
                  <HelpText
                    style={{ left: mousePosition.x, top: mousePosition.y }}
                    display={true}
                    onMouseEnter={(event) => handleMouseEnter(sign.slug, event)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {sign.helpText}
                  </HelpText>
                </Link>
              )}
            </React.Fragment>
          ))}
        </IndexSignContainer>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  const lastSign = req.cookies.lastSign || null;
  if (lastSign) {
    res.setHeader("Location", `/${lastSign}`);
    res.statusCode = 302;
    res.end();
  }

  return {
    props: {
      lastSign,
    },
  };
};

export default IndexPage;
