"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { addTodo } from "@/lib/todoApi"

export default function TodoInput({ onAdd }: { onAdd: () => void }) {
  const [text, setText] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    await addTodo(text)
    setText("")
    onAdd() // refresh list
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
