import AnimationCount from 'react-count-animation';
import tw, { styled } from 'twin.macro';

const StyledCard = styled.div`
    ${tw`bg-gray-700 p-3 text-center rounded-md overflow-hidden border-yellow-500`}
`;

const StyledCardTitle = styled.h3(({size}) => [
    tw`text-gray-100 text-lg text-xl mb-2`,
    size === 'small' && tw`text-base md:text-lg`,
    size === 'large' && tw`text-xl md:text-3xl`
])

const StyledCardContent = styled.div(({size}) => [
    tw`text-gray-100 text-lg text-xl`,
    size === 'small' && tw`text-base md:text-lg`,
    size === 'large' && tw`text-xl md:text-3xl`
])

function Card({ title, value, size, ...restProps }) {
    const animationSettings = {
        start: 0,
        count: value,
        duration: 2000,
        decimals: 0,
        useGroup: true,
        animation: 'up'
    }
    return (
        <StyledCard {...restProps}>
            <header>
                <StyledCardTitle size={size}>
                    {title} 
                </StyledCardTitle>
            </header>
            <StyledCardContent size={size}>
                <AnimationCount {...animationSettings}/>
            </StyledCardContent>
        </StyledCard>
    )
}

export default Card;
