import style from './left.module.css';
import { useState, useRef } from "react";


function Left(props) {

    const [textAreaValue, setTextAreaValue] = useState('');
    const myForm = useRef(null);

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            myForm.current.reset();
            props.catchDataFromTextarea(textAreaValue)
            setTextAreaValue('')
            myForm.current.reset();
        } else {
            return null;
        }
    }

    return (
        <>
            <div className={style.leftSideWrapper}>
                <form ref={myForm} >
                    <h1 className={style.leftSideTitle}>ДОДАТИ НОВЕ ЗАВДАННЯ:</h1>
                    <textarea onChange={(event) => setTextAreaValue(event.target.value)} onKeyDown={onKeyDown}
                        type="text" placeholder="писать сюди..." />
                    <button className={style.btn} type="button" onClick={() => {
                        myForm.current.reset();
                        props.catchDataFromTextarea(textAreaValue)
                        setTextAreaValue('')
                        myForm.current.reset();
                    }}>ДОДАТИ</button>

                </form>
            </div>
        </>
    )
}
export default Left;