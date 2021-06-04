import React ,{useState} from  'react';
import MovisList from './MovisList';
import {Data}  from './Data';
import {Link} from 'react-router-dom'



const MovieCard = () => {
	const [movies, setMovies] = useState(Data);
	
	return (
		

   <>
       <div className ='list'>
		  	{movies.map((el) => (
				<Link to={`/movieliste/${el.id}`} >
				 <MovisList  el={el}  key={el.id}  />
				 </Link> 
				))
       
		     }
        </div>
      </>
		
	)
}

export default MovieCard


