import prisma from "@/utils/db";

async function getTodos() {
  return await prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="space-x-1">
          <input
            id={todo.id.toString()}
            type="checkbox"
            checked={todo.completed}
          />
          <label
            htmlFor={todo.id.toString()}
            className="text-slate-200 text-sm"
          >
            {todo.name}
          </label>
        </div>
      ))}
    </>
  );
}
