import styled  from "styled-components";
import TableHeader from "../TableHeader";
import Table from "../Table";


const Body = ()=>{
    return(
        <style.BodyContainer>
            <TableHeader />
            <Table />
        </style.BodyContainer>
    )
}

export default Body;


const style = {
    BodyContainer: styled.div`
        padding: 1rem 5rem;
        display: flex;
        row-gap: 1rem;
        flex-direction: column;
    `
}