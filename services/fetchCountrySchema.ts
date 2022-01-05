import { NetworkResponse } from "../types/api";
import {
  CountryCode,
  City,
  GenreName,
  Genre,
  Countries,
} from "../types/homeScreen";
import { rapidApi } from "./config";

export default async function fetchCountrySchema(): Promise<
  NetworkResponse<Countries>
> {
  const response = await rapidApi(`frame/cities`);

  let body: Countries = {};

  if (response.kind == "success") {
    if (Array.isArray(response.body)) {
      for (let item of response.body) {
        const cities = [];
        const genres = [];

        // get cities
        if (Array.isArray(item.cities)) {
          for (const city of item.cities) {
            cities.push({
              id: city.id as string,
              name: city.name as string,
              countryCode: city.country_code as CountryCode,
            } as City);
          }
        }

        // get genres
        if (Array.isArray(item.genres)) {
          for (const genre of item.genres) {
            genres.push({
              name: genre.name as GenreName,
              countryCode: genre.country_code as CountryCode,
              count: genre.count as number,
            } as Genre);
          }
        }

        body[item.code as CountryCode] = {
          code: item.code as CountryCode,
          name: item.name as string,
          cities,
          genres,
        };
      }

      body.length = Object.keys(body).length;
    }

    return {
      kind: "success",
      body,
    };
  } else {
    return {
      kind: "failure",
      body,
    };
  }
}
