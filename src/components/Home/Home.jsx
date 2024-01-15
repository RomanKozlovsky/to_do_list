import style from "../Home/Home.module.css";
import InputTask from "../Input Task/InputTask";
import { useState, useEffect } from "react";
import TasksList from "../Tasks List/TasksList";
import Header from "../Header/Header";
import React from "react";
function useToDoList() {
  const [textAreaValue, setTextAreaValue] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [taskIsDone, setTaskIsDone] = useState(false);
  const [editFormText, setEditFormText] = useState("");

  useEffect(() => {
    const todos = localStorage.getItem("todosList") || [];
    todos.length < 2 ? setTextAreaValue([]) : setTextAreaValue(JSON.parse(todos));
    console.log(todos)
  }, []);

  useEffect(() => {
    console.log('this')
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
export const context = React.createContext();

export default function Home() {
  const { onDataFromTextareaChange, currentId, setupForm, textAreaValue, deleteTask, editTask, editFormText, doneTask } = useToDoList();

  const [contextValue, setContextValue] = React.useState("text context");

  return (
    <div className={style.bodyWrapperStyle}>
      <context.Provider value={{ contextValue, setContextValue }}>
        <Header />
        <InputTask onDataFromTextareaChange={onDataFromTextareaChange} />
        <TasksList
          currentId={currentId}
          setupForm={setupForm}
          textAreaValue={textAreaValue}
          deleteTask={deleteTask}
          editTask={editTask}
          editFormText={editFormText}
          doneTask={doneTask}
        />
      </context.Provider>
    </div>
  );
}
