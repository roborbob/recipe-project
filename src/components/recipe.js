import React from 'react';
import styled from 'styled-components';

const RecipeContainer = styled.div`
    width: 100px;
    height: 100px;
    background: salmon;
    margin-top: 15px;
    text-align: left;
    padding: 10px;
    h2{
        font-size: 16px;
        font-weight: 300;
    }

`

const Recipe = (props) => {
    return (
        <RecipeContainer>
            <h2>{props.title}</h2>
        </RecipeContainer>
    )
}

export default Recipe;