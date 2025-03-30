import * as React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "../ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs"
import {BarChart3, BookOpen, Calendar, CheckCircle, Clock, Edit, Eye, FileText, Home, Image, MessageSquare,PenTool,Plus,Settings,ThumbsUp,
AlertCircle,
    Bell,
    Search,
    MoreHorizontal,
    ChevronRight,
    Mic,
    Video,
    Users,
    TrendingUp,
    Zap,
    Shield,
    Award,
} from "lucide-react"
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar"
import {Badge} from "../ui/badge"
import {Progress} from "../ui/progress"
import {Separator} from "../ui/separator"
import {Switch} from "../ui/switch"

export default function ReporterPage() {
  return (
   <>
          <div className="min-h-screen bg-background">
              {/* Header */}
              <header className="bg-card shadow-sm sticky top-0 z-10">
                  <div className="container mx-auto px-4 py-3">
                      <div className="flex items-center justify-between">
                          <Link href="/" className="flex items-center space-x-2">
                              <div className="bg-primary text-primary-foreground p-2 rounded-none">
                                  <FileText className="h-6 w-6" />
                              </div>
                              <div>
                                  <span className="text-xl font-serif font-bold">CHRONICLE</span>
                                  <span className="text-xs block text-muted-foreground">Reporter Dashboard</span>
                              </div>
                          </Link>

                          <div className="flex items-center space-x-4">
                              <div className="relative hidden md:block">
                                  <input
                                      type="text"
                                      placeholder="Search articles..."
                                      className="w-64 py-2 pl-10 pr-4 text-sm bg-background border border-input rounded-none focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-transparent"
                                  />
                                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              </div>

                              <Button variant="outline" size="icon" className="relative rounded-none">
                                  <Bell className="h-5 w-5" />
                                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                      3
                                  </span>
                              </Button>

                              <div className="flex items-center space-x-2">
                                  <Avatar>
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reporter" />
                                      <AvatarFallback>JD</AvatarFallback>
                                  </Avatar>
                                  <div className="hidden md:block">
                                      <p className="text-sm font-medium">John Doe</p>
                                      <p className="text-xs text-muted-foreground">Senior Reporter</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>

              <div className="container mx-auto px-4 py-8">
                  <div className="flex flex-col md:flex-row gap-6">
                      {/* Sidebar */}
                      <aside className="w-full md:w-64 shrink-0">
                          <Card className="shadow-sm rounded-none">
                              <CardContent className="p-4">
                                  <div className="space-y-1">
                                      <Link
                                          href="/reporter-dashboard"
                                          className="flex items-center space-x-2 p-2 bg-primary/10 text-primary rounded-none"
                                      >
                                          <Home className="h-4 w-4" />
                                          <span>Dashboard</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/new-article"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <PenTool className="h-4 w-4" />
                                          <span>New Article</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/my-articles"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <FileText className="h-4 w-4" />
                                          <span>My Articles</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/analytics"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <BarChart3 className="h-4 w-4" />
                                          <span>Analytics</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/media"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <Image className="h-4 w-4" />
                                          <span>Media Library</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/comments"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <MessageSquare className="h-4 w-4" />
                                          <span>Comments</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/fact-check"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <Shield className="h-4 w-4" />
                                          <span>Fact Checking</span>
                                      </Link>
                                      <Link
                                          href="/reporter-dashboard/settings"
                                          className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                      >
                                          <Settings className="h-4 w-4" />
                                          <span>Settings</span>
                                      </Link>
                                  </div>
                              </CardContent>
                          </Card>

                          <Card className="mt-4 shadow-sm rounded-none">
                              <CardHeader className="pb-2">
                                  <CardTitle className="text-base font-serif">Reporter Status</CardTitle>
                              </CardHeader>
                              <CardContent className="pb-4">
                                  <div className="flex items-center space-x-3 mb-4">
                                      <Avatar className="h-12 w-12">
                                          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Reporter" />
                                          <AvatarFallback>JD</AvatarFallback>
                                      </Avatar>
                                      <div>
                                          <p className="font-medium">John Doe</p>
                                          <div className="flex items-center space-x-1">
                                              <Badge variant="secondary" className="text-xs rounded-none">
                                                  Verified Reporter
                                              </Badge>
                                              <CheckCircle className="h-3 w-3 text-green-500" />
                                          </div>
                                      </div>
                                  </div>

                                  <div className="space-y-3">
                                      <div>
                                          <div className="flex items-center justify-between mb-1">
                                              <p className="text-xs text-muted-foreground">Reporter Score</p>
                                              <p className="text-xs font-medium">4.8/5.0</p>
                                          </div>
                                          <Progress value={96} className="h-1.5" />
                                      </div>
                                      <div>
                                          <div className="flex items-center justify-between mb-1">
                                              <p className="text-xs text-muted-foreground">Articles Published</p>
                                              <p className="text-xs font-medium">24</p>
                                          </div>
                                      </div>
                                      <div>
                                          <div className="flex items-center justify-between mb-1">
                                              <p className="text-xs text-muted-foreground">Total Views</p>
                                              <p className="text-xs font-medium">12.5K</p>
                                          </div>
                                      </div>
                                      <div>
                                          <div className="flex items-center justify-between mb-1">
                                              <p className="text-xs text-muted-foreground">Engagement Rate</p>
                                              <p className="text-xs font-medium">8.2%</p>
                                          </div>
                                      </div>
                                      <div>
                                          <div className="flex items-center justify-between mb-1">
                                              <p className="text-xs text-muted-foreground">Fact-Check Score</p>
                                              <p className="text-xs font-medium">97%</p>
                                          </div>
                                          <Progress value={97} className="h-1.5" />
                                      </div>
                                  </div>

                                  <Separator className="my-4" />

                                  <div className="space-y-2">
                                      <p className="text-xs font-medium">Upcoming Deadlines</p>
                                      <div className="bg-amber-50 dark:bg-amber-950/30 p-2 rounded-none border border-amber-200 dark:border-amber-800 flex items-start space-x-2">
                                          <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                                          <div>
                                              <p className="text-xs font-medium">Tech Conference Report</p>
                                              <p className="text-xs text-muted-foreground">Due in 2 days</p>
                                          </div>
                                      </div>
                                  </div>
                              </CardContent>
                          </Card>
                      </aside>

                      {/* Main Content */}
                      <main className="flex-1">
                          <div className="grid gap-6">
                              {/* Welcome Card */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <div className="flex items-center justify-between">
                                          <div>
                                              <CardTitle className="font-serif">Welcome Back, John!</CardTitle>
                                              <CardDescription>Tuesday, May 16, 2023</CardDescription>
                                          </div>
                                          <Button className="rounded-none">
                                              <Plus className="h-4 w-4 mr-2" />
                                              New Article
                                          </Button>
                                      </div>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-none border border-blue-100 dark:border-blue-900">
                                              <div className="flex items-center justify-between mb-2">
                                                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-none">
                                                      <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                  </div>
                                                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Articles</span>
                                              </div>
                                              <p className="text-2xl font-bold">24</p>
                                              <p className="text-sm text-muted-foreground">Total published</p>
                                          </div>
                                          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-none border border-green-100 dark:border-green-900">
                                              <div className="flex items-center justify-between mb-2">
                                                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-none">
                                                      <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                  </div>
                                                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Views</span>
                                              </div>
                                              <p className="text-2xl font-bold">12.5K</p>
                                              <p className="text-sm text-muted-foreground">Total article views</p>
                                          </div>
                                          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-none border border-purple-100 dark:border-purple-900">
                                              <div className="flex items-center justify-between mb-2">
                                                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-none">
                                                      <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                                  </div>
                                                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Comments</span>
                                              </div>
                                              <p className="text-2xl font-bold">342</p>
                                              <p className="text-sm text-muted-foreground">Reader engagement</p>
                                          </div>
                                          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-none border border-amber-100 dark:border-amber-900">
                                              <div className="flex items-center justify-between mb-2">
                                                  <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-none">
                                                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                                  </div>
                                                  <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">Pending</span>
                                              </div>
                                              <p className="text-2xl font-bold">3</p>
                                              <p className="text-sm text-muted-foreground">Awaiting approval</p>
                                          </div>
                                      </div>
                                  </CardContent>
                              </Card>

                              {/* New Feature: Content Creation Tools */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <CardTitle className="font-serif">Quick Content Creation</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                          <Button
                                              variant="outline"
                                              className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                          >
                                              <PenTool className="h-8 w-8" />
                                              <span>Write Article</span>
                                          </Button>
                                          <Button
                                              variant="outline"
                                              className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                          >
                                              <Mic className="h-8 w-8" />
                                              <span>Record Audio</span>
                                          </Button>
                                          <Button
                                              variant="outline"
                                              className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                          >
                                              <Video className="h-8 w-8" />
                                              <span>Create Video</span>
                                          </Button>
                                      </div>
                                  </CardContent>
                              </Card>

                              {/* New Feature: Fact Checking Tools */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <CardTitle className="font-serif">Fact Checking Tools</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="space-y-4">
                                          <div className="flex items-center justify-between p-4 border rounded-none">
                                              <div className="flex items-center space-x-3">
                                                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                  <div>
                                                      <p className="font-medium">AI-Powered Fact Verification</p>
                                                      <p className="text-sm text-muted-foreground">Automatically verify facts in your articles</p>
                                                  </div>
                                              </div>
                                              <Switch />
                                          </div>
                                          <div className="flex items-center justify-between p-4 border rounded-none">
                                              <div className="flex items-center space-x-3">
                                                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                  <div>
                                                      <p className="font-medium">Expert Review Network</p>
                                                      <p className="text-sm text-muted-foreground">Connect with subject matter experts</p>
                                                  </div>
                                              </div>
                                              <Button variant="outline" className="rounded-none">
                                                  Connect
                                              </Button>
                                          </div>
                                          <div className="flex items-center justify-between p-4 border rounded-none">
                                              <div className="flex items-center space-x-3">
                                                  <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                                  <div>
                                                      <p className="font-medium">Source Credibility Checker</p>
                                                      <p className="text-sm text-muted-foreground">Verify the reliability of your sources</p>
                                                  </div>
                                              </div>
                                              <Button variant="outline" className="rounded-none">
                                                  Check Sources
                                              </Button>
                                          </div>
                                      </div>
                                  </CardContent>
                              </Card>

                              {/* Recent Articles */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <div className="flex items-center justify-between">
                                          <CardTitle className="font-serif">Recent Articles</CardTitle>
                                          <Button variant="link" size="sm" className="text-primary">
                                              View All <ChevronRight className="h-4 w-4 ml-1" />
                                          </Button>
                                      </div>
                                  </CardHeader>
                                  <CardContent>
                                      <Tabs defaultValue="published">
                                          <TabsList className="mb-4">
                                              <TabsTrigger value="published">Published</TabsTrigger>
                                              <TabsTrigger value="drafts">Drafts</TabsTrigger>
                                              <TabsTrigger value="pending">Pending Review</TabsTrigger>
                                          </TabsList>

                                          <TabsContent value="published" className="mt-0">
                                              <div className="space-y-4">
                                                  {[1, 2, 3].map((item) => (
                                                      <div
                                                          key={item}
                                                          className="flex items-start space-x-4 p-4 border rounded-none hover:bg-muted/50 transition-colors"
                                                      >
                                                          <div className="h-20 w-20 rounded-none overflow-hidden shrink-0">
                                                              <img
                                                                  src={`/placeholder.svg?height=80&width=80&text=Article+${item}`}
                                                                  alt={`Article ${item}`}
                                                                  className="h-full w-full object-cover"
                                                              />
                                                          </div>
                                                          <div className="flex-1 min-w-0">
                                                              <div className="flex items-center justify-between mb-1">
                                                                  <Badge className="text-xs rounded-none">
                                                                      {["Politics", "Technology", "Economy"][item - 1]}
                                                                  </Badge>
                                                                  <div className="flex items-center">
                                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                          <Edit className="h-4 w-4" />
                                                                      </Button>
                                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                          <MoreHorizontal className="h-4 w-4" />
                                                                      </Button>
                                                                  </div>
                                                              </div>
                                                              <h4 className="font-medium text-sm mb-1 truncate">
                                                                  {item === 1 && "How Technology is Changing the Way We Work and Live"}
                                                                  {item === 2 && "The Future of Artificial Intelligence in Healthcare"}
                                                                  {item === 3 && "Global Economic Trends to Watch in 2023"}
                                                              </h4>
                                                              <div className="flex items-center text-xs text-muted-foreground mb-2">
                                                                  <Calendar className="h-3 w-3 mr-1" />
                                                                  <span>Published May {12 + item}, 2023</span>
                                                                  <span className="mx-2">•</span>
                                                                  <BookOpen className="h-3 w-3 mr-1" />
                                                                  <span>5 min read</span>
                                                              </div>
                                                              <div className="flex items-center space-x-4 text-xs">
                                                                  <div className="flex items-center">
                                                                      <Eye className="h-3 w-3 mr-1 text-muted-foreground" />
                                                                      <span>{1.2 - item * 0.2}K views</span>
                                                                  </div>
                                                                  <div className="flex items-center">
                                                                      <ThumbsUp className="h-3 w-3 mr-1 text-muted-foreground" />
                                                                      <span>{45 - item * 5} likes</span>
                                                                  </div>
                                                                  <div className="flex items-center">
                                                                      <MessageSquare className="h-3 w-3 mr-1 text-muted-foreground" />
                                                                      <span>{12 - item} comments</span>
                                                                  </div>
                                                                  <div className="flex items-center">
                                                                      <Shield className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                                                      <span className="text-green-600 dark:text-green-400">Verified</span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  ))}
                                              </div>
                                          </TabsContent>

                                          <TabsContent value="drafts" className="mt-0">
                                              <div className="space-y-4">
                                                  {[1, 2].map((item) => (
                                                      <div
                                                          key={item}
                                                          className="flex items-start space-x-4 p-4 border rounded-none hover:bg-muted/50 transition-colors"
                                                      >
                                                          <div className="h-20 w-20 rounded-none overflow-hidden shrink-0 bg-muted flex items-center justify-center">
                                                              <FileText className="h-8 w-8 text-muted-foreground" />
                                                          </div>
                                                          <div className="flex-1 min-w-0">
                                                              <div className="flex items-center justify-between mb-1">
                                                                  <Badge variant="outline" className="text-xs rounded-none">
                                                                      Draft
                                                                  </Badge>
                                                                  <div className="flex items-center">
                                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                          <Edit className="h-4 w-4" />
                                                                      </Button>
                                                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                          <MoreHorizontal className="h-4 w-4" />
                                                                      </Button>
                                                                  </div>
                                                              </div>
                                                              <h4 className="font-medium text-sm mb-1 truncate">
                                                                  {item === 1 && "Draft: The Future of Sustainable Energy"}
                                                                  {item === 2 && "Draft: Education Reform Proposals Analysis"}
                                                              </h4>
                                                              <div className="flex items-center text-xs text-muted-foreground mb-2">
                                                                  <Clock className="h-3 w-3 mr-1" />
                                                                  <span>
                                                                      Last edited {item} day{item !== 1 ? "s" : ""} ago
                                                                  </span>
                                                              </div>
                                                              <div className="flex items-center space-x-4 text-xs">
                                                                  <div>
                                                                      <p className="text-xs text-muted-foreground mb-1">Completion</p>
                                                                      <div className="flex items-center space-x-2">
                                                                          <Progress value={item === 1 ? 65 : 40} className="h-1.5 w-24" />
                                                                          <span className="text-xs">{item === 1 ? "65%" : "40%"}</span>
                                                                      </div>
                                                                  </div>
                                                                  <Button variant="outline" size="sm" className="ml-auto text-xs h-7 rounded-none">
                                                                      Continue Editing
                                                                  </Button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  ))}
                                              </div>
                                          </TabsContent>

                                          <TabsContent value="pending" className="mt-0">
                                              <div className="space-y-4">
                                                  <div className="flex items-start space-x-4 p-4 border rounded-none hover:bg-muted/50 transition-colors">
                                                      <div className="h-20 w-20 rounded-none overflow-hidden shrink-0">
                                                          <img
                                                              src="/placeholder.svg?height=80&width=80&text=Pending"
                                                              alt="Pending article"
                                                              className="h-full w-full object-cover"
                                                          />
                                                      </div>
                                                      <div className="flex-1 min-w-0">
                                                          <div className="flex items-center justify-between mb-1">
                                                              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 text-xs rounded-none">
                                                                  Under Review
                                                              </Badge>
                                                              <div className="flex items-center">
                                                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                      <Edit className="h-4 w-4" />
                                                                  </Button>
                                                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                      <MoreHorizontal className="h-4 w-4" />
                                                                  </Button>
                                                              </div>
                                                          </div>
                                                          <h4 className="font-medium text-sm mb-1 truncate">
                                                              Breaking: Major Policy Change Announced
                                                          </h4>
                                                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                                                              <Calendar className="h-3 w-3 mr-1" />
                                                              <span>Submitted May 15, 2023</span>
                                                          </div>
                                                          <div className="flex items-center space-x-2 text-xs bg-amber-50 dark:bg-amber-950/30 p-2 rounded-none border border-amber-200 dark:border-amber-800">
                                                              <AlertCircle className="h-3 w-3 text-amber-500" />
                                                              <span>Editor requested additional sources and fact verification</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </TabsContent>
                                      </Tabs>
                                  </CardContent>
                              </Card>

                              {/* New Feature: Trending Topics for Reporters */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <div className="flex items-center justify-between">
                                          <CardTitle className="font-serif">Trending Topics to Cover</CardTitle>
                                          <Button variant="outline" size="sm" className="rounded-none">
                                              <TrendingUp className="h-4 w-4 mr-2" />
                                              View Analytics
                                          </Button>
                                      </div>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="space-y-4">
                                          {[
                                              { topic: "AI Regulation", growth: "+156%", category: "Technology" },
                                              { topic: "Climate Summit", growth: "+89%", category: "Environment" },
                                              { topic: "Healthcare Reform", growth: "+67%", category: "Politics" },
                                          ].map((item, index) => (
                                              <div key={index} className="flex items-center justify-between p-3 border rounded-none">
                                                  <div className="flex items-center space-x-3">
                                                      <div className="bg-primary/10 p-2 rounded-none">
                                                          <Zap className="h-5 w-5 text-primary" />
                                                      </div>
                                                      <div>
                                                          <p className="font-medium">{item.topic}</p>
                                                          <p className="text-xs text-muted-foreground">{item.category}</p>
                                                      </div>
                                                  </div>
                                                  <div className="flex items-center space-x-3">
                                                      <span className="text-green-600 dark:text-green-400 font-medium">{item.growth}</span>
                                                      <Button variant="outline" size="sm" className="rounded-none">
                                                          <PenTool className="h-3 w-3 mr-1" />
                                                          Write
                                                      </Button>
                                                  </div>
                                              </div>
                                          ))}
                                      </div>
                                  </CardContent>
                              </Card>

                              {/* Editorial Calendar */}
                              <Card className="shadow-sm rounded-none">
                                  <CardHeader>
                                      <div className="flex items-center justify-between">
                                          <CardTitle className="font-serif">Editorial Calendar</CardTitle>
                                          <Button variant="outline" size="sm" className="rounded-none">
                                              <Plus className="h-4 w-4 mr-2" />
                                              Add Event
                                          </Button>
                                      </div>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="space-y-4">
                                          <div className="flex items-center space-x-4">
                                              <div className="bg-primary/10 p-2 rounded-none">
                                                  <Calendar className="h-5 w-5 text-primary" />
                                              </div>
                                              <div className="flex-1">
                                                  <div className="flex items-center justify-between">
                                                      <h4 className="font-medium text-sm">Tech Conference Coverage</h4>
                                                      <Badge variant="outline" className="text-xs rounded-none">
                                                          May 18, 2023
                                                      </Badge>
                                                  </div>
                                                  <p className="text-xs text-muted-foreground">Assigned to you and 2 others</p>
                                              </div>
                                          </div>
                                          <div className="flex items-center space-x-4">
                                              <div className="bg-primary/10 p-2 rounded-none">
                                                  <Calendar className="h-5 w-5 text-primary" />
                                              </div>
                                              <div className="flex-1">
                                                  <div className="flex items-center justify-between">
                                                      <h4 className="font-medium text-sm">Interview with Industry Expert</h4>
                                                      <Badge variant="outline" className="text-xs rounded-none">
                                                          May 22, 2023
                                                      </Badge>
                                                  </div>
                                                  <p className="text-xs text-muted-foreground">Assigned to you</p>
                                              </div>
                                          </div>
                                          <div className="flex items-center space-x-4">
                                              <div className="bg-primary/10 p-2 rounded-none">
                                                  <Calendar className="h-5 w-5 text-primary" />
                                              </div>
                                              <div className="flex-1">
                                                  <div className="flex items-center justify-between">
                                                      <h4 className="font-medium text-sm">Monthly Editorial Meeting</h4>
                                                      <Badge variant="outline" className="text-xs rounded-none">
                                                          May 25, 2023
                                                      </Badge>
                                                  </div>
                                                  <p className="text-xs text-muted-foreground">All reporters</p>
                                              </div>
                                          </div>
                                      </div>
                                  </CardContent>
                                  <CardFooter className="border-t pt-4">
                                      <Button variant="link" size="sm" className="ml-auto">
                                          View Full Calendar
                                      </Button>
                                  </CardFooter>
                              </Card>
                          </div>
                      </main>
                  </div>
              </div>
          </div>
   </>
  )
}
