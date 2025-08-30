import Layout from "@/components/layout"
import TodoInput from "@/components/todo-input"
import TodoList from "@/components/todo-list"

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-md mx-auto space-y-4">
        <TodoInput />
        <TodoList />
      </div>
    </Layout>
  )
}
