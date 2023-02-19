export interface zodiacResponse {
  slug?: string;
  sign?: string;
  initialDay?: number;
  initialMonth?: string;
  finalDay?: number;
  finalMonth?: string;
}

export interface ResponseApi {
  zodiac?: zodiacResponse;
  horoscope?: string;
  error?: string;

}

export type SignsPageProps = {
  zodiac: Horoscope;
  horoscope: string;
};

export type SignsPageParams = {
  params: {
    sign: string;
  };
};

export interface ZodiacSign {
  sign: string;
  icon: any;
  slug: string;
  initialDay: number;
  initialMonth: string;
  finalDay: number;
  finalMonth: string;
  helpText: string;
  color: string;
  background: string;
  colorHover: string;
  backgroundHover: string;
}

export interface GetHoroscopeResponse {
  zodiac?: ZodiacSign;
  horoscope?: string;
  error?: string;
}

export type Parameters = {
  name: string;
  description: string;
  required: boolean;
};

export type ExampleResponse = {
  zodiac: {
    sign: string;
    slug: string;
    initialDay: number;
    initialMonth: string;
    finalDay: number;
    finalMonth: string;
  };
  horoscope: string;
};

export type Endpoint = {
  [key: string]: {
    title: string;
    description: string;
    parameters: Parameters[];
    exampleResponse: ExampleResponse;
  };
};
