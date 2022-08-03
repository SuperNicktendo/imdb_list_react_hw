import React from 'react';

const Film = ({name, url}) => {

    return(
        <>
            <a href={url}>
            <h4>{name}</h4>
            </a>
        
        </>
    )
}

export default Film;