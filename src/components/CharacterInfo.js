import React from 'react';
//importing styled components
import styled from 'styled-components';
// importing Info Card component
import InfoCard from './InfoCard';

// Styled component
const CharacterInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* if the props given are invis then the display will be none */
    display: ${(props) => props.invis ? 'none' : 'flex'};
`;

export default (props) => {
    // getting props from the parent
    const { info, invis } = props;

    return (
        <CharacterInfo invis={invis}>
            <InfoCard info={info} />
        </CharacterInfo>
    );
}