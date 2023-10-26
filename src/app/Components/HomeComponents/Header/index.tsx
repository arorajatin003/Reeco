import React from "react";
import { BoldText, HeaderContainer, Item, Row } from "./style";
import Button from "../../UI/Button";

const Header = ()=>{

    return(
        <HeaderContainer>
            <Row>
                <Item style={{color:"#757575"}}>
                    {`Orders > 123456`} 
                </Item>
            </Row>
            <Row>
                <Item>
                    <BoldText>Order 123456</BoldText>
                </Item>
                <Item>
                    <Button text="Back" onClick={()=>console.log("Back")} filled={false}/>
                    <Button text="Approve Order" onClick={()=>console.log("Approve Order")} filled={false}/>
                </Item>
            </Row>
        </HeaderContainer>
    )
}

export default Header;