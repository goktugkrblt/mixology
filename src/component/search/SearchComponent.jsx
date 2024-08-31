import React, { useState, useEffect } from 'react';
import './SearchComponent.scss';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCocktails = async () => {
    if (searchTerm) {
      setLoading(true);
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setCocktails([]);
    }
  };

  useEffect(() => {
    searchCocktails();
  }, [searchTerm]);

  return (
    <main>
      <div className='main-content'>
        <h1 className='main-content-head'>Craft Masterful Cocktails with Your Ingredients</h1>
        <p className='main-content-subhead'>Enter your ingredients and become the star of the bar with personalized cocktail creations!</p>
        <input
          className='main-content-search'
          type="text"
          placeholder='Find cocktail...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading && <p className='loading'>Loading...</p>}
        <div className='cocktail-results'>
          {cocktails.length > 0 ? (
            cocktails.map((cocktail) => (
              <div key={cocktail.idDrink} className='cocktail-card'>
                <img className='cocktail-image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h2 className='cocktail-name'>{cocktail.strDrink}</h2>
                <p className='cocktail-detail'>{cocktail.strInstructions}</p>
              </div>
            ))
          ) : (
            searchTerm && !loading && <p className='notfound'>No cocktails found</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchComponent;
