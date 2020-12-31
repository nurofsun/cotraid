import styled from 'styled-components';

const StyledBanner = styled.header`
    color: white;
    padding-top: 10px;
    max-width: 400px;
    & h2 {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.25;
        text-transform: uppercase;
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
        height: 100vh;
        display: flex;
        align-items: center;
    }
`;
function Banner({title, desc}) {
    return (
        <StyledBanner>
            <div>
                <h2>{title}</h2>
                <p className="desc">{desc}</p>
            </div>
        </StyledBanner>
    )
}

export default Banner;
