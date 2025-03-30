import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Camera, Award } from "lucide-react"
import Link from "next/link"

export default function ContributionPanel() {
  return (
    <div className="container">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Got a Story?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Share your news, insights, and stories with our community. Become a contributor and help keep others informed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <FileText className="w-10 h-10 mx-auto mb-2 text-primary" />
            <CardTitle>Submit a Story</CardTitle>
            <CardDescription>Share news and events happening around you</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            Submit text, photos, and videos of newsworthy events. Our editors will review and publish verified content.
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/submit-story">Submit Now</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <Camera className="w-10 h-10 mx-auto mb-2 text-primary" />
            <CardTitle>Become a Reporter</CardTitle>
            <CardDescription>Apply for verified reporter status</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            Get verified as an official reporter. Gain access to special tools and features for professional journalism.
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/apply-reporter">Apply Now</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
            <CardTitle>Report Misinformation</CardTitle>
            <CardDescription>Help maintain accuracy and truth</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-muted-foreground">
            Spotted fake news or misinformation? Report it to our fact-checking team to help maintain journalistic
            integrity.
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/report-fake">Report</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

