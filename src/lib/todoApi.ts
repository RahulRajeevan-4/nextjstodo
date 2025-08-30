export async function getTodos() {
  const res = await fetch("/api/todos", { cache: "no-store" })
  return res.json()
}

export async function addTodo(text: string) {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  return res.json()
}

export async function updateTodo(id: number, text: string, completed: boolean) {
  const res = await fetch("/api/todos", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, text, completed }),
  })
  return res.json()
}

export async function deleteTodo(id: number) {
  const res = await fetch("/api/todos", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  })
  return res.json()
}
