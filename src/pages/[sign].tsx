import { useRouter } from "next/router";
import GetHoroscope from "@/utils/getHoroscope";
import getSigns from "../data/signs";
import { useEffect } from "react";
import Head from "next/head";
import { SignsPageProps, SignsPageParams } from "../types/Horoscope";
import Header from "@/components/Header";
import SignContainer from "@/components/SignContainer";
import SignIcon from "@/components/SignIcon";
import SignName from "@/components/SignName";
import SignDate from "@/components/SignDate";
import SignDescription from "@/components/SignDescription";
import SignText from "@/components/SignText";
import BackHome from "@/components/BackHome";
import Container from "@/components/Container";
import ErrorMessage from "@/components/ErrorMessage";

const zodiacSigns = getSigns();

const SignPage = ({ zodiac, horoscope }: SignsPageProps) => {
  // set or update cookie
  useEffect(() => {
    document.cookie = `lastSign=${zodiac.slug}`;
  }, [zodiac.slug]);

  const router = useRouter();
  const handleHomeReturn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.cookie = `lastSign=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    router.push("/");
  };

  return (
    <div className="container">
      <Head>
        <title>{zodiac.sign} | Horoscope for developers</title>
      </Head>
      {horoscope ? (
        <div className="sign-content">
          <Header>Horoscope of the Day for a {zodiac.sign} developer</Header>
          <SignContainer>
            <>
              {zodiacSigns.map((zodiacSign) => {
                if (zodiacSign.slug === zodiac.slug) {
                  return (
                    <div className="sign-icon" key={zodiacSign.slug}>
                      <SignIcon
                        color={zodiacSign.color}
                        background={zodiacSign.background}
                      >
                        <zodiacSign.icon />
                      </SignIcon>
                    </div>
                  );
                }
              })}
              <SignDate>
                {zodiac.initialMonth} {zodiac.initialDay} - {zodiac.finalMonth}{" "}
                {zodiac.finalDay}
              </SignDate>
              <SignName>{zodiac.sign}</SignName>
              {zodiacSigns.map((zodiacSign) => {
                if (zodiacSign.slug === zodiac.slug) {
                  return (
                    <div key={zodiacSign.slug}>
                      <SignDescription
                        textColor={zodiacSign.color}
                        backgroundColor={zodiacSign.background}
                      >
                        {zodiacSign.helpText}
                      </SignDescription>
                    </div>
                  );
                }
              })}
              <SignText>
                <p>{horoscope.charAt(0).toUpperCase() + horoscope.slice(1)}</p>
              </SignText>
            </>
          </SignContainer>

        </div>
      ) : (
        <Container>
          <ErrorMessage>
            Error on get horoscope, ChatGPT could be busy, try refresh page.
          </ErrorMessage>
        </Container>
      )}
      <Container align="center">
        {zodiacSigns.map((zodiacSign) => {
          if (zodiacSign.slug === zodiac.slug) {
            return (
              <div className="sign-icon" key={zodiacSign.slug}>
                <BackHome onClick={handleHomeReturn}>
                  Select another sign
                </BackHome>
              </div>
            );
          }
        })}



      </Container>
    </div>
  );
};

export default SignPage;

export async function getStaticPaths() {
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  const paths = signs.map((sign) => ({ params: { sign } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: SignsPageParams) {
  const sign = params.sign;

  const horoscope = await GetHoroscope(sign);

  return {
    props: {
      zodiac: {
        sign: horoscope.zodiac?.sign,
        slug: horoscope.zodiac?.slug,
        initialDay: horoscope.zodiac?.initialDay,
        initialMonth: horoscope.zodiac?.initialMonth,
        finalDay: horoscope.zodiac?.finalDay,
        finalMonth: horoscope.zodiac?.finalMonth,
      },
      horoscope: horoscope.horoscope,
    },
    revalidate: 10,
  };
}
