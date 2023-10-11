"use client";
import { Todo } from "@prisma/client";
import React from "react";

interface Prop {
  todo: Todo;
  toggleTodo: (id: number, completed: boolean) => void;
}

function Todo({ todo, toggleTodo }: Prop) {
  return (
    <div key={todo.id} className="space-x-1">
      <input
        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        id={todo.id.toString()}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={todo.completed}
      />
      <label
        htmlFor={todo.id.toString()}
        className="cursor-pointer text-slate-200 text-sm peer-checked:line-through"
      >
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
