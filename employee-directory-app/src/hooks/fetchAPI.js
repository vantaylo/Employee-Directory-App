import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())

      .then((res) => {
        console.log(res);

        setResponse(res.results);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url]);

  return [response, loading, hasError];
}
