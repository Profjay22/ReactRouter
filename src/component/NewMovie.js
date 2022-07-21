import React from "react"
const NewMovie = ({setTitle, setDescription, setAddMovie, addMovie, title, description,setStatus, setID, setTrailer, trailer}) => {

    const getTitle = (e) => {
        setTitle(e.target.value)
    }

    const getDescription = (e) =>{
        setDescription(e.target.value)
    }

    const getTrailer =(e) => {
        setTrailer(e.target.value)
    }
    
    const getStatus= (e) => {
        setStatus(e.target.value)
    }

    const getID = (e) => {
        setID(e.target.value)
    }


    const createMovie = (e) => {
        e.preventDefault();
        setAddMovie([
            ...addMovie,
            {
                title,
                trailer,
                 description,
                 rating: (Math.floor(Math.random()*5)+1),
                 posterURL: `www.movieapp.${title}.com`,
                 id: (Math.floor(Math.random() * 1000))
            }
        ])
        
        setDescription("")
        setTrailer("")
    }
    return (
        <form>
        <div class="filter">
        <label for="fname">Filter : </label>
         
         <select name="courses" id="cars" onChange={getStatus}>
         <option value="All">All</option>
            <option value="Introduction to React">Introduction to React</option>
            <option value="Introduction to Node">Introduction to Node</option>
            <option value="Introduction to Java">Introduction to Java</option>
            <option value="Introduction to c#">Introduction to c#</option>
        </select>
        
        <select name="courses" onChange={getID} >
         <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><br/>

        </div>

        <div class= "createMovie">
        
        <div class="select">
         <label for="fname">Title:  </label>
         
         <select name="courses" id="movie" onChange={getTitle}   >
         <option value="Select One" >Select One</option>
            <option value="Introduction to React">Introduction to React</option>
            <option value="Introduction to Node">Introduction to Node</option>
            <option value="Introduction to Java">Introduction to Java</option>
            <option value="Introduction to c#">Introduction to c#</option>
        </select><br/>
        </div>
        
        <div class="trailer">
            <label> Trailer:</label>
            <input id="trail" onChange= {getTrailer} type="text" placeholder="input youtube iframe" value={trailer}></input>

        </div>
         {/* <input onChange={getTitle} value = {title}type="text" id="fname" name="fname"/><br/> */}
         <div class="description">
         <label for="lname">Description: </label>
         <input onChange={getDescription} value= {description} type="text" id="lname" name="lname" size="50"/>
         <button onClick={createMovie}>Create Movie</button>
         </div>
         </div>
        </form>
        
    )
}

export default NewMovie