import { useState } from "react";
import { BodyContainer, Footer, Image, ImageContainer, InputField, InputFieldsContainer, Label, LowerBody, ModalContainer, TextInput, UpperBody, Value } from "./style";
import Button from "../../../UI/Button";
import { useAppDispatch } from "../../../../hooks";
import { addProduct, editProduct } from "../../../../../features/counter/counterSlice";
import { Avocado } from "../../../../../assects/images";



const AddModal = ({id, close}:any)=>{
    const dispatch = useAppDispatch();
    const [input, setInput] = useState({
        id: id+1,
        product_name:"",
        brand:"",
        price:0,
        quantity:0,
        status:"",
    });
    const handelUpdate = (key:string, value:any)=>{
        if(!value && (key == 'price' || key == 'quantity'))value=0
        console.log(value)
        setInput(input=>({
            ...input,
            [key]:value
        }))
    }
    const save = ()=>{
        dispatch(addProduct(input))
        close()
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
                            <Label>Product Name</Label>
                            <TextInput 
                                value={input.product_name}
                                onChange={(e)=>handelUpdate("product_name",e.target.value)}
                            />
                        </InputField>
                        <InputField>
                            <Label>Brand</Label>
                            <TextInput 
                                value={input.brand}
                                onChange={(e)=>handelUpdate("brand",e.target.value)}
                            />
                        </InputField>
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
                            <Value>&#8377;{input.price * input.quantity}</Value>
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

export default AddModal;

