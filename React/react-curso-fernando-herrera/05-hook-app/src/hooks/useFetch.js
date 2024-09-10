import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async() => {
        
        setState({
            ...state,
            isLoading: true
        })


        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        }catch(e){
            setState({
                ...state,
                hasError: true
            })
        }

        
        
    }

    useEffect(() => {
       getFetch()
    }, [url]); //* Se ejecutara el use effect cada vez que la url cambie.
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}

export default useFetch