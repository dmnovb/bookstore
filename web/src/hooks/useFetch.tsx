import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import type { Book } from "types/book";

export const useFetch = (url: string) => {
  const [apiData, setApiData] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Book[]> = await axios.get(url);
        setApiData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { apiData, error, loading };
};
