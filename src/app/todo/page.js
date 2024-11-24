"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import vector from "../../../public/vector.jpg";
function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setTodos(data);
  };
  console.log(todos);
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center">Todo</h1>
      <div className="">
        <ul className="grid grid-cols-3 ">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="rounded-lg border-2 border-slate-500 p-2 m-2 w-96"
              >
                <Image
                  src={vector}
                  alt={"Todo Image"}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div className="flex flex-col items-center justify-center">
                  <li>Title:{todo.title}</li>

                <p
                  className={`boder rounded-full px-2 w-1/2 ${
                    todo.completed === true
                      ? "text-white bg-green-500"
                      : "bg-red-500 text-white"
                  }`}
                >
                  Status: {todo.completed === true ? "Completed" : "Pending"}
                </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
