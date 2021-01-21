import tw, { styled } from 'twin.macro';

const StyledColumn  = styled.div(({size}) => [
    tw`w-full`,
    size === 'full' && tw`md:w-full`,
    size === 'ten' && tw`md:w-10/12`,
    size === 'eight' && tw`md:w-8/12`,
    size === 'six' && tw`md:w-6/12`,
    size === 'four' && tw`md:w-4/12`,
    size === 'three' && tw`md:w-3/12`,
    size === 'two' && tw`md:w-2/12`
])

function Column({ size, children }) {
    return (
        <StyledColumn size={size}>
            { children }
        </StyledColumn>
    )
}

export default Column;
