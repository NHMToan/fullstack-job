// src/utils/axios.ts
import axios from "axios";

export const fetcher = async (url: string) => {
  const res = await axios.get(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return res.data;
};
