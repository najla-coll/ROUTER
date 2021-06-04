import React from 'react'
import {Link} from 'react-router-dom'
import Filter from './Filter'
import AddMovie from './AddMovie'

const Home = () => {
    return (
        <div >
         
             <nav>
                 <ul>
                      <div className="navbar">
                     <Link to='Home'>
                     <li>Home</li>
                     </Link>
                     <Link to='/movieListe'>
                     <li>Movie</li>
                     </Link>
                     </div>
                     </ul>
                    
                     </nav>   
                     <div className='navv' >
                     <Filter />
                     </div>
                     <div className="nav">
                     <AddMovie />
                     </div>
                   
                    
               
            
            
        </div>
    )
}

export default Home
