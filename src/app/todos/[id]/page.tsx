export default function TodoPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-4 text-lg font-medium">
      Todo ID: {params.id}
    </div>
  )
}
