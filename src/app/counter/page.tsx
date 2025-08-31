import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <CountdownTimer initialSeconds={300} /> {/* 5 minutes */}
    </div>
  )
}
