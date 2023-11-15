import style from './body.module.css';
import Left from './left side/left';
import Right from './right side/right';
import { useState } from 'react';

function Body() {

    const [textAreaValue, setTextAreaValue] = useState([
    ]);

    const [currentId, setCurrentId] = useState(0);

    const [taskIsDone, setTaskIsDone] = useState(false);

    const [editFormText, setEditFormText] = useState('');
    
    function catchDataFromTextarea(value) {
        const id = textAreaValue.length + 1;
        if (value.length > 0) {
            setTextAreaValue([...textAreaValue, { id, text: value }]);
            value = null;
        } else return;
    }

    function deleteTask(id) {
        setTextAreaValue(textAreaValue.filter((index) => index.id !== id))
    }

    function editTask(id, value) {
        textAreaValue.forEach((i) => i.id === id ? i.text = value : null)
    }

    function setupForm(id,text) {
        setCurrentId(id);
        setEditFormText(text);
    }

    function doneTask(id) {
        setCurrentId(id);
        setTaskIsDone(!taskIsDone);
    }

    return (
        <div className={style.bodyWrapperStyle}>
            <Left catchDataFromTextarea={catchDataFromTextarea} />
            <Right doneTask={doneTask}
                taskIsDone={taskIsDone}
                currentId={currentId}
                setupForm={setupForm}
                data={textAreaValue}
                deleteTask={deleteTask}
                editTask={editTask}
                editFormText={editFormText} />
        </div>
    )
}
export default Body;