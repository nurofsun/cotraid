import styled from 'styled-components';

const StyledCard = styled.article`
    padding: 10px 12px;
    border-radius: 7px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
    margin-top: 10px;
    margin-bottom: 10px;
    border-top-width: 10px;
    border-top-style: solid;
    border-top-color: ${props => props.color};
    text-align: center;
    color: ${props => props.color};
    @media(min-width: 768px) {
        margin-right: 12px;
        margin-left: 12px;
    }
`;

const StyledCardHeader = styled.header`
    padding-bottom: 5px;
`;

const StyledCardTitle = styled.h3`
    font-weight: medium;
    font-size: 1rem;
    margin: 0px;
`
const StyledCardContent = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    color: #434343;
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
