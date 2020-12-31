import styled from 'styled-components';
import AnimationCount from 'react-count-animation';
const StyledCard = styled.article`
    border-radius: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > header {
        padding: 10px 12px;
    }
    & > header .title {
        font-size: 1rem;
        font-weight: medium;
        text-transform: uppercase;
    }
    & > .content {
        padding: 0px 10px 10px 10px;
        font-size: 2.7rem;
        font-weight: bold;
    }
    @media(min-width: 768px) {
        margin-right: 12px;
        margin-left: 12px;
    }
`;


function Card({ title, value, ...restProps }) {
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
                <h3 className="title">{title}</h3>
            </header>
            <div className="content">
                <AnimationCount {...animationSettings}/>
            </div>
        </StyledCard>
    )
}

export default Card;
