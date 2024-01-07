import style from "../Layout/Layout.module.css";
import InputTask from "../Input Task/InputTask";
import { useState, useEffect } from "react";
import TasksList from "../Tasks List/TasksList";
import Header from '../header/header';

function useToDoList() {
  const [textAreaValue, setTextAreaValue] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [taskIsDone, setTaskIsDone] = useState(false);
  const [editFormText, setEditFormText] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem("todosList") || [];
    todos.length < 2 ? setTextAreaValue([]) : setTextAreaValue(JSON.parse(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(textAreaValue), [textAreaValue]);
  });

  function onDataFromTextareaChange(value) {
    const id = textAreaValue.length + 1;
    if (value.length <= 0) return;
    setTextAreaValue([...textAreaValue, { id, text: value, isDone: false }]);
    value = null;
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

  function doneTask(currentTask) {
    let tasks = textAreaValue;
    tasks[currentTask.id - 1] = { id: currentTask.id, text: currentTask.text, isDone: !currentTask.isDone };
    setTextAreaValue(tasks);
    setTaskIsDone(!taskIsDone);
  }

  return { onDataFromTextareaChange, currentId, setupForm, textAreaValue, deleteTask, editTask, editFormText, doneTask };
}

export default function Layout() {
  const { onDataFromTextareaChange, currentId, setupForm, textAreaValue, deleteTask, editTask, editFormText, doneTask } = useToDoList();
  return (
    <div className={style.bodyWrapperStyle}>
      <Header />
      <InputTask onDataFromTextareaChange={onDataFromTextareaChange} />
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
