import React from "react";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import Form from "@/components/Form/Form";

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

function New() {
  return <Form createTodo={createTodo} />;
}

export default New;
