import { Card, CardContent } from "@/components/ui/card"

const todos = [
  { id: 1, text: "Finish Next.js project" },
  { id: 2, text: "Read about shadcn/ui" },
  { id: 3, text: "Go for a walk" },
]

export default function TodoList() {
  return (
    <div className="space-y-2 mt-4">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <CardContent className="p-4">
            <p>{todo.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
