// import { useEffect } from "react";
// import React from "react";

// export default function GetData() {
//   const [todos, setTodos] = React.useState([]);
//   const [data, setData] = React.useState("");

//   const links = ["todos", "posts", "photos"];

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${data}`)
//       .then((response) => response.json())
//       .then((data) => setTodos(data));
//   }, [data]);

//   return (
//     <>
//       <div className="display:none">
//         <button onClick={() => setData(links[0])}>get todos</button>
//         <button onClick={() => setData(links[1])}>get posts</button>
//         <button onClick={() => setData(links[2])}>get photos</button>
//         <ul key={todos.id}>
//           {todos.map((item) => (
//             <li>
//               <p>
//                 {item.id}. {item.title}
//                 Roman
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

import { useEffect } from "react";
import React from "react";

export default function GetData() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch('https://659a8ae0652b843dea53af1f.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="display:none">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.id}. {item.title}, price: {item.price}, {item.imageUrl},</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
