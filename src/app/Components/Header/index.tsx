import React from "react";
import { HeaderContainer, HeaderHeading, HeaderText, InnerContainer } from "./style";

const Header = ()=>{

    return(
        <HeaderContainer>
            <InnerContainer>
                <HeaderHeading>
                    Reeco
                </HeaderHeading>
                <HeaderText>
                    Store
                </HeaderText>
                <HeaderText>
                    Orders
                </HeaderText>
                <HeaderText>
                    Analysis
                </HeaderText>
            </InnerContainer>
            <InnerContainer>
                <HeaderText>
                    Cart
                </HeaderText>
                <HeaderText>
                    Hello, Jatin
                </HeaderText>
            </InnerContainer>
        </HeaderContainer>
    )
};

export default Header;