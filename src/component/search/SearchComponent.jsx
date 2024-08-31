import React from 'react';
import './SearchComponent.scss';

const SearchComponent = () => {
  return (
   <main>
      <div className='main-content'>
        <h1 className='main-content-head'>Craft Masterful Cocktails with Your Ingredients</h1>
        <p className='main-content-subhead'>Enter your ingredients and become the star of the bar with personalized cocktail creations!</p>
        <input className='main-content-search' type="text" placeholder='Find cocktail....' />
      </div>
   </main>
  );
};

export default SearchComponent;
