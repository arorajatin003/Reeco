import styled from "styled-components";


export const TableContainer = styled.div`
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #d3d3d3;
    display: flex;
    width: 100%;
    flex-direction: column;
    
`
export const TableHeader = styled.div`
    border: 1px solid #d3d3d3;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    text-align: left;
    word-wrap:break-word;
    justify-content: space-between;
    gap:1rem;
    padding:0.2rem 1rem
`
export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
`
export const TableRow = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    word-wrap:break-word;
    justify-content: space-between;
    gap:1rem;
    background-color: #f4f4f4da;
    
    padding:1rem 1rem;
    box-shadow: 1px 7px 4px -3px rgba(178, 178, 178, 0.75);
`
export const Element = styled.div`
    font-size: 0.9rem;
    color: #757575;
    font-weight: 600;
    padding: 0.15rem 0;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const ImageContainer = styled.div`
    width: 3rem;
    height: 3rem;
    padding: 0 0.15rem;
    background-color: aqua;
`