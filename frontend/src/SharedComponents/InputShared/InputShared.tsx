import styles from "./style.module.css"
import { useEffect } from "react"
import ISharedInput from "../../interfaces/sharedInput"

const InputShared = (props: ISharedInput) =>{

    return(
    <>
        {/* <label htmlFor={props.name} className={styles.label}>{props.labelText}</label><br/> */}
        <input type={props.type} name={props.name} className={styles.input} placeholder={props.placeholder}></input><br/>
    </>
    )
}

export default InputShared