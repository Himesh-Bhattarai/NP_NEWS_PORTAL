import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ThumbsUp, MessageSquare } from "lucide-react"

export default function FeaturedNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Featured news"
              width={800}
              height={400}
              className="w-full object-cover h-[300px] md:h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <Badge className="w-fit mb-2" variant="secondary">
                Featured Investigation
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                The Impact of Climate Change on Local Agriculture
              </h3>
              <p className="text-white/80 mb-4 line-clamp-2">
                An in-depth look at how changing weather patterns are affecting farmers across the country
              </p>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>2 hours ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>243</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>42</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Live Reports</h2>
        <div className="space-y-4 flex-1">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row md:flex-col">
                <Image
                  src={`/placeholder.svg?height=120&width=200&text=Live`}
                  alt="Live report"
                  width={200}
                  height={120}
                  className="object-cover h-[120px] w-full sm:w-[120px] md:w-full"
                />
                <div className="p-3">
                  <Badge variant="destructive" className="mb-2">
                    LIVE
                  </Badge>
                  <h3 className="font-medium line-clamp-2 mb-1">
                    Traffic update: Major congestion on highway due to accident
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Reporting now</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

