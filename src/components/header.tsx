import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white p-4 shadow-sm flex items-center justify-between">
      <h1 className="text-xl font-bold">My To-Do App</h1>
      <nav>
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black p-4">
          Home
        </Link>
        <Link href="/todos" className="text-sm font-medium text-gray-600 hover:text-black p-4">
          Todos
        </Link>
        <Link href="/counter" className="text-sm font-medium text-gray-600 hover:text-black p-4">
          Counter
        </Link>
      </nav>
    </header>
  )
}
