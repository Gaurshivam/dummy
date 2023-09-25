import React from 'react';
import './Recipe.css'

const Recipe = () => {
  return (
    <div className='RecipeMain'>
      <h1 style={{fontStyle:"italic"}}>Search Recipes With <span style={{color:"red"}}>Food2Fork</span></h1>
      <div className='Searchbtn'>
      <input type='text' placeholder='Chicken,burger,onion' />
      <button>Search</button>
      </div>
      <p>RECIPE LIST</p>
    </div>
  );
}

export default Recipe;
