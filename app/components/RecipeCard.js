import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from '@reach/router'

const Card = styled.div`
  height: 200px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const RecipeImg = styled.img`
  height: 150px;
  width: 150px;
`;

const RecipeText = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;

const propTypes = {
  recipe: PropTypes.shape({
    recipeName: PropTypes.string,
  }),
  id: PropTypes.string,
};

/* eslint-disable react/prefer-stateless-function */
export default class RecipeCard extends React.PureComponent {
  render() {
    const { recipe, id } = this.props;
    const {
      recipeName,
      rating,
      sourceDisplayName,
      id: recipeId,
      smallImageUrls,
    } = recipe;

    return (
      <Card key={recipeId}>
        <RecipeImg src={smallImageUrls[0]} alt={recipeName} />
        <RecipeText key={id}>
          <h1>{recipeName}</h1>
          <h3>{rating}</h3>
          <p>{sourceDisplayName}</p>
        </RecipeText>
      </Card>
    );
  }
}

RecipeCard.propTypes = propTypes;
