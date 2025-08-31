"use client";

import { useState } from "react";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";

export default function HomePage() {
  const [refresh, setRefresh] = useState(0);

  return (
      <div className="max-w-md mx-auto space-y-4">
        <TodoInput onAdd={() => setRefresh(refresh + 1)} />
        {/* re-render TodoList whenever refresh changes */}
        <TodoList key={refresh} />
      </div>
  );
}
