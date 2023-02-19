import Pre from "@/components/Pre";
import SectionTitle from "@/components/SectionTitle";
import Table from "@/components/Table";
import TableCell from "@/components/TableCell";
import TableHeader from "@/components/TableHeader";
import Title from "@/components/Title";
import { Endpoint } from "@/types/Horoscope";
import Head from "next/head";
import React from "react";

const getDocumentation = (endpoints: Endpoint) => {
  const documentation: Endpoint = {};
  for (const [endpoint, data] of Object.entries(endpoints)) {
    documentation[endpoint] = {
      title: data.title,
      description: data.description,
      parameters: data.parameters,
      exampleResponse: data.exampleResponse,
    };
  }
  return documentation;
};

const endpoints: Endpoint = {
  "/api/horoscope/[sign]": {
    title: "Horoscope",
    description: "Returns the horoscope for a given zodiac sign.",
    parameters: [
      {
        name: "sign",
        description: "The zodiac sign.",
        required: true,
      },
    ],
    exampleResponse: {
      zodiac: {
        sign: "Leo",
        slug: "leo",
        initialDay: 23,
        initialMonth: "July",
        finalDay: 22,
        finalMonth: "August",
      },
      horoscope:
        "Yes, you will have a lot of bugs. You will also break the production environment. The tests will pass, but you will need to be careful. Deploying on a Sunday is not a good idea.",
    },
  },
};

const documentation: Endpoint = getDocumentation(endpoints);

const Documentation = () => {
  return (
    <>
      <Head>
        <title>Api Documentation | Horoscope for developers</title>
      </Head>
      <Title>API Documentation</Title>
      {Object.entries(documentation).map(([endpoint, data]) => (
        <>
          <SectionTitle>{endpoint}</SectionTitle>
          <p>{data.description}</p>
          <Table>
            <thead>
              <tr>
                <TableHeader>Name</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Required</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data.parameters.map((param) => (
                <tr key={param.name}>
                  <TableCell>{param.name}</TableCell>
                  <TableCell>{param.description}</TableCell>
                  <TableCell>{param.required ? "Yes" : "No"}</TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>
            Example response:
            <Pre>{JSON.stringify(data.exampleResponse, null, 2)}</Pre>
          </p>
        </>
      ))}
    </>
  );
};

export default Documentation;
