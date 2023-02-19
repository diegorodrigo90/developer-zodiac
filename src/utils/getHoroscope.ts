import { Configuration, OpenAIApi } from "openai";
import NodeCache from "node-cache";
import getSigns from "../data/signs";
import { GetHoroscopeResponse } from "@/types/Horoscope";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const cache = new NodeCache({ stdTTL: 60 * 60 * 24 }); // Cache horoscopes for 24 hours

const GetHoroscope = async (sign: string): Promise<GetHoroscopeResponse> => {
  if (!sign || typeof sign !== "string") {
    return { error: "Invalid zodiac sign" };
  }

  if (cache.get("lastClear") !== new Date().getDate()) {
    // clear the cache if cache is from yesterday
    cache.flushAll();
    cache.set("lastClear", new Date().getDate());
  }

  // Check if the horoscope for this sign has already been generated today
  const cachedHoroscope = cache.get(sign);

  if (cachedHoroscope) {
    return cachedHoroscope;
  }

  const horoscope = getSigns().find((h) => h.slug === sign);

  if (!horoscope) {
    return { error: "Invalid zodiac sign" };
  }

  try {
    const dayOfWeek = new Date().toLocaleString("en-us", { weekday: "long" });
    const horoscopePrompt = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Based on horoscope of day for ${sign} for me as developer. make sure to answer as a joke. I will have a lot of bugs? Will I break the production environment? The tests will pass?. make sure to all answer make sense with each other. Make a least four paragraphs. On deploys also consider the day of week , is a good ideia to deploys today, in a ${dayOfWeek}? please not recommend deploys in weekend. Do not repeat the question in answer. Answer as a horoscope specialist would say.`,
      max_tokens: 3000,
    });

    const horoscopeOfDay =
      horoscopePrompt.data.choices[0].text?.trim() ||
      "Was not able to generate a horoscope";

    cache.set(sign, { sign, horoscope });

    return {
      zodiac: horoscope,
      horoscope: horoscopeOfDay,
    };
  } catch (error) {
    console.error(error);
    return { error: "Was not able to generate a horoscope" };
  }
};

export default GetHoroscope;
