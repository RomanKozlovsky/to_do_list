import style from './body.module.css';
import Left from './left side/left';
import Right from './right side/right';
import { useState } from 'react';

function Body() {

    const [textAreaValue, setTextAreaValue] = useState([
    ]);
    const [currentId, setCurrentId] = useState(null);
    const [taskIsDone, setTaskIsDone] = useState(false);
    const [editFormText, setEditFormText] = useState('');

    function catchDataFromTextarea(value) {
        const id = textAreaValue.length + 1;
        if (value.length > 0) {
            setTextAreaValue([...textAreaValue, { id, text: value, isDone: false }]);
            value = null;
        } else return;
    }

    function deleteTask(id) {
        setTextAreaValue(textAreaValue.filter((index) => index.id !== id))
    }

    function editTask(id, value) {
        textAreaValue.forEach((i) => i.id === id ? i.text = value : null)
    }

    function setupForm(id, text) {
        setCurrentId(id);
        setEditFormText(text);
    }

    function doneTask(id, value, isDone) {
        let tasks = textAreaValue;
        tasks[id - 1] = { id, text: value, isDone: !isDone };
        setTextAreaValue(tasks);
        setTaskIsDone(!taskIsDone);
    }

    return (
        <div className={style.bodyWrapperStyle}>
            <Left catchDataFromTextarea={catchDataFromTextarea} />
            <Right
                currentId={currentId}
                setupForm={setupForm}
                data={textAreaValue}
                deleteTask={deleteTask}
                editTask={editTask}
                editFormText={editFormText}
                doneTask={doneTask} />
        </div>
    )
}
export default Body;