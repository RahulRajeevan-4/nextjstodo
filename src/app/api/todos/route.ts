import { NextResponse } from "next/server"

// In-memory todo list
let todos = [
  { id: 1, text: "Finish Next.js project", completed: false },
  { id: 2, text: "Read about shadcn/ui", completed: true },
]

// GET /api/todos → fetch all todos
export async function GET() {
  return NextResponse.json(todos)
}

// POST /api/todos → add a new todo
export async function POST(request: Request) {
  const body = await request.json()
  const newTodo = {
    id: Date.now(),
    text: body.text,
    completed: false,
  }
  todos.push(newTodo)
  return NextResponse.json(newTodo, { status: 201 })
}

// PUT /api/todos → update an existing todo
export async function PUT(request: Request) {
  const body = await request.json()
  const { id, text, completed } = body

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text, completed } : todo
  )

  return NextResponse.json({ success: true })
}

// DELETE /api/todos → delete a todo
export async function DELETE(request: Request) {
  const body = await request.json()
  const { id } = body

  todos = todos.filter((todo) => todo.id !== id)

  return NextResponse.json({ success: true })
}
