import React from 'react';
import styled from 'styled-components';
import Recipe from '../components/recipe';

const RecipesContainer = styled.div`
    top: 80px;
    position: relative;
    width: 375px;
    background: lightblue;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`

const PrimaryRecipe = styled.div`
    width: 100%;
    height: 150px;
    background: salmon;
    margin-top: 15px;
    text-align: left;
    padding: 5px;
    font-size: 20px;
    padding: 10px;
    h2{
        font-weight: 300;
    }
`

const Recipes = () => {
    const state = {
        one: {
            title: 'Pizza',
        },
        two: {
            title: 'Pizza',
        },
        three: {
            title: 'Pizza',
        },
        four: {
            title: 'Pizza',
        },
        five: {
            title: 'Pizza',
        },
        six: {
            title: 'Pizza',
        },
    }

    return (
        <RecipesContainer>
            <PrimaryRecipe><h2>Glazed Apricots and Duck</h2></PrimaryRecipe>
            {Object.values(state).map( (e,i) =>  <Recipe key={i} title={e.title} ></Recipe>)}
        </RecipesContainer>
    )

}

export default Recipes;