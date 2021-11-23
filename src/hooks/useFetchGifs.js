import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

     /*const [images, setimages] = useState([])

    useEffect( ()=> {
        getGifs( category )
        .then( setimages);
    }, [ category ])*/

    useEffect( () => {

        getGifs( category )
        .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                })
           
        });

    }, [category])


    return state;
}