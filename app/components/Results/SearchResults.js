import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import './style/Style.css';

const propTypes = {
  recipes: PropTypes.array,
};

export default class SearchResults extends React.PureComponent {
  render() {
    const { recipes } = this.props;

    return (
      <section className="cards">
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} />
        ))}
      </section>
    );
  }
}

SearchResults.propTypes = propTypes;
