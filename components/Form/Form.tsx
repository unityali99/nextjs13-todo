import React from "react";
import "./style.css";

interface Prop {
  createTodo: (formData: FormData) => void;
}

function Form({ createTodo }: Prop) {
  return (
    <form action={createTodo}>
      <input
        name="todo"
        className="bg-transparent border border-slate-300 rounded-sm w-full text-white"
        type="text"
      />
      <div className="float-right">
        <input className={"formButton"} type="reset" />
        <button className={"formButton"} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
