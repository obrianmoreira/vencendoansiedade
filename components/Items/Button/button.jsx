import Style from '../Button/Button.module.css'

export const Button = (props) => {

    return (

        <>

            <button id={props.buttonStyle} className={Style.buttonStyle} src={props.buttonSrc}>
                {props.buttonText}
            </button>
        
        </>

    )

}