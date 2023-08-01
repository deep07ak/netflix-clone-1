import React from 'react';
import { Link } from 'react-router-dom';
function Genre(props) {
    const{genre}=props;
     
    return (
        
           <Link className='badge badge-warning py-2 px-3 mx-2' to={genre.name} >
           {genre.name}
           
           </Link> 
        
    );
}

export default Genre;