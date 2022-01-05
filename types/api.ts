export type ResponseKind = "success" | "failure";

export type ApiOptions = "GET" | "POST";

export type ValidApiContentType =
  | "multipart/form-data; boundary=---011000010111000001101001"
  | "application/json";

export type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export type ApiConfig = {
  method: ApiOptions;
  headers: {
    "Content-type": ValidApiContentType;
  };
};
