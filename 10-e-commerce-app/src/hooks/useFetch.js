import { useEffect } from "react";
import { useState } from "react";

export function useFetch(fetchFunction, params) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchFunction(params);
                setData(result);
            }
            catch(err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchFunction, params]);

    return {data, loading, error};
}