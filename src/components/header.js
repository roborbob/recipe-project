import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    position: fixed;
    display: block;
    background: black;
    text-align: center;
    width: 100%;
    h1 {
        font-family: 'Times New Roman';
        font-weight: 100;
        letter-spacing: 1.2px;
        color: white;
        font-size: 30px;
        padding: 10px 0px 5px 0px;
    }
`


const Header = () => {
    return (
        <Title>
            <h1>Whats For Dinner?</h1>
        </Title>
    )
}


export default Header;