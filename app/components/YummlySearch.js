import React from 'react';
import SearchBar from './SearchBar';
// import RecipeResults from './RecipeResults';

export default class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
    };
  }

  handleSearch = query => {
    const url = `http://api.yummly.com/v1/api/recipes?_app_id=3fb6d208&_app_key=83f46937b2f86104342463b7f802ed41&q=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(recipes => {
        // console.log(recipes);
        console.log(`HERE ARE THE RECIPES: ${JSON.stringify(recipes.matches)}`);
        this.setState({
          recipes: recipes.matches,
        });
      });
  };

  render() {
    return (
      <div className="recipe-search">
        <h3>Search a Recipe</h3>
        <SearchBar handleSubmit={this.handleSearch} />
        {/* <RecipeResults recipes={this.state.recipes} /> */}
      </div>
    );
  }
}
