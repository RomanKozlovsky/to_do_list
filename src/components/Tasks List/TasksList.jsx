import { text } from "@fortawesome/fontawesome-svg-core";
import style from "./TasksList.module.css";
import { faHammer, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TasksList(props) {
  const [editFormClick, setEditForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const filterTask = props.data.filter((task) => {
    return task.text.toLowerCase().includes(search.toLowerCase());
  });
  
  return (
    <>
      <div className={style.rightSideWrapper}>
        <div className={style.titleBody}>
          <h1 className={style.rightSideTitle}>task list:</h1>
          <input onChange={(event) => setSearch(event.target.value)} placeholder="search" />
        </div>
        {filterTask.length < 1 ? (
          <h2 className={style.rightSideTitle}>task list is empty...</h2>
        ) : (
          <div>
            {filterTask.map((index) => (
              <div key={index.id}>
                <div className={style.taskStyleWrapper}>
                  <div className={style.taskStyleBody}>
                    <div className={style.taskBodyStyle}>
                      <input onClick={() => props.doneTask(index.id, index.text, index.isDone)} type="checkbox" />
                      {index.isDone ? (
                        <div className={`${style.taskDone} ${style.taskBodyStyle}`}>{index.text}</div>
                      ) : (
                        <div className={style.taskBodyStyle}>{index.text}</div>
                      )}
                    </div>
                    <div>
                      <span
                        onClick={() => (props.setupForm(index.id, index.text), setEditForm(!editFormClick))}
                        className={`${style.taskStyleIcon} ${style.yellow}`}
                      >
                        <FontAwesomeIcon icon={faHammer} />
                      </span>
                      <span onClick={() => props.deleteTask(index.id)} className={`${style.taskStyleIcon} ${style.red}`}>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  </div>
                </div>
                {editFormClick && index.id === props.currentId && (
                  <div>
                    <form className={style.editForm}>
                      <input onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="make changes" />
                      <br />
                      <button
                        disabled={!inputValue.length}
                        onClick={() => (setEditForm(!editFormClick), props.editTask(index.id, inputValue), setInputValue(""))}
                        type="submit"
                      >
                        change...
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
