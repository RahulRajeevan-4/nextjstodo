"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTodos, updateTodo, deleteTodo } from "@/lib/todoApi"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  async function fetchTodos() {
    const data = await getTodos()
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  async function handleToggle(todo: Todo) {
    await updateTodo(todo.id, todo.text, !todo.completed)
    fetchTodos()
  }

  async function handleDelete(id: number) {
    await deleteTodo(id)
    fetchTodos()
  }

  return (
    <div className="space-y-2 mt-4">
      {todos.map((todo) => (
        <Card key={todo.id} className="flex items-center justify-between p-4">
          <CardContent className="p-0">
            <p
              className={`${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </p>
          </CardContent>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={todo.completed ? "secondary" : "default"}
              onClick={() => handleToggle(todo)}
            >
              {todo.completed ? "Undo" : "Done"}
            </Button>
            <Button size="sm" variant="destructive" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
