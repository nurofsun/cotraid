import styled from 'styled-components';

const StyledTab = styled.div`
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 15px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

function Tab({ children }) {
    return (
        <StyledTab>
            {children}
        </StyledTab>
    )
}

export default Tab;
