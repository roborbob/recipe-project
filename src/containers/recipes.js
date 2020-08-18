import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Recipe from '../components/recipe';
import axios from 'axios';
import Spinner from '../components/spinner';

const RecipesContainer = styled.div`
    top: 90px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border-radius: 5px;
    margin-top: 10px;
    overflow: hidden;
`

const PrimaryRecipe = styled.div`
    width: 100%;
    height: 150px;
    background: salmon;
    text-align: left;
    padding: 5px;
    font-size: 20px;
    h2{
        font-weight: 300;
    }
`

const Recipes = () => {
    const [state,setState] = useState(localStorage.getItem('recipes'))
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem(`recipes`)){
            toggleLoading(false)
            console.log(`Using localStorage`)
        } else {
            toggleLoading(true)
            const key = `276ff92f42f14a1690bac6bdc10438bb`
            const fetchRecipes = async() => {
                const response = await axios({
                    method: `get`,
                    url: `https://api.spoonacular.com/mealplanner/generate?timeFrame=week`,
                    params: {apiKey: key}
                })
                localStorage.setItem(`recipes`, JSON.stringify(response.data.week))
            }
            fetchRecipes();
        }
    }, [state])

    return (
        <RecipesContainer>
            <PrimaryRecipe><h2>Something Good</h2></PrimaryRecipe>
            {loading ? <Spinner/> : Object.entries(JSON.parse(state)).slice(1).map((e,i) =>  
                <Recipe 
                    key={i} 
                    title={e[1].meals[1].title} 
                    id={e[1].meals[1].id}
                    readyIn={e[1].meals[1].readyInMinutes}
                ></Recipe>)}
        </RecipesContainer>
    )

}

export default Recipes;