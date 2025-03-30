import * as React from 'react'
import { useState, useEffect } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Clock, MessageSquare, ThumbsUp, User } from "lucide-react"

export default function FeaturedCarousel() {
    const featuredStories = [
        {
            id: 1,
            title: "Major Breakthrough in Renewable Energy Technology",
            description: "Scientists announce a significant advancement that could revolutionize how we harness solar power.",
            category: "Technology",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+1",
            author: "Sarah Johnson",
            time: "2 hours ago",
            comments: 24,
            likes: 156,
        },
        {
            id: 2,
            title: "Global Economic Summit Addresses Trade Challenges",
            description: "World leaders gather to discuss solutions to ongoing supply chain disruptions and trade barriers.",
            category: "Economy",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+2",
            author: "Michael Chen",
            time: "5 hours ago",
            comments: 18,
            likes: 92,
        },
        {
            id: 3,
            title: "Healthcare Reform Bill Passes Final Vote",
            description: "Landmark legislation set to transform the national healthcare system after years of debate.",
            category: "Politics",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+3",
            author: "Jessica Williams",
            time: "8 hours ago",
            comments: 47,
            likes: 215,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoplay, setIsAutoplay] = useState(true)

    useEffect(() => {
        if (isAutoplay) {
            const interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % featuredStories.length)
            }, 7000)
            return () => clearInterval(interval)
        }
    }, [isAutoplay, featuredStories.length])

    const goToSlide = (index) => {
        setActiveIndex(index)
        setIsAutoplay(false)
    }

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % featuredStories.length)
        setIsAutoplay(false)
    }

    const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + featuredStories.length) % featuredStories.length)
        setIsAutoplay(false)
    }

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {featuredStories.map((story) => (
                        <div key={story.id} className="w-full flex-shrink-0">
                            <div className="relative h-[400px] md:h-[500px]">
                                <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4">
                                    <Badge className="mb-3">{story.category}</Badge>
                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{story.title}</h2>
                                    <p className="text-white/90 mb-4 hidden md:block">{story.description}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            <span>By {story.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{story.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{story.comments} comments</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ThumbsUp className="h-4 w-4" />
                                            <span>{story.likes} likes</span>
                                        </div>
                                    </div>
                                    <Button size="lg" className="mt-2">
                                        Read Full Story
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                {featuredStories.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-white/60"}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}