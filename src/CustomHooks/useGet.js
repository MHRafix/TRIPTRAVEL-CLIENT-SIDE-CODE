import { useEffect, useState } from "react";

const useGet = (url) => {
    
    const [ getData, setGetData ] = useState([]);
    const [ getting, setGetting ] = useState(false);

        useEffect(() => {
            setGetting(true);
            const link = `https://fathomless-thicket-49916.herokuapp.com/${url}`;
            fetch(link)
            .then(res => res.json())
            .then(data => {
                setGetData(data);
                setGetting(false);
            });
        }, []);



    return { getData, setGetData, getting };
};

export default useGet;