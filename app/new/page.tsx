import React from "react";
import styles from "./styles.module.css";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

function New() {
  async function createTodo(formData: FormData) {
    "use server";

    const todo = formData.get("todo")?.valueOf().toString().trim();

    if (!todo || todo?.length === 0) return console.log("todo is not set");

    const createdTodo = await prisma.todo.create({
      data: { name: todo as string },
    });
    console.log(createdTodo);
    redirect("/");
  }

  return (
    <form action={createTodo}>
      <input
        name="todo"
        className="bg-transparent border border-slate-300 rounded-sm w-full text-white"
        type="text"
      />
      <div className="float-right">
        <input className={styles.formButton} type="reset" />
        <button className={styles.formButton} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default New;
