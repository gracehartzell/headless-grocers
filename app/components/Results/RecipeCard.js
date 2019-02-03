import React from 'react';
import PropTypes from 'prop-types';
import { Card, RecipeImg, RecipeText } from 'styled-components';

const propTypes = {
  recipe: PropTypes.shape({
    recipeName: PropTypes.string,
  }),
  id: PropTypes.string,
};

export default class RecipeCard extends React.PureComponent {
  render() {
    const { recipe, id } = this.props;
    const {
      recipeName,
      rating,
      attributes,
      sourceDisplayName,
      ingredients,
      id: recipeId,
      smallImageUrls,
    } = recipe;

    if (!attributes.cuisine || attributes.cuisine.length < 1) {
      attributes.cuisine = [];
    }

    return (
      <Card key={recipeId}>
        <RecipeImg src={smallImageUrls[0]} alt={recipeName} />
        <RecipeText key={id}>
          <h1>{recipeName}</h1>
          <h3>{rating}</h3>
          <p>{sourceDisplayName}</p>
          <p>{attributes.cuisine.join(', ')}</p>
          <p>{ingredients.join(', ')}</p>
        </RecipeText>
      </Card>
    );
  }
}

RecipeCard.propTypes = propTypes;
