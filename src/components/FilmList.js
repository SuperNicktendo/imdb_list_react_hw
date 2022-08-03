import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map( film => {
        return(
            <Film name={film.name} key={film.id} url={film.url}>{film.name}</Film>
        )
    });

    return (
        <>
        <p>{filmNodes}</p>
        <hr></hr>
        </>
    )
    
    }
    

export default FilmList;