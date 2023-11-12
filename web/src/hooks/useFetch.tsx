import { useState, useEffect } from "react";
import axios from "axios";
import { IBook } from "types/book";

export const useFetch = (url: string) => {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => setData(response.data));
  }, [url]);

  return data;
};
