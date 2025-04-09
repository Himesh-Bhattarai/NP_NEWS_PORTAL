import * as React from 'react'
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

export default function Audioplayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    // Replace with a real audio source URL
    const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    setIsPlaying(false)
                })
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted
        }
    }, [isMuted])

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }

    // Format time in MM:SS (with leading zeros if needed)
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    return (
        <div className="flex items-center space-x-2">
            <Button
                variant="ghost"
                size="default"
                className="h-8 w-8 rounded-full"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <div className="text-xs">
                <span className="font-medium">Live Radio</span>
                {duration > 0 && (
                    <span className="text-muted-foreground ml-2">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                )}
            </div>

            <Button
                variant="ghost"
                size="default"
                className="h-8 w-8 rounded-full"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>

            <audio
                ref={audioRef}
                src={audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="hidden"
            />
        </div>
    )
}
