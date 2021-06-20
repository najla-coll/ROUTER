import React from 'react'
import { Link } from 'react-router-dom'





const Detail = ({match}) => {
    const posts =[
        {
            id:Math.random(),
            des:"Lorsque les adolescents Harry et June fuient leurs familles répressives pour être ensemble, ils sont déraillés par une découverte extraordinaire",
            video:<iframe width="640" height="360" src="https://www.youtube.com/embed/zQ0mtlwoWFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },

       {    
          id:Math.random(),
          des:"La cinquième saison sera la dernière de la série, a annoncé le créateur, Alex Pina cet été. Au programme  10 épisodes plus fous les uns que les autres avec.",
          video:<iframe width="640" height="360" src="https://www.youtube.com/embed/_yJxbWKN3zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
     
      {
          id:Math.random(),
          des:"C est le film réalisé par une femme qui a fait le meilleur démarrage de l histoire du cinéma devant «50 shades of Grey» de Sam Taylor-Wood.",
          video:<iframe width="640" height="360" src="https://www.youtube.com/embed/ECTqqXBceG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
          id:Math.random(),
          des:"Christopher Nolan nous a livré, avec Batman Begins (2005), The Dark Knight (2008) et The Dark Knight Rises (2012), une trilogie cinématographique d’envergure",
          video:<iframe width="640" height="360" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
      ]
      const item = posts.find((el) => el.id = match.params.id)  
      return (

            <div className='description'>
            <h2>{item.des}</h2>
            {item.video}
            </div>
        
    
    )
}

export default Detail
