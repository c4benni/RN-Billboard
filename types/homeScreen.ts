import { Img } from "./global";

export type GenreName =
  | "POP"
  | "HIP_HOP_RAP"
  | "DANCE"
  | "ELECTRONIC"
  | "SOUL_RNB"
  | "ALTERNATIVE"
  | "ROCK"
  | "LATIN"
  | "FILM_TV"
  | "COUNTRY"
  | "AFRO_BEATS"
  | "WORLDWIDE"
  | "REGGAE_DANCE_HALL"
  | "HOUSE"
  | "K_POP"
  | "FRENCH_POP"
  | "SINGER_SONGWRITER"
  | "REG_MEXICO";

export type CountryCode =
  | "DE"
  | "PT"
  | "DK"
  | "HR"
  | "UA"
  | "HU"
  | "MA"
  | "ID"
  | "IE"
  | "US"
  | "EG"
  | "IL"
  | "UY"
  | "IN"
  | "ZA"
  | "IT"
  | "MX"
  | "MY"
  | "ES"
  | "VE"
  | "AR"
  | "AT"
  | "AU"
  | "RO"
  | "NL"
  | "NO"
  | "RU"
  | "BE"
  | "FI"
  | "BG"
  | "JP"
  | "FR"
  | "NZ"
  | "SA"
  | "BR"
  | "SE"
  | "SG"
  | "BY"
  | "GB"
  | "CA"
  | "CH"
  | "KR"
  | "CL"
  | "GR"
  | "CN"
  | "CO"
  | "KZ"
  | "CR"
  | "TH"
  | "PE"
  | "CZ"
  | "PL"
  | "TR";

export type SongType = {
  img: Img;
  title: string;
  artist: string;
};

export type HomeTopGlobal = SongType;

export type CountryChart = {
  name: string;
  songs: SongType[];
};

export type HomeTrendingIn = {
  images: string[];
  featuring: string;
  name: string;
};

export type City = {
  id: string;
  name: string;
  countryCode: CountryCode;
};

export type Genre = {
  name: GenreName;
  count: number;
  countryCode: CountryCode;
};

export type CountrySchema = {
  code: CountryCode;
  name: string;
  cities: City[] | [];
  genres: Genre[] | [];
};

export type DynamicCountries = {
  [countryCode in CountryCode]?: CountrySchema;
};

export interface Countries extends DynamicCountries {
  length?: number;
}
