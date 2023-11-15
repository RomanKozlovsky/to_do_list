import style from './right.module.css';
import { faHammer, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function Right(props) {

    const [editFormClick, setEditForm] = useState(false);

    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <div className={style.rightSideWrapper}>
                <h1 className={style.rightSideTitle}>СПИСОК ЗАВДАНЬ:</h1>
                {props.data.length < 1
                    ?
                    <h1 className={style.rightSideTitle}>список завдань порожній...</h1>
                    :
                    <div>{props.data.map((index) => (<div key={index.id} >
                        <div className={style.taskStyleWrapper}>
                            <div className={style.taskStyleBody}>
                                {props.taskIsDone && index.id == props.currentId ? <div className={style.taskDone}>{index.text}</div> : <div>{index.text}</div>}
                                <div>
                                    <span onClick={() => props.doneTask(index.id)} className={`${style.taskStyleIcon} ${style.green}`} ><FontAwesomeIcon icon={faCheck} /></span>
                                    <span onClick={() => (props.setupForm(index.id, index.text), setEditForm(!editFormClick))} className={`${style.taskStyleIcon} ${style.yellow}`}><FontAwesomeIcon icon={faHammer} /></span>
                                    <span onClick={() => props.deleteTask(index.id)} className={`${style.taskStyleIcon} ${style.red}`}><FontAwesomeIcon icon={faTrash} /></span>
                                </div>
                            </div>
                        </div>
                        {editFormClick && index.id === props.currentId && <div>
                            <form className={style.editForm}>
                                <input onChange={(event) => setInputValue(event.target.value)} type="text" placeholder='введіть зміни' /><br />
                                <button onClick={() => (setEditForm(!editFormClick), props.editTask(index.id, inputValue))} type='sybmut'>ЗМІНИТИ</button>
                            </form>
                        </div>}
                    </div>
                    ))}
                    </div>}
            </div>
        </>
    )
}
export default Right;