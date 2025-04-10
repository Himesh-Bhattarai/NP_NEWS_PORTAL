import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Bell,
    Calendar,
    ChevronRight,
    Clock,
    FileText,
    Home,
    Search,
    TrendingUp,
    User,
    Video,
    Eye,
    MessageSquare,
    Share2,
    Bookmark,
    AlertCircle,
    Menu,
    Globe,
    CheckCircle,
    Shield,
    Award,
} from "lucide-react"
import FactCheckBadge from '@/components/ui/FactCheckBadge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'


export default function TrendingNews() {
  return (
    <>
          <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary">
                      Trending News
                  </h2>
                  <Button variant="ghost" size="sm" className="text-primary">
                      View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-6 bg-card p-1 border rounded-none w-full justify-start overflow-x-auto flex-nowrap">
                      <TabsTrigger value="all" className="rounded-none text-xs">
                          All
                      </TabsTrigger>
                      <TabsTrigger value="politics" className="rounded-none text-xs">
                          Politics
                      </TabsTrigger>
                      <TabsTrigger value="economy" className="rounded-none text-xs">
                          Economy
                      </TabsTrigger>
                      <TabsTrigger value="technology" className="rounded-none text-xs">
                          Technology
                      </TabsTrigger>
                      <TabsTrigger value="health" className="rounded-none text-xs">
                          Health
                      </TabsTrigger>
                      <TabsTrigger value="society" className="rounded-none text-xs">
                          Society
                      </TabsTrigger>
                      <TabsTrigger value="sports" className="rounded-none text-xs">
                          Sports
                      </TabsTrigger>
                  </TabsList>

                  <TabsContent defaultValue="all" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                              <Card
                                  key={item}
                                  className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group elegant-card rounded-none"
                              >
                                  <div className="relative h-40">
                                      <Image
                                          src={`/placeholder.svg?height=160&width=300&text=News+${item}`}
                                          alt={`News ${item}`}
                                          width={300}  // Must match the width in your URL
                                          height={160} // Must match the height in your URL
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                      />
                                      <div className="absolute top-2 left-2">
                                          <Badge className="text-xs rounded-none">
                                              {["Politics", "Economy", "Technology", "Health", "Society", "Sports"][item - 1]}
                                          </Badge>
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                          <div className="flex items-center text-white text-xs">
                                              <Clock className="h-3 w-3 mr-1" />
                                              <span>
                                                  {item} hour{item !== 1 ? "s" : ""} ago
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                                  <CardContent className="p-4">
                                      <h3 className="font-serif font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                          <Link href={`/article/${item + 10}`}>
                                              This is a sample news headline that spans multiple lines to show truncation
                                          </Link>
                                      </h3>
                                      <div className="flex items-center justify-between text-xs">
                                          <div className="flex items-center text-muted-foreground">
                                              <User className="h-3 w-3 mr-1" />
                                              <span>By Sarah Johnson</span>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                              <button className="text-muted-foreground hover:text-primary transition-colors">
                                                  <Share2 className="h-3 w-3" />
                                              </button>
                                              <button className="text-muted-foreground hover:text-primary transition-colors">
                                                  <Bookmark className="h-3 w-3" />
                                              </button>
                                          </div>
                                      </div>
                                      {item % 3 === 0 && <FactCheckBadge rating="Verified" className="mt-2" />}
                                  </CardContent>
                              </Card>
                          ))}
                      </div>
                  </TabsContent>

                  {["politics", "economy", "technology", "health", "society", "sports"].map((tab) => (
                      <TabsContent key={tab} className="mt-0">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {[1, 2, 3].map((item) => (
                                  <Card
                                      key={item}
                                      className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group elegant-card rounded-none"
                                  >
                                      <div className="relative h-40">
                                          <Image
                                              src={`/placeholder.svg?height=160&width=300&text=${tab}+${item}`}
                                              alt={`${tab} news ${item}`}
                                              width={300}
                                              height={160}
                                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                          />

                                          <div className="absolute top-2 left-2">
                                              <Badge className="text-xs rounded-none">
                                                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                              </Badge>
                                          </div>
                                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                              <div className="flex items-center text-white text-xs">
                                                  <Clock className="h-3 w-3 mr-1" />
                                                  <span>
                                                      {item} hour{item !== 1 ? "s" : ""} ago
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <CardContent className="p-4">
                                          <h3 className="font-serif font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                              <Link href={`/article/${tab}-${item}`}>
                                                  {tab.charAt(0).toUpperCase() + tab.slice(1)} news headline example #{item}
                                              </Link>
                                          </h3>
                                          <div className="flex items-center justify-between text-xs">
                                              <div className="flex items-center text-muted-foreground">
                                                  <User className="h-3 w-3 mr-1" />
                                                  <span>By Reporter Name</span>
                                              </div>
                                              <div className="flex items-center space-x-2">
                                                  <button className="text-muted-foreground hover:text-primary transition-colors">
                                                      <Share2 className="h-3 w-3" />
                                                  </button>
                                                  <button className="text-muted-foreground hover:text-primary transition-colors">
                                                      <Bookmark className="h-3 w-3" />
                                                  </button>
                                              </div>
                                          </div>
                                          {item === 1 && <FactCheckBadge rating="Verified" className="mt-2" />}
                                      </CardContent>
                                  </Card>
                              ))}
                          </div>
                      </TabsContent>
                  ))}
              </Tabs>
          </div> 
    </>
  )
}
