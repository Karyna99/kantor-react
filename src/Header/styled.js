import styled from "styled-components";

export const StyledHeader = styled.h1`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
`;