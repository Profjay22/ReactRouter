import React from 'react'
import { Link, useParams} from "react-router-dom"
 
function Description({description, addMovie}) {
  const {id} = useParams();
  return (
    <div>
        <h2>{<Link to="/"> Home </Link>}</h2>
 
        {
          (
          addMovie.filter((movie) => movie.id === parseInt(id)).map((movie, index)=>(
          
          <div key={index}>

               <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <h3>Description : {movie.description}</h3>
         
          </div>
            
            )))        
            
            }

       
    </div>
  )
}

export default Description