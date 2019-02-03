import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from '../Results/SearchResults';
import { Search } from './style/Index';

export default class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  handleSearch = query => {
    const url = `http://api.yummly.com/v1/api/recipes?_app_id=3fb6d208&_app_key=83f46937b2f86104342463b7f802ed41&q=${query}`;
    fetch(url)
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
      <Search>
        <SearchBar handleSubmit={this.handleSearch} />
        <SearchResults recipes={recipes} />
      </Search>
    );
  }
}
