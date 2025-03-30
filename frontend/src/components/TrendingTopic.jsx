import * as React from 'react'
import { useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function TrendingTopic({ className }) {
    const topics = [
        { id: 1, name: "Climate Change", count: 243 },
        { id: 2, name: "Artificial Intelligence", count: 187 },
        { id: 3, name: "Cryptocurrency", count: 156 },
        { id: 4, name: "Space Exploration", count: 132 },
        { id: 5, name: "Healthcare Reform", count: 118 },
        { id: 6, name: "Remote Work", count: 97 },
        { id: 7, name: "Renewable Energy", count: 89 },
        { id: 8, name: "Data Privacy", count: 76 },
    ]

    const [hoveredTopic, setHoveredTopic] = useState(null)

    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Trending Topics</h2>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                    View All <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
            </div>

            <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                    <Badge
                        key={topic.id}
                        variant="outline"
                        className={`px-3 py-2 cursor-pointer transition-all duration-300 ${hoveredTopic === topic.id
                                ? "bg-primary text-primary-foreground scale-105"
                                : "hover:bg-primary/10"
                            }`}
                        onMouseEnter={() => setHoveredTopic(topic.id)}
                        onMouseLeave={() => setHoveredTopic(null)}
                    >
                        {topic.name}
                        <span
                            className={`ml-1.5 text-xs ${hoveredTopic === topic.id
                                    ? "text-primary-foreground/80"
                                    : "text-muted-foreground"
                                }`}
                        >
                            {topic.count}
                        </span>
                    </Badge>
                ))}
            </div>
        </div>
    )
}