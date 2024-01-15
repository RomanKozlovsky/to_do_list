import { context } from "../Home/Home";
import style from "./InputTask.module.css";
import { useState, useRef } from "react";

export default function InputTask(props) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const myForm = useRef(null);

  return (
    <>
      <div className={style.leftSideWrapper}>
        <form ref={myForm}>
          <h1 className={style.leftSideTitle}>add a new task:</h1>
          <input onChange={(event) => setTextAreaValue(event.target.value)} type="text" placeholder="write..." />
          <button
            className={style.btn}
            type="button"
            onClick={() => {
              myForm.current.reset();
              props.onDataFromTextareaChange(textAreaValue);
              setTextAreaValue("");
              myForm.current.reset();
            }}
          >
            add...{" "}
          </button>
        </form>
      </div>
    </>
  );
}
