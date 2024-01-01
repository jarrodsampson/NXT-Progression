import { Superstar, DataReturn } from "../types/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const ApiService = {
  fetchSuperstars: async (
    limit: number,
    offset: number,
    searchType: string = "NXT",
    searchOption?: string
  ): Promise<Superstar[]> => {
    let urlString = `${BASE_URL}/superstars?limit=${limit}&offset=${offset}`;
    if (searchType) {
      urlString += `&type=${searchType}`;
    }

    if (searchOption) {
      urlString += `&search=${searchOption}`;
    }

    try {
      const response = await fetch(urlString);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: DataReturn = await response.json();
      return data.list;
    } catch (error) {
      console.error("Error fetching superstar data:", error);
      throw error;
    }
  },
  fetchSuperstar: async (id: string): Promise<Superstar> => {
    try {
      const response = await fetch(`${BASE_URL}/superstars/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Superstar = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching superstar data:", error);
      throw error;
    }
  },
};
