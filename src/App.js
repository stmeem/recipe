import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const API_ID = " ";
  const API_KEY = " ";
  const [allRecipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const getData = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const finalData = await getData.json();
    setRecipe(finalData.hits);

  };
  const updateSearch = e => {
    setSearch(e.target.value)
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div>
    <div className="App">
      <h2 className="text-center mt-5 h2style">CookBook <span role="img" aria-label="fork and knife">🍽️</span></h2>
      <form onSubmit={getSearch} className="form">
        <input type="text" className="input" value={search} placeholder= "chicken, beef, pancake etc..."onChange={updateSearch}></input>
        <button type="submit" className="search">Search</button>
      </form>
      <div className="d-flex justify-content-around flex-wrap">
        {allRecipe.map((r) => (
          <Recipe
            key={r.recipe.label}
            title={r.recipe.label}
            label={r.recipe.label}
            calory={r.recipe.calories}
            image={r.recipe.image}
            ingredients={r.recipe.ingredients}
            url={r.recipe.url}
          />
        ))}
      </div>
      
    </div>
    <div className="footer-copyright text-center py-3">
        
       Copyright &copy; stmeem <span role="img" aria-label="fork and knife">❤️</span>
        
      </div>
    </div>
  );
}

export default App;
