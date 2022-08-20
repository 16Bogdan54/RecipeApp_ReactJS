import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
