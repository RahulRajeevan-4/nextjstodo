"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Welcome Text */}
      <Card className="mb-10 shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome to my app
          </h1>
        </CardContent>
      </Card>

      {/* Paper Plane Animation */}
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: [ -200, 0, 200 ], y: [100, -50, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        className="text-6xl"
      >
        ✈️
      </motion.div>
    </div>
  )
}
