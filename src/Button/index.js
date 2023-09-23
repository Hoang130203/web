import { useState } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
function Button() 
{ 
    const [status,setStatus]=useState(true)
    return(
        <>
            <button className={styles.btn} onClick={()=>{console.log('clicked')}}>Click me!</button>
            <button className={clsx(styles.btn,{
                [styles.active]:status
            })} onClick={()=>{
                setStatus(status?false:true)
                console.log(status)
            }} >Click me!</button>
        </>
)
 }
export default Button