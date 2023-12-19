import { useEffect } from "react";
import React from "react";

export default function GetData() {
  const [todos, setTodos] = React.useState([]);
  const [data, setData] = React.useState("");

  const links = ["todos", "posts", "photos"];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [data]);

  return (
    <>
      <div className="display:none">
        <button onClick={() => setData(links[0])}>get todos</button>
        <button onClick={() => setData(links[1])}>get posts</button>
        <button onClick={() => setData(links[2])}>get photos</button>
        <ul key={todos.id}>
          {todos.map((item) => (
            <li>
              <p>
                {item.id}. {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
