import {React} from "react"
import MovieCard from "./MovieCard"



const MovieList = ({addMovie, filtered}) => {
  return (
    filtered.map((Movie)=> {
      
        return (
        
        
         
        <MovieCard Movie={Movie} key={Movie.id}/>
       
        
        )
       
    })  
    
  )   

}

export default MovieList






























// let movieList = [{
//     title: "Introduction to Javascript",
//     description: "Learn JavaScript",
//     posterURL: `www.movieapp.${list.title.toLowerCase()}.com`,
//     rating: 5

// },
// {
//     title: "Introduction to Node",
//     description: "Learn Node",
//     posterURL: `www.movieapp.${list.title.toLowerCase()}.com`,
//     rating: 4

// },
// {
//     title: "Introduction to React",
//     description: "Learn React",
//     posterURL: `www.movieapp.${list.title.toLowerCase()}.com`,
//     rating: 3

// }


// ]

// export default movieList;