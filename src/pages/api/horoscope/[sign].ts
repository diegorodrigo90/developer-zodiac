import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import GetHoroscope from "../../../utils/getHoroscope";
import { ResponseApi, zodiacResponse } from "../../../types/Horoscope";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: "Too many requests, please try again later." },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  request: NextApiRequest,
  response: NextApiResponse<ResponseApi>
) => {
  await apiLimiter(request, response, async () => {
    const { sign } = request.query;

    if (!sign || typeof sign !== "string") {
      return response.status(400).json({ error: "Invalid zodiac sign" });
    }

    const horoscope = await GetHoroscope(sign);

    if (horoscope.error) {
      return response.status(400).json({ error: horoscope.error });
    }

    const zodiac: zodiacResponse = {
      sign: horoscope.zodiac?.sign,
      slug: horoscope.zodiac?.slug,
      initialDay: horoscope.zodiac?.initialDay,
      initialMonth: horoscope.zodiac?.initialMonth,
      finalDay: horoscope.zodiac?.finalDay,
      finalMonth: horoscope.zodiac?.finalMonth,
    };

    return response.status(200).json({
      zodiac,
      horoscope: horoscope.horoscope,
    });
  });
};
