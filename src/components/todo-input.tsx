import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TodoInput() {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Add a new task..." />
      <Button>Add</Button>
    </div>
  )
}
