import styled from "styled-components";

export const TableHeaderContainer = styled.div`
    padding:1rem;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    height: max-content;
    gap:1rem;
`;

export const Item = styled.div`
    text-align: left;
    border-right: 1px solid #d3d3d3;
    /* background-color: aqua; */
    /* width: 15%; */

    &:last-child{
        border-right: none;
    }
`;

export const ItemHeader = styled.div`
    font-weight: 600;
    font-size: 1rem;
    color: #757575;
    margin-bottom: 0.5rem;
`;

export const ItemBody = styled.div`
     font-weight: 600;
    font-size: 1.2rem;
    color: #000000;
    word-wrap: break-word;
`;


