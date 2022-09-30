import React, { useState, useEffect } from "react";
import './App.css';
import RecipeCard from "./RecipeCard";

const url_api = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  
  const [randomRecipe,setRandomRecipe]= useState([])

  const fetchRandom=async()=>{
    
    const url=url_api
    const res=await fetch(url)
    const data=await res.json()

    setRandomRecipe(data.meals)
   
  }
  useEffect(()=>{
    fetchRandom()
  },[])
  
  

  return (
    <div className="container">
      <div className="top">
      <h1>Random Recipe Generator</h1>
      </div>
      <div className="recipes">
        {randomRecipe.map((recipe)=>
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        )}
        </div>
        <div className="bottom">
        <button
        className="btn"
        type="submit"
       onClick={()=>fetchRandom()}
      >
        Get Recipe</button>
          </div> 
    </div>
  );
}

export default App;
