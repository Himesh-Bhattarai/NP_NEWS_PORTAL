import * as React from 'react'
import { Shield, Award, CheckCircle } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function TrustedSources({ className }) {
    const sources = [
        {
            name: "Reuters",
            description: "International news organization known for accuracy and impartiality",
            avatar: "/placeholder.svg?height=40&width=40&text=R",
            fallback: "RE",
            awards: 12,
            verified: true,
        },
        {
            name: "Associated Press",
            description: "Independent global news organization dedicated to factual reporting",
            avatar: "/placeholder.svg?height=40&width=40&text=AP",
            fallback: "AP",
            awards: 15,
            verified: true,
        },
        {
            name: "BBC",
            description: "British public service broadcaster with a reputation for balanced coverage",
            avatar: "/placeholder.svg?height=40&width=40&text=BBC",
            fallback: "BBC",
            awards: 10,
            verified: true,
        },
    ]

    return (
        <div className={className}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary">
                    Our Trusted Sources
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sources.map((source) => (
                    <Card key={source.name} className="rounded-none border-2 hover:border-primary transition-colors duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Avatar className="h-12 w-12 rounded-none">
                                    <AvatarImage src={source.avatar} alt={source.name} />
                                    <AvatarFallback className="rounded-none">{source.fallback}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-serif font-bold">{source.name}</h3>
                                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                        <Shield className="h-3 w-3 text-primary" />
                                        <span>Trusted Partner</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">{source.description}</p>

                            <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center space-x-1">
                                    <Award className="h-3 w-3 text-primary" />
                                    <span>{source.awards} Awards</span>
                                </div>

                                {source.verified && (
                                    <div className="flex items-center space-x-1">
                                        <CheckCircle className="h-3 w-3 text-primary" />
                                        <span>Verified</span>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}