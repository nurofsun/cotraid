import styled from 'styled-components';

const StyledRow = styled.div`
    flex-wrap: ${props => props.multiline ? "wrap" : "nowrap" };
    display: flex;
    flex-direction: row;
`;


function Row({...restProps}) {
    return (
        <StyledRow {...restProps}/>
    )
}
export default Row;
