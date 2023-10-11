import Todo from "@/components/Todo/Todo";
import prisma from "@/utils/db";

async function getTodos() {
  return await prisma.todo.findMany();
}

async function toggleTodo(id: number, completed: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { completed } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}
