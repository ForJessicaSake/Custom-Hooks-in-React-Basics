import {useState, useEffect} from 'react';

const UseFetch =(url)=>{

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
        if(!res.ok){
            throw new error('could not fetch resource')
        }
        return res.json()
        })
        .then((data)=>{
            setData(data)
            setError(null)
            setLoading(false)
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
        })
    })
return {data, loading, error}

}

export default UseFetch