import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //  const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setcategorias] = useState( ['One Punch']);

  /*  const handleAdd = () => {
        //setcategorias( [...categorias, 'HunterXHunter'] );
       // setcategorias( ['HunterXHunter',...categorias] );
       setcategorias( cats => [ ...cats, 'HunterXHunter'] );
    }*/

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={ setcategorias } />

        <hr />


        <ol>
            {
                categorias.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category }
                    />
                ))
            }
        </ol>
        </>
    );
};
