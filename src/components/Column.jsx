import styled from 'styled-components';

const Column = styled.div`
    width: ${props => 100 / props.size}%;
    margn: 0px 5px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export default Column;
