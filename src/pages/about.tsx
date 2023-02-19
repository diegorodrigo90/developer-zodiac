import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Horoscope for Developers</title>
      </Head>
      <h1>About Horoscope for Developers</h1>
      <p>
        This a project is only to study and learn next.js, it generates
        personalized horoscopes for developers using ChatGPT, an advanced
        natural language processing model.
      </p>
      <p>
        As a developer, you can simply choose and ChatGPT will generate a custom
        horoscope that provides insights into your day work will be.
      </p>
      <p>
        This project was built using Next.js, TypeScript, and styled-components,
        and is fully open source on{" "}
        <Link
          href="https://github.com/diegorodrigo90/developer-zodiac"
          target={"_blank"}
        >
          GitHub
        </Link>
        . Feel free to contribute or use the code as a starting point for your
        own project.
      </p>
      <p>
        To learn more about me, visit my{" "}
        <Link href="https://diegorodrigo.com" target={"_blank"}>
          personal website
        </Link>
        .
      </p>
      <p>
        To learn more about ChatGPT, visit the{" "}
        <Link href="https://openai.com/api/" target={"_blank"}>
          OpenAI API documentation
        </Link>
        .
      </p>
    </>
  );
};

export default AboutPage;
