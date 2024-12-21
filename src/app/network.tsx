import { BACKEND_API, TEMP_TOKEN } from "./data";

interface ApiCallerParams {
  method: string;
  path: string;
  body?: any;
  additionalHeaders?: Record<string, string>;
}

export const apiCaller = ({
  method,
  path,
  body = null,
  additionalHeaders = {},
}: ApiCallerParams) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${TEMP_TOKEN as string}`);

  // Add any additional headers
  for (const key in additionalHeaders) {
    if (additionalHeaders.hasOwnProperty(key)) {
      myHeaders.append(key, additionalHeaders[key]);
    }
  }

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: body ? JSON.stringify(body) : null,
  };

  return fetch(`${BACKEND_API as string}${path}`, requestOptions).then(
    async (response) => {
      if (response.ok) {
        return response.json();
      }
      throw await response.json();
    }
  );
};
