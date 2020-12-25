import styled from 'styled-components';

const StyledTabItem = styled.button`
    padding: 10px 12px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.75rem;
    display: inline-block;
    background-color: ${props => props.isActive ? '#555555' : '#888888'};
    color: #f2f2f2;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 7px;
    transition: 0.5s;
    &:hover {
        background-color: #434343;
        color: white;
    }
`;

function TabItem({ text, ...restProps }) {
    return (
        <li>
            <StyledTabItem {...restProps}>
                {text}
            </StyledTabItem>
        </li>
    )
}

export default TabItem;
