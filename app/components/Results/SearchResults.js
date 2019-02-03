import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

const propTypes = {
  recipes: PropTypes.array,
};

export default class SearchResults extends React.PureComponent {
  render() {
    const { recipes } = this.props;

    return (
      <div>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    );
  }
}

SearchResults.propTypes = propTypes;
