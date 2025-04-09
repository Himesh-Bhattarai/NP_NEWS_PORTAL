import * as React from 'react'
import { useState, useEffect, useRef } from "react"
import { AlertCircle, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BreakingNews() {
    const breakingNews = [
        "Major policy changes announced by the government",
        "Weather alert: Heavy rainfall expected in eastern regions",
        "National team qualifies for international tournament",
        "New economic reforms to be implemented next month",
        "Tech giant unveils revolutionary product at annual conference",
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const tickerRef = useRef(null)

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((current) => (current + 1) % breakingNews.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [isPaused, breakingNews.length])

    const nextNews = () => {
        setActiveIndex((current) => (current + 1) % breakingNews.length)
    }

    const prevNews = () => {
        setActiveIndex((current) => (current - 1 + breakingNews.length) % breakingNews.length)
    }

    return (
        <div className="bg-primary text-primary-foreground py-2 relative">
            <div className="container mx-auto px-4">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2 font-bold mr-4 shrink-0">
                        <AlertCircle className="h-4 w-4 animate-pulse" />
                        <span className="uppercase tracking-wider text-sm">Breaking News</span>
                    </div>

                    <div
                        className="overflow-hidden relative flex-1"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                        ref={tickerRef}
                    >
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {breakingNews.map((news, index) => (
                                <div key={index} className="w-full flex-shrink-0 whitespace-nowrap px-4">
                                    {news}
                                </div>
                            ))}
                        </div>

                        {isHovered && (
                            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 bg-gradient-to-l from-primary via-primary/90 to-transparent pl-8 pr-2">
                                <Button
                                    variant="ghost"
                                    size="default"
                                    className="h-6 w-6 rounded-none bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                                    onClick={() => setIsPaused(!isPaused)}
                                    aria-label={isPaused ? "Play news ticker" : "Pause news ticker"}
                                >
                                    {isPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="default"
                                    className="h-6 w-6 rounded-none bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                                    onClick={prevNews}
                                    aria-label="Previous news"
                                >
                                    <ChevronLeft className="h-3 w-3" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="default"
                                    className="h-6 w-6 rounded-none bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                                    onClick={nextNews}
                                    aria-label="Next news"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex items-center space-x-1 ml-4 shrink-0">
                        {breakingNews.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-none transition-all ${index === activeIndex ? "bg-primary-foreground" : "bg-primary-foreground/50"}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to news item ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}