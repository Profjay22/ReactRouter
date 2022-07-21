
import React from "react";
import "../App.css"
import { Link, useNavigate } from "react-router-dom";



const MovieCard = ({Movie}) => {
  let  navigate = useNavigate()
   
    return (
    <div className="card" onClick={(e) => {
        
        e.preventDefault();
        navigate(`/description/${Movie.id}`)}}>
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
        <div className="container">
            <h4><b>Title: {Movie.title} </b></h4>
            <h4><b>Description: {Movie.description} </b></h4>
            <h4><b> rate : {Movie.rating} </b></h4>
            <a href={Movie.posterURL}>Movie url</a> <br></br>
            {/* <Link to = "/description" >  Watch Trailer </Link>  */}
             
        </div>
    </div>
    )
        
    
}
export default MovieCard
