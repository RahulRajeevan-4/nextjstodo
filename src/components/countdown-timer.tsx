"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CountdownTimerProps {
  initialSeconds: number
}

export default function CountdownTimer({ initialSeconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isActive, timeLeft])

  function resetTimer() {
    setTimeLeft(initialSeconds)
    setIsActive(false)
  }

  // Format time as mm:ss
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <Card className="max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <div className="text-4xl font-bold">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setIsActive(true)} disabled={isActive || timeLeft === 0}>
            Start
          </Button>
          <Button variant="secondary" onClick={() => setIsActive(false)} disabled={!isActive}>
            Pause
          </Button>
          <Button variant="destructive" onClick={resetTimer}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
