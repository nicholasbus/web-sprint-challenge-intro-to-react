import React from 'react';
//importing styled components
import styled from 'styled-components'

const CharacterInfo = styled.div`
    display: flex;
    flex-direction: column;
    display: ${(props) => props.invis ? 'none' : 'flex'};

    ul {
        background-color: white;
        padding: 2rem;
    }
`;

export default (props) => {
    const { info, invis } = props;

    return (
        <CharacterInfo invis={invis}>
            <ul>
                <li>Height: {info.height}</li>
                <li>Mass: {info.mass}</li>
                <li>Hair Color: {info.hair_color}</li>
                <li>Birth Year: {info.birth_year}</li>
            </ul>
        </CharacterInfo>
    )
}