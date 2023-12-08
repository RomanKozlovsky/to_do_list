import style from "../Layout/Layout.module.css";
import InputTask from "../Input Task/InputTask";
import { useState, useEffect } from "react";
import TasksList from "../Tasks List/TasksList";
import Header from "../Header/Header";

export default function Layout() {
  const [textAreaValue, setTextAreaValue] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [taskIsDone, setTaskIsDone] = useState(false);
  const [editFormText, setEditFormText] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem('todosList') || [];
    (todos.length < 2 ? setTextAreaValue([]) : setTextAreaValue(JSON.parse(todos)))
  }, [])

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(textAreaValue), [textAreaValue])
  })
  

  function catchDataFromTextarea(value) {
    const id = textAreaValue.length + 1;
    if (value.length > 0) {
      setTextAreaValue([...textAreaValue, { id, text: value, isDone: false }]);
      value = null;
    } else return;
  }

  function deleteTask(id) {
    setTextAreaValue(textAreaValue.filter((index) => index.id !== id));
  }

  function editTask(id, value) {
    textAreaValue.forEach((i) => (i.id === id ? (i.text = value) : null));
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
      <Header />
      <InputTask catchDataFromTextarea={catchDataFromTextarea} />
      <TasksList
        currentId={currentId}
        setupForm={setupForm}
        data={textAreaValue}
        deleteTask={deleteTask}
        editTask={editTask}
        editFormText={editFormText}
        doneTask={doneTask}
      />
    </div>
  );
}
