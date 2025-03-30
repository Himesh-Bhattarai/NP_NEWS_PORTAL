import * as React from 'react'
import { useState, useEffect } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Clock, MessageSquare, Share2, ThumbsUp, User, Shield } from "lucide-react"

export default function HomeSection() {
    const featuredStories = [
        {
            id: 1,
            title: "Major Breakthrough in Renewable Energy Technology",
            description: "Scientists announce a significant advancement that could revolutionize how we harness solar power and transform the global energy landscape.",
            category: "Technology",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+1",
            author: "Sarah Johnson",
            time: "2 hours ago",
            comments: 24,
            likes: 156,
            verified: true,
        },
        {
            id: 2,
            title: "Global Economic Summit Addresses Trade Challenges",
            description: "World leaders gather to discuss solutions to ongoing supply chain disruptions and trade barriers affecting international commerce.",
            category: "Economy",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+2",
            author: "Michael Chen",
            time: "5 hours ago",
            comments: 18,
            likes: 92,
            verified: false,
        },
        {
            id: 3,
            title: "Healthcare Reform Bill Passes Final Vote",
            description: "Landmark legislation set to transform the national healthcare system after years of debate and political negotiations.",
            category: "Politics",
            image: "/placeholder.svg?height=600&width=1200&text=Featured+3",
            author: "Jessica Williams",
            time: "8 hours ago",
            comments: 47,
            likes: 215,
            verified: true,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoplay, setIsAutoplay] = useState(true)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        if (isAutoplay) {
            const interval = setInterval(() => {
                nextSlide()
            }, 7000)
            return () => clearInterval(interval)
        }
    }, [isAutoplay, activeIndex])

    const goToSlide = (index) => {
        if (isTransitioning || index === activeIndex) return

        setIsTransitioning(true)
        setActiveIndex(index)
        setIsAutoplay(false)

        setTimeout(() => {
            setIsTransitioning(false)
        }, 500)
    }

    const nextSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setActiveIndex((current) => (current + 1) % featuredStories.length)

        setTimeout(() => {
            setIsTransitioning(false)
        }, 500)
    }

    const prevSlide = () => {
        if (isTransitioning) return

        setIsTransitioning(true)
        setActiveIndex((current) => (current - 1 + featuredStories.length) % featuredStories.length)

        setTimeout(() => {
            setIsTransitioning(false)
        }, 500)
    }

    return (
        <section className="py-6 bg-card">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-none shadow-xl">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {featuredStories.map((story) => (
                            <div key={story.id} className="w-full flex-shrink-0">
                                <div className="relative h-[400px] md:h-[500px]">
                                    <img
                                        src={story.image || "/placeholder.svg"}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4">
                                        <Badge className="mb-3 bg-primary hover:bg-primary/90 rounded-none">{story.category}</Badge>
                                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                                            {story.title}
                                        </h2>
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
                                            {story.verified && (
                                                <div className="flex items-center gap-2">
                                                    <Shield className="h-4 w-4 text-white" />
                                                    <span>Verified</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-none">
                                                Read Full Story
                                            </Button>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-none"
                                            >
                                                <Share2 className="h-4 w-4 mr-2" />
                                                Share
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-white/20 rounded-none h-10 w-10 backdrop-blur-sm"
                        onClick={prevSlide}
                        disabled={isTransitioning}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-white/20 rounded-none h-10 w-10 backdrop-blur-sm"
                        onClick={nextSlide}
                        disabled={isTransitioning}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                        {featuredStories.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2.5 rounded-none transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-white/60 hover:bg-white/80"}`}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}