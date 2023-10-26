import styled  from "styled-components";

export const HeaderContainer = styled.div`
    padding: 1rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #ffffff;
    box-shadow: 1px 7px 4px -3px rgba(201, 201, 201, 0.75);
/* -webkit-box-shadow: 1px 7px 4px -3px rgba(88,88,88,0.75);
-moz-box-shadow: 1px 7px 4px -3px rgba(88,88,88,0.75); */
`
export const Row = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    /* background-color: #1234ab; */
`
export const BoldText = styled.div`
    font-weight: 600;
    font-size: 1.5rem;

`
export const Item = styled.div`
    display: flex;
    column-gap: 1rem;
`