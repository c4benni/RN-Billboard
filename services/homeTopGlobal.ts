import { NetworkResponse } from "../types/api";
import { HomeTopGlobal } from "../types/homeScreen";
import { rapidApi } from "./config";

export default async function fetchHomeTopGlobal(): Promise<
  NetworkResponse<HomeTopGlobal[]>
> {
  const response = await rapidApi(`charts/world?limit=10`);

  if (response.kind == "success") {
    let body: any[] = [];

    if (Array.isArray(response.body)) {
      for (let item of response.body) {
        body.push({
          title: item.title,
          artist: item.subtitle,
          img: {
            src: (item.images || {}).coverart || "",
            alt: `artwork of ${item.title} by ${item.subtitle}`,
          },
        });
      }
    }

    return {
      kind: "success",
      body,
    };
  } else {
    return {
      kind: "failure",
    };
  }
}
