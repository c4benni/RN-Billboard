import { ApiConfig, NetworkResponse } from "../types/api";

const defaultConfig = {
  method: "GET",
  headers: { "Content-type": "application/json" },
};

export const rapidApi = async (
  url: string,
  config?: ApiConfig
): Promise<NetworkResponse<any>> => {
  const getConfig = {
    ...defaultConfig,
    ...config,
  };

  const { method, headers } = getConfig;

  const response = await fetch(
    `https://shazam-core.p.rapidapi.com/v1/${url.replace(/^\//, "")}`,
    {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": headers["Content-type"],
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
        "x-rapidapi-key": "2ec225ceb7msh394f5a92dc588a1p19daffjsnacc52cc3f930",
      },
    }
  );

  if (response.ok) {
    const json = await response.json();
    return {
      kind: "success",
      body: json,
    };
  } else {
    return {
      kind: "failure",
    };
  }
};
