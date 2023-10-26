import { useState } from "react";
import { Avocado } from "../../../../assects/images";
import { useAppDispatch } from "../../../hooks";
import { Element, Image, ImageContainer, TableRow } from "./style"
import Modal from "../../UI/Modal";
import { setStatus } from "../../../../features/counter/counterSlice";
import EditModal from "./EditModal";


const Row = ({
    ele,
    key
}:any)=>{
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false) 

    const getBachgroundColor = (status:string)=>{
        switch(status){
            case "Approved":
                return "#00ff00"
            case "Missing":
                return "#ddff00"
            case "Urgent Missing":
                return "#ff0000"
        }
    }

    const handelClicked = (status:string)=>{
        dispatch(setStatus({status:status,id:ele.id-1}))
        setShowModal(false);
    }
    return(
        <TableRow key={key}>
            {showModal && ( 
                <Modal heading="Missing Product" handalClose={()=>setShowModal(false)}>
                    <div>Is '{ele.product_name.slice(0,20)}{ele.product_name.lenght>20?'...':''}' is urgent?</div>
                    <div style={{display:"flex",gap:"20px", alignItems:"flex-end"}}>
                        <div onClick={()=>handelClicked("Urgent Missing")}>Yes</div>
                        <div onClick={()=>handelClicked("Missing")}>No</div>
                    </div>
                </Modal>
             )}
             {showEditModal && ( 
                <Modal heading={ele.product_name.slice(0,20)} handalClose={()=>setShowEditModal(false)}>
                    <EditModal price={ele.price} quantity={ele.quantity} close={()=>setShowEditModal(false)} index={ele.id}/>
                </Modal>
             )}
            <Element style={{width:"5%"}}>
                <ImageContainer>
                    <Image src={Avocado} alt="A"/>
                </ImageContainer>
            </Element>
            <Element style={{width:"25%"}}>
                {ele.product_name}
            </Element>
            <Element style={{width:"10%"}}>{ele.brand}</Element>
            <Element style={{width:"10%"}}>&#8377;{ele.price}</Element>
            <Element style={{width:"10%"}}>10 * &#8377;{ele.quantity}</Element>
            <Element style={{width:"10%"}}>&#8377;{ele.price * ele.quantity}</Element>
            <Element style={{width:"20%", color:"#000000"}}>
                <div style={{padding:"0.5rem 1rem", borderRadius:"100px", backgroundColor:getBachgroundColor(ele.status), width:"fit-content"}}>
                    {ele.status}
                </div>
            </Element>
            <Element style={{width:"5%", display:"flex",gap:"20px"}}>

                <div onClick={()=>dispatch(setStatus({status:"Approved",id:ele.id-1}))} style={{color:ele.status=="Approved"?"#00ff00":""}}>&#10004;</div>
                <div onClick={()=>setShowModal(true)} style={{color:ele.status!="Approved"?"red":""}}>&#10006;</div>

            </Element>
            <Element style={{width:"5%"}} onClick={()=>setShowEditModal(true)}>
                Edit
            </Element>
        </TableRow>
    )
}

export default Row;