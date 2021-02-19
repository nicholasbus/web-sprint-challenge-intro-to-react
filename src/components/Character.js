// Write your Character component here
// importing React and useState
import React, { useState } from 'react';
// importing styled components
import styled from 'styled-components';
// importing the CharacterInfo component
import CharacterInfo from './CharacterInfo';

const Character = styled.div`
    background-color: #CCD5AE;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    
    height: max-content;
    margin-bottom: 2rem;
    h1 {
        text-decoration: underline;
    }
`;

export default (props) => {
    const { character } = props;
    // putting the needed info into an object for CharacterInfo
    const {name, ...rest} = character;

    const [invisibleInfo, setInvisibleInfo] = useState(true)

    return (
        <Character>
            <h1>{character.name}</h1>
            <button onClick={() => setInvisibleInfo(!invisibleInfo)} >More Info on {character.name}</button>
            
            <CharacterInfo info={rest} invis={invisibleInfo}/>
        </Character>
    )
} 