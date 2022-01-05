import {
  Countries,
  HomeTopGlobal,
  HomeTrendingIn as HomeTrendingInType,
} from "./homeScreen";

export type StoreState = {
  loading: boolean;
  error: boolean;
};

export interface TopGlobalState extends StoreState {
  result: HomeTopGlobal[];
}

export interface CountrySchemaState extends StoreState {
  result: Countries;
}

export interface HomeTrendingIn extends StoreState {
  result: HomeTrendingInType[];
}
