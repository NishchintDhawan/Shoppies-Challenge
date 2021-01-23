import React from 'react';

const MovieBox = (props) => {
    const results = props.results;

    //put the map function to return the list of items
    return (
    <div>
        {results.map( value => (
            <p>{value.Title}</p>
        ))}
    </div>
    );
}


export default MovieBox;