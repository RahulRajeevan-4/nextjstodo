import { ReactNode } from "react"
import Header from "./header"

export default function Layout({ children }: { children: ReactNode }) {
  // For consistent look 
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>

      <main className="flex-1 container mx-auto p-6">{children}</main>

      <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
        © 2025 My To-Do App
      </footer>
    </div>
  )
}
