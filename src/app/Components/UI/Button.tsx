import Styles from "styled-components"

interface IButton{
    text:string,
    onClick:()=>void,
    filled:boolean
}
const Button = ({
    text,
    onClick,
    filled
}:IButton)=>{

    return(
        <style.ButtonContainer onClick={()=>onClick()}>
            <style.Text>
                {text}
            </style.Text>
        </style.ButtonContainer>
    )
}

const style = {
    ButtonContainer: Styles.div`
        padding:0.5rem 1rem;
        border-radius:100px;
        border:1px solid #006231;
    `,
    Text: Styles.div`
        color:#006231;
        font-size:1rem;
        font-weight:400
    `

}
// const 

export default Button;