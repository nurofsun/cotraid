import styled from 'styled-components';

const StyledTabItem = styled.button`
    apperance: none;
    border: none;
    outline: none;
    text-align: center;
    overflow: hidden;
    padding: 10px 12px;
    display: inline-block;
    margin-right: 10px;
    border-radius: 7px;
    cursor: pointer;
    color: #434343;
    font-weight: medium;
    background-color: ${props => props.isActive ? '#f8f8f8' : '#f2f2f2'};
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
