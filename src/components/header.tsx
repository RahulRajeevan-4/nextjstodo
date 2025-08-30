import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white p-4 shadow-sm flex items-center justify-between">
      <h1 className="text-xl font-bold">My To-Do App</h1>
      <nav>
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black">
          Home
        </Link>
      </nav>
    </header>
  )
}
