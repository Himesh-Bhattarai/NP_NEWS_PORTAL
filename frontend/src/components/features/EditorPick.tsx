
import Link from 'next/link'
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Clock} from "lucide-react"
import FactCheckBadge from '@/components/ui/FactCheckBadge'
export default function EditorPick() {
  return (
    <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group elegant-card rounded-none">
                  <div className="relative">
                      <img
                          src="/placeholder.svg?height=300&width=600&text=Featured"
                          alt="Featured story"
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                          <Badge className="bg-primary hover:bg-primary rounded-none">Politics</Badge>
                      </div>
                  </div>
                  <CardContent className="p-4">
                      <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          <Link href="/article/1">Major Policy Changes Announced by Government</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          The government has announced significant policy changes that will impact various sectors of the economy and
                          society.
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Author" />
                                  <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                              <span>John Doe</span>
                          </div>
                          <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>2 hours ago</span>
                          </div>
                      </div>
                      <FactCheckBadge rating="Verified" className="mt-2" />
                  </CardContent>
              </Card>

              <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 group">
                          <div className="h-16 w-16 rounded-none overflow-hidden shrink-0">
                              <img
                                  src={`/placeholder.svg?height=64&width=64&text=News+${item}`}
                                  alt={`News ${item}`}
                                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                          </div>
                          <div>
                              <Badge variant="outline" className="mb-1 text-xs rounded-none">
                                  {["Economy", "Technology", "Health"][item - 1]}
                              </Badge>
                              <h4 className="font-serif font-medium text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                                  <Link href={`/article/${item + 1}`}>
                                      {item === 1 && "Economic Growth Exceeds Expectations in Q2"}
                                      {item === 2 && "New Technology Breakthrough in Renewable Energy"}
                                      {item === 3 && "Health Officials Release Updated Guidelines"}
                                  </Link>
                              </h4>
                              <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>{item * 3} hours ago</span>
                              </div>
                              {item === 2 && <FactCheckBadge rating="Verified" className="mt-1" />}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
   </>
  )
}
