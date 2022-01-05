import store from "../redux/store";
import { NetworkResponse } from "../types/api";
import {
  CountryCode,
  HomeTopGlobal,
  HomeTrendingIn,
} from "../types/homeScreen";
import { rapidApi } from "./config";

import { splitArtists } from "../utils/utils";

const countryCodes: CountryCode[] = [
  "US",
  "GB",
  "MX",
  "DE",
  "IE",
  "ES",
  "IT",
  "AU",
  "FR",
  "CA",
];

export default async function fetchHomeTrendingIn(): Promise<
  NetworkResponse<HomeTrendingIn[]>
> {
  const result: HomeTrendingIn[] = [];

  for (const code of countryCodes) {
    const response = await rapidApi(
      `charts/country?country_code=${code}&limit=5`
    );

    if (response.kind == "success") {
      const countries = store.getState().countrySchema.result;

      const body: HomeTrendingIn = {
        images: [],
        featuring: "",
        name: countries[code]?.name || "",
      };

      // const artists = [];

      // const images = [];

      if (Array.isArray(response.body)) {
        for (let i = 0; i < response.body.length; i++) {
          const item = response.body[i];

          if (typeof item.images == "object") {
            body.images.push(
              item.images.coverarthq ||
                item.images.coverart ||
                item.images.background
            );
          }

          // parse artists to array then parse body.featuring
          if (typeof item.subtitle == "string") {
            const splited = splitArtists(item.subtitle);

            if (!body.featuring) {
              body.featuring = "Featuring ";
            }

            splited.forEach((name) => {
              body.featuring += `${name}, `;
            });
          }
        }

        if (body.featuring) {
          body.featuring += "and more...";
        }
      }

      result.push(body);
    }
  }

  if (!result.length) {
    return {
      kind: "failure",
    };
  }

  return {
    kind: "success",
    body: result,
  };
}
