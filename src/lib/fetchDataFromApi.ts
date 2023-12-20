// const BASE_URL = "http://127.0.0.1:1337";
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const KEY = process.env.NEXT_PUBLIC_API_KEY;

const requestOptions = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
  },
};

const fetchDataFromApi = async (endpoint: string) => {
  const data = await fetch(`${BASE_URL}/api${endpoint}`, requestOptions);
  const json = await data.json();
  return json;
};

export default fetchDataFromApi;
