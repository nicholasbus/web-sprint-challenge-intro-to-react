// importing React and styled components
import React from 'react';
import styled from 'styled-components';

// Styled component
const InfoCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export default (props) => {
    const { info } = props;

    return (
        <InfoCard>
            <ul>
                <li>Height: {info.height}</li>
                <li>Mass: {info.mass}</li>
                <li>Hair Color: {info.hair_color}</li>
                <li>Birth Year: {info.birth_year}</li>
            </ul>
        </InfoCard>
    );
} 