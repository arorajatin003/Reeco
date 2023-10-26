import Styles from "styled-components"

interface IModal{
    children:any,
    handalClose:()=>void,
    heading:string,
}
const Modal = ({
    children,
    handalClose,
    heading
}:IModal)=>{

    return(
        <style.ModalContainer>
            <style.ModalContent>
            <style.ModalHeader>
                {heading}
                <style.CloseButton onClick={handalClose}>&#10006;</style.CloseButton>
            </style.ModalHeader>
            {children}
            </style.ModalContent>
        </style.ModalContainer>
    )
}

const style = {
    ModalContainer: Styles.div`
        position:absolute;
        background-color:#a0a0a0c0;
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        top:0;
        bottom:0;
        left:0;
        right:0;
        
    `,
    ModalContent: Styles.div`
       padding:2rem;
       background-color:#ffffff;
       max-width:400px;
       

    `,
    Text: Styles.div`
        color:#006231;
        font-size:1rem;
        font-weight:400
    `,
    ModalHeader: Styles.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:1.2rem;
        font-weight:600;
        margin-bottom:1rem;
        
    `,
    CloseButton: Styles.div`
        
    `,

}
// const 

export default Modal;