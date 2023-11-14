import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData ] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);

            try {
                const res = await fetch(url);

                if(!res.ok){
                    setError('Failed to fetch data');
                    alert('failed to fetch');
                }
                const result = await res.json();
                setData(result.data);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);

            }
        }

        fetchData();
    }, [url])

    return {data, error, isLoading};
}

export default useFetch;