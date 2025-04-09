import * as React from 'react'
import {useState} from "react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ChevronRight, Clock, Play} from "lucide-react"

export default function VideoNewsSection() {
    const [hoveredVideo, setHoveredVideo] = useState(null)
  return (
  <>
          <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary">
                      Video News
                  </h2>
                  <Button variant="ghost" size="sm" className="text-primary">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                      className="relative rounded-lg overflow-hidden group cursor-pointer"
                      onMouseEnter={() => setHoveredVideo(0)}
                      onMouseLeave={() => setHoveredVideo(null)}
                  >
                      <img
                          src="/placeholder.svg?height=300&width=500&text=Featured+Video"
                          alt="Featured video"
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div
                              className={`h-16 w-16 rounded-full bg-primary/80 flex items-center justify-center transition-all duration-500 ${hoveredVideo === 0 ? "scale-110 bg-primary" : ""
                                  }`}
                          >
                              <Play className="h-8 w-8 text-white" />
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                          <Badge className="mb-2 bg-primary hover:bg-primary">Politics</Badge>
                          <h3 className="text-white font-bold mb-1">Press Conference: New Government Initiatives Announced</h3>
                          <div className="flex items-center text-white/80 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Live 2 hours ago</span>
                              <span className="mx-2">•</span>
                              <span>15:24</span>
                          </div>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                      {[1, 2, 3].map((item) => (
                          <div
                              key={item}
                              className="flex items-start space-x-3 group cursor-pointer"
                              onMouseEnter={() => setHoveredVideo(item)}
                              onMouseLeave={() => setHoveredVideo(null)}
                          >
                              <div className="relative h-20 w-32 rounded-lg overflow-hidden shrink-0">
                                  <img
                                      src={`/placeholder.svg?height=80&width=128&text=Video+${item}`}
                                      alt={`Video ${item}`}
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                      <div
                                          className={`h-8 w-8 rounded-full bg-primary/80 flex items-center justify-center transition-all duration-300 ${hoveredVideo === item ? "scale-125 bg-primary" : ""
                                              }`}
                                      >
                                          <Play className="h-4 w-4 text-white" />
                                      </div>
                                  </div>
                                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                                      {item + 2}:45
                                  </div>
                              </div>
                              <div>
                                  <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                                      {item === 1 && "Interview with Tech Industry Leader on Innovation"}
                                      {item === 2 && "Sports Highlights: Championship Finals"}
                                      {item === 3 && "Cultural Festival Celebrates Diversity"}
                                  </h4>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                      <Clock className="h-3 w-3 mr-1" />
                                      <span>{item * 5} hours ago</span>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

  </>
  )
}
