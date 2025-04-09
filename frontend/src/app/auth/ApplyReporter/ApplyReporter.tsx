import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ApplyReporterPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Become a Reporter</h1>
          <p className="text-muted-foreground">Apply for verified reporter status on NPWeb News</p>
        </div>
        <Button variant="ghost" asChild>
          <Link to="/ClientPage.jsx">← Back to Home</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Your contact number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Your current address" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nepal">Nepal</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Professional Background</CardTitle>
              <CardDescription>Tell us about your experience in journalism or related fields</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea
                  id="education"
                  placeholder="Your educational background, especially related to journalism, communications, or media"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employment">Current/Previous Employment</Label>
                <Textarea
                  id="employment"
                  placeholder="List your current and previous employers in journalism or media"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Areas of Specialization</Label>
                <Textarea
                  id="specialization"
                  placeholder="What topics do you specialize in? (e.g., politics, sports, technology)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/Work Samples</Label>
                <Textarea id="portfolio" placeholder="Links to your published work or portfolio" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <span className="text-xs text-muted-foreground">Upload your resume or CV</span>
                </div>
                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm mb-2">Drag & drop your resume here, or click to browse</p>
                  <p className="text-xs text-muted-foreground mb-4">Supports: PDF, DOC, DOCX (Max 5MB)</p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to be a reporter for NPWeb News?</Label>
                <Textarea
                  id="motivation"
                  placeholder="Tell us about your motivation and what you hope to contribute"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="references">References</Label>
                <Textarea
                  id="references"
                  placeholder="Provide professional references (name, organization, contact information)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="social">Social Media Profiles</Label>
                <Textarea
                  id="social"
                  placeholder="Links to your professional social media profiles (Twitter, LinkedIn, etc.)"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Reporter Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Verified Badge</p>
                    <p className="text-sm text-muted-foreground">
                      Get a verified reporter badge on your profile and articles
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Advanced Publishing Tools</p>
                    <p className="text-sm text-muted-foreground">Access to professional publishing and editing tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Priority Review</p>
                    <p className="text-sm text-muted-foreground">
                      Your submissions get priority review from our editorial team
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Analytics Dashboard</p>
                    <p className="text-sm text-muted-foreground">Detailed analytics on your articles' performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Community Recognition</p>
                    <p className="text-sm text-muted-foreground">Build your reputation as a trusted news source</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside text-sm">
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Submit Application</span>
                  <p className="ml-5 mt-1">Complete and submit this form with all required information</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Initial Review</span>
                  <p className="ml-5 mt-1">Our team reviews your application (1-3 business days)</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Interview</span>
                  <p className="ml-5 mt-1">Selected candidates will be invited for a virtual interview</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Background Check</span>
                  <p className="ml-5 mt-1">Verification of credentials and references</p>
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Final Decision</span>
                  <p className="ml-5 mt-1">Approval or rejection notification via email</p>
                </li>
              </ol>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Alert variant="outline" className="border-primary/50">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription className="text-xs">
                  All reporter applications are subject to thorough verification. Providing false information may result
                  in permanent disqualification.
                </AlertDescription>
              </Alert>
              <div className="flex items-center gap-2 text-sm">
                <Switch id="terms" />
                <Label htmlFor="terms">
                  I agree to the{" "}
                  <Link to ="/terms" className="underline">
                    terms and conditions
                  </Link>{" "}
                  and{" "}
                  <Link to ="/code-of-ethics" className="underline">
                    code of ethics
                  </Link>
                </Label>
              </div>
              <Button className="w-full">Submit Application</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

