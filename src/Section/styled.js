import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 10px;
    box-shadow: 5px 7px 5px 0px rgba(0, 0, 0, 0.11);
`;