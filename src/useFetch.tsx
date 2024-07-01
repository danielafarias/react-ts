import React from 'react'

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit): FetchState<T> {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    const controller = new AbortController();
    const signal = controller.signal;

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
              const response = await fetch(url, { signal, ...options });
              const json: T = await response.json();
    
              setData(json);
            } catch (error) {
                if (typeof error === "string") {
                    setError(error);
                } else if (error instanceof Error) {
                    setError(error.message);
                }
            }

            setLoading(false);
        };

        fetchData();
    }, [url, options]);

  return {
    data,
    loading,
    error
  };
}

export default useFetch;
