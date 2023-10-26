import { useState } from "react";
import { Avocado } from "../../../../assects/images";
import { Element, Image, ImageContainer, TableBody, TableContainer, TableHeader, TableRow } from "./style";
import Modal from "../../UI/Modal";
import {BsCheck2} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectCount, setStatus } from "../../../../features/counter/counterSlice";
import Row from "./Row";

const Table = ()=>{
    const data = useAppSelector(selectCount);

    return(
       <TableContainer>
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

