import { useState } from "react";
import { Avocado } from "../../../../assects/images";
import { Element, Image, ImageContainer, TableBody, TableContainer, TableHeader, TableRow, TopContainer } from "./style";
import Modal from "../../UI/Modal";
import {BsCheck2} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectCount, setStatus } from "../../../../features/counter/counterSlice";
import Row from "./Row";
import Button from "../../UI/Button";
import AddModal from "./AddModal";

const Table = ()=>{
    const data = useAppSelector(selectCount);
    const [modal, setModal] = useState(false);

    return(
       <TableContainer>
        {modal && <Modal heading="Add Product" handalClose={()=>setModal(false)}>
                <AddModal close={()=>setModal(false)} id={data.length}/>
            </Modal>}
        <TopContainer>
            <Button text="Add" onClick={()=>setModal(true)} filled={false}/>
        </TopContainer>
        <TableHeader>
            <Element style={{width:"5%"}}></Element>
            <Element style={{width:"25%"}}>Product name</Element>
            <Element style={{width:"10%"}}>Brand</Element>
            <Element style={{width:"10%"}}>Price</Element>
            <Element style={{width:"10%"}}>Quantity</Element>
            <Element style={{width:"10%"}}>Total</Element>
            <Element style={{width:"20%"}}>Ststus</Element>
            <Element style={{width:"5%"}}></Element>
            <Element style={{width:"5%"}}></Element>
        </TableHeader>
        <TableBody>
            {data?.map((ele,index)=>(
                <Row ele={ele} key={index}/>
            ))}
        </TableBody>
        
       </TableContainer>
    )
}

export default Table;

