import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import { Results } from './style/Index';

const propTypes = {
  recipes: PropTypes.array,
};

export default class SearchResults extends React.PureComponent {
  render() {
    const { recipes } = this.props;

    return (
      <Results>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} />
        ))}
      </Results>
    );
  }
}

SearchResults.propTypes = propTypes;
