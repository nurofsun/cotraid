import tw, { styled } from 'twin.macro';

const StyledRow = styled.div`
    ${tw`flex flex-row flex-wrap`}
`
function Row({...restProps}) {
    return (
        <StyledRow {...restProps}/>
    )
}
export default Row;
