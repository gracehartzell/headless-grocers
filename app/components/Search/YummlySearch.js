import React from 'react';
import { API_ID, API_KEY } from '../../../creds';
import SearchBar from './SearchBar';
import SearchResults from '../Results/SearchResults';

export default class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  handleSearch = query => {
    const URL = `http://api.yummly.com/v1/api/recipes?_app_id=${API_ID}&_app_key=${API_KEY}&q=${query}`;
    fetch(URL)
      .then(response => response.json())
      .then(recipes => {
        this.setState({
          recipes: recipes.matches,
        });
      });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <SearchBar handleSubmit={this.handleSearch} />
        <SearchResults recipes={recipes} />
      </div>
    );
  }
}
