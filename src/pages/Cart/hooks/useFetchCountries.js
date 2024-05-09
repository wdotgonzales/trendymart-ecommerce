import { useState, useEffect } from 'react';

const useFetchCountries = (url, apiKey) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const headers = new Headers();
                headers.append("X-CSCAPI-KEY", apiKey);

                const requestOptions = {
                    method: 'GET',
                    headers: headers,
                    redirect: 'follow'
                };

                const response = await fetch(url, requestOptions);
                const result = await response.text();

                if (response.ok) {
                    setData(JSON.parse(result)); // Assuming JSON response
                } else {
                    throw new Error(`API request failed with status ${response.status}`);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(true);
            }
        };

        fetchData();

    }, [url, apiKey])

    return { data, loading, error }

}

export default useFetchCountries;