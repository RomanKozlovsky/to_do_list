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
          <h1 className={style.rightSideTitle}>СПИСОК ЗАВДАНЬ:</h1>
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="пошук"
          />
        </div>
        {filterTask.length < 1 ? (
          <h1 className={style.rightSideTitle}>список завдань порожній...</h1>
        ) : (
          <div>
            {filterTask.map((index) => (
              <div key={index.id}>
                <div className={style.taskStyleWrapper}>
                  <div className={style.taskStyleBody}>
                    <input
                      onClick={() =>
                        props.doneTask(index.id, index.text, index.isDone)
                      }
                      type="checkbox"
                    />
                    {index.isDone ? (
                      <div className={style.taskDone}>{index.text}</div>
                    ) : (
                      <div>{index.text}</div>
                    )}
                    <div>
                      <span
                        onClick={() => (
                          props.setupForm(index.id, index.text),
                          setEditForm(!editFormClick)
                        )}
                        className={`${style.taskStyleIcon} ${style.yellow}`}
                      >
                        <FontAwesomeIcon icon={faHammer} />
                      </span>
                      <span
                        onClick={() => props.deleteTask(index.id)}
                        className={`${style.taskStyleIcon} ${style.red}`}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  </div>
                </div>
                {editFormClick && index.id === props.currentId && (
                  <div>
                    <form className={style.editForm}>
                      <input
                        onChange={(event) => setInputValue(event.target.value)}
                        type="text"
                        placeholder="введіть зміни"
                      />
                      <br />
                      <button
                        disabled={!inputValue.length}
                        onClick={() => (
                          setEditForm(!editFormClick),
                          props.editTask(index.id, inputValue),
                          setInputValue("")
                        )}
                        type="sybmut"
                      >
                        ЗМІНИТИ
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