import styled from 'styled-components';

const StyledCard = styled.article`
    padding: 10px 12px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
    margin-top: 10px;
    margin-bottom: 10px;
    border-top-width: 10px;
    border-top-style: solid;
    border-top-color: ${props => props.color};
    @media(min-width: 768px) {
        margin-right: 12px;
        margin-left: 12px;
    }
`;

const StyledCardHeader = styled.header`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 5px;
    margin-bottom: 10px;
`;

const StyledCardTitle = styled.h3`
    font-weight: 500;
    font-size: 12pt;
    margin: 0px;
`
const StyledCardContent = styled.div`
    padding: 10px;
    font-size: 22pt;
    text-align: center;
    letter-spacing: 5px;
    font-weight: bold;
`

function Card({ title, value, ...restProps }) {
    return (
        <StyledCard {...restProps}>
            <StyledCardHeader>
                <StyledCardTitle>{title}</StyledCardTitle>
            </StyledCardHeader>
            <StyledCardContent>
                {value}
            </StyledCardContent>
        </StyledCard>
    )
}

export default Card;
