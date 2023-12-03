import { useState, useEffect } from 'react';

const useFetch = <T,>(url: string, initialValue?: T): { loading: boolean; data: T | undefined; error: Error | null } => {
  const [data, setData] = useState<T | undefined>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); 

  useEffect(() => {
    const apiKey = String(process.env.REACT_APP_API_KEY)
    const apiHost = String(process.env.REACT_APP_API_HOST)

    const fetchData = async () => {
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts) {
        try {
          setLoading(true);
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': apiHost
            }
          };
          const response = await fetch(url, options);
          
          if (response.status === 504) {
            attempts++;
            console.log(`Attempt ${attempts} failed with status 504. Retrying...`);
            continue; 
          }

          if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
            const jsonData = await response.json();   
            setData(jsonData);
            break; 
          } else {
            throw new Error(`Error: ${response.status}`);
          }
        } catch (err: any) {
          console.error('Fetching error:', err);
          setError(err);
        } finally {
          setLoading(false);
          break; 
        }
      }

      if (attempts === maxAttempts) {
        setError(new Error('Max retry attempts reached.'));
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
