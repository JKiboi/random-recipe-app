import React from 'react'

const RecipeCard = ({recipe}) => {
    const {
     strMeal,
     strArea,
     strMealThumb,
     strCategory,
     strInstructions,
    }=recipe

  return (
    < div className='card'>
        <div className='card-image'>
        <img
       src={strMealThumb}
        alt={strMeal}
        />
        </div>
        <div className='card-body'>
            <dic className="body-head">
            <span className='category'>{strCategory}</span>
            <h2 style={{color:"green"}}>{strMeal}</h2>
            <h2 style={{backgroundColor:"green"}}>Instructions</h2>
            </dic>
            <p>{strInstructions}</p>
            <p style={{color:"darkblue"}}>{strArea}</p>
        </div>
        
    </div>
   )
  }

export default RecipeCard
