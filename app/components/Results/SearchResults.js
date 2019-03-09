import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';
import './style/Style.css';

const propTypes = {
  recipes: PropTypes.array,
  id: PropTypes.string,
};

export default class SearchResults extends React.PureComponent {
  render() {
    const { recipes, id } = this.props;

    return (
      <section className="cards" key={id}>
        {recipes.map(recipe => (
          <RecipeCard recipe={recipe} />
        ))}
      </section>
    );
  }
}

SearchResults.propTypes = propTypes;
