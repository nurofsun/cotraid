import styled from 'styled-components';

const StyledBanner = styled.header`
    color: white;
    padding-top: 10px;
    max-width: 400px;
    & > h2 {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.25;
    }
    & desc {

    }
    @media (min-width: 768px) {
        & h2 {
            font-size: 3.5rem;
        }
        & .desc {
            font-size: 2rem;
        }
    }
`;
function Banner({title, desc}) {
    return (
        <StyledBanner>
            <h2>{title}</h2>
            <p className="desc">{desc}</p>
        </StyledBanner>
    )
}

export default Banner;
