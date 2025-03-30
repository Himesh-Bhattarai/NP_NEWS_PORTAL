import * as React from 'react'
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"

export default function PopularTags({ className }) {
    const tags = [
        { name: "Politics", count: 124 },
        { name: "Economy", count: 98 },
        { name: "Technology", count: 87 },
        { name: "Health", count: 76 },
        { name: "Sports", count: 65 },
        { name: "Entertainment", count: 54 },
        { name: "Science", count: 43 },
        { name: "Education", count: 32 },
        { name: "Environment", count: 28 },
        { name: "Culture", count: 21 },
    ]

    return (
        <Card className={`shadow-sm overflow-hidden ${className}`}>
            <CardContent className="p-0">
                <div className="p-4 bg-muted">
                    <h3 className="font-bold">Popular Tags</h3>
                </div>
                <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag.name}
                                variant="outline"
                                className="px-3 py-1 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                            >
                                {tag.name} <span className="ml-1 text-xs opacity-70">({tag.count})</span>
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}