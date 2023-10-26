import { useState } from "react";
import { BodyContainer, Footer, Image, ImageContainer, InputField, InputFieldsContainer, Label, LowerBody, ModalContainer, TextInput, UpperBody, Value } from "./style";
import Button from "../../../UI/Button";
import { useAppDispatch } from "../../../../hooks";
import { editProduct } from "../../../../../features/counter/counterSlice";
import { Avocado } from "../../../../../assects/images";

interface IEditModal{
    price:number, 
    quantity:number,
    close:()=>void,
    index:number,
}

const EditModal = ({price, quantity,close,index}:IEditModal)=>{
    const dispatch = useAppDispatch();
    console.log(index)
    const [input, setInput] = useState({
        price:price,
        quantity:quantity,
        id:index-1
    });
    const handelUpdate = (key:string, value:number)=>{
        setInput(input=>({
            ...input,
            [key]:value
        }))
    }
    const save = ()=>{
        dispatch(editProduct(input))
    }
    return(
        <ModalContainer>
            <BodyContainer>
                <UpperBody>
                    <ImageContainer>
                        <Image src={Avocado}/>
                    </ImageContainer>
                    <InputFieldsContainer>
                        <InputField>
                            <Label>Price</Label>
                            <TextInput 
                                value={input.price}
                                onChange={(e)=>handelUpdate("price",parseInt(e.target.value))}
                            />
                        </InputField>
                        <InputField>
                            <Label>Quantity</Label>
                            <TextInput 
                                value={input.quantity}
                                onChange={(e)=>handelUpdate("quantity",parseInt(e.target.value))}
                            />
                        </InputField>
                        <InputField>
                            <Label>total</Label>
                            <Value>{input.price * input.quantity}</Value>
                        </InputField>
                    </InputFieldsContainer>
                </UpperBody>
                <LowerBody>

                </LowerBody>
            </BodyContainer>
            <Footer>
                <Button text="Cancel" onClick={()=>close()} filled={false}/>

                <Button text="Save" onClick={()=>save()} filled={true}/>
            </Footer>
        </ModalContainer>
    );
}

export default EditModal;

