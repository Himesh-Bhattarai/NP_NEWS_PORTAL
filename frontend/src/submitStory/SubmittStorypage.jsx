import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload, AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SubmittStorypage() {
      const [isAnonymous, setIsAnonymous] = useState(false)

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Submit a Story</h1>
          <p className="text-muted-foreground">Share news and events happening around you</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertTitle>Before you submit</AlertTitle>
        <AlertDescription>
          Please ensure your story is accurate, factual, and includes verifiable information. All submissions are
          reviewed by our editorial team before publication.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Story Details</CardTitle>
              <CardDescription>Provide the details of your news story</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Headline/Title</Label>
                <Input id="title" placeholder="Enter a clear, concise headline" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="politics">Politics</SelectItem>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="society">Society</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Where did this happen?" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Provide a brief summary of the story (50-100 words)"
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Full Story</Label>
                <Textarea
                  id="content"
                  placeholder="Provide all the details of your story. Include who, what, when, where, why, and how."
                  className="min-h-[200px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sources">Sources & References</Label>
                <Textarea
                  id="sources"
                  placeholder="List your sources, references, or people you interviewed"
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="media">Media Files</Label>
                  <span className="text-xs text-muted-foreground">Upload photos or videos related to the story</span>
                </div>
                <div className="border-2 border-dashed rounded-md p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm mb-2">Drag & drop files here, or click to browse</p>
                  <p className="text-xs text-muted-foreground mb-4">Supports: JPG, PNG, MP4, MOV (Max 10MB each)</p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Submission Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="anonymous">Submit Anonymously</Label>
                  <p className="text-xs text-muted-foreground">Your name won't be displayed publicly</p>
                </div>
                <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="breaking">Mark as Breaking News</Label>
                  <p className="text-xs text-muted-foreground">For urgent, time-sensitive news</p>
                </div>
                <Switch id="breaking" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="factcheck">Request Fact-Check</Label>
                  <p className="text-xs text-muted-foreground">Our team will verify all claims</p>
                </div>
                <Switch id="factcheck" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Ensure all information is accurate and verifiable</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Provide sources for all claims and statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Respect privacy and obtain consent when necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Avoid sensationalism and misleading information</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Be objective and present multiple perspectives</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Switch id="terms" />
                <Label htmlFor="terms">
                  I agree to the{" "}
                  <Link href="/terms" className="underline">
                    terms and guidelines
                  </Link>
                </Label>
              </div>
              <Button className="w-full">Submit Story</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>

  )
}
