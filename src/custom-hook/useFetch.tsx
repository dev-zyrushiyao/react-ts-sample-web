import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Failed to fetch data");

        return res.json();
      })
      .then((data) => {
        setTimeout(async () => {
          await setData(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}
