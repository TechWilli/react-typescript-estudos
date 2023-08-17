import { useEffect, useRef, useState } from "react";

type UseFetchReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T,>(
  url: RequestInfo | URL,
  options?: RequestInit
): UseFetchReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  // para pegar as mudanças de options, mas não causar novo render no hook, pois queremos isso apenas ao mudar a URL
  optionsRef.current = options;

  useEffect(() => {
    /* controler para interromper o fetch quando necessário, neste caso usando para quando o component for desmontado
    já qur usando o strict mode do react para desenovlver, ele monta e desmonta rapidamente */
    const requestController = new AbortController();
    const { signal } = requestController;

    const fetchData = async () => {
      setLoading(true);
      setData(null);

      try {
        const response = await fetch(url, {
          signal, // passando o objeto associado ao controller para o fetch
          ...optionsRef.current,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // quando o component desmonta, a função abort() vai setar a prop aborted para true
        if (!signal.aborted) {
          const json = (await response.json()) as T;
          console.log(json);
          setData(json);
        }
      } catch (error) {
        if (!signal.aborted && error instanceof Error) {
          setError(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => requestController.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
