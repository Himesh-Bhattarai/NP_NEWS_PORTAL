import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Bookmark,
    Clock,
    FileText,
    Flag,
    Heart,
    Home,
    MessageSquare,
    Settings,
    Share2,
    User,
    Bell,
    Search,
    Filter,
    ChevronRight,
    Shield,
    Zap,
    Newspaper,
    Headphones,
    Video,
    Mic,
    Save,
    Printer,
    Moon,
    Globe,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function ClinetPage() {

    return (
        <>
            <div className="min-h-screen bg-background">
                {/* Header */}
                <header className="bg-card shadow-sm sticky top-0 z-10">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center justify-between">
                            <Link to ="/" className="flex items-center space-x-2">
                                <div className="bg-primary text-primary-foreground p-2 rounded-none">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <div>
                                    <span className="text-xl font-serif font-bold">CHRONICLE</span>
                                    <span className="text-xs block text-muted-foreground">User Dashboard</span>
                                </div>
                            </Link>

                            <div className="flex items-center space-x-4">
                                <div className="relative hidden md:block">
                                    <input
                                        type="text"
                                        placeholder="Search news..."
                                        className="w-64 py-2 pl-10 pr-4 text-sm bg-background border border-input rounded-none focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-transparent"
                                    />
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                </div>

                                <Button variant="outline" size="sm" className="relative rounded-none">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                        2
                                    </span>
                                </Button>

                                <div className="flex items-center space-x-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium">Jane Doe</p>
                                        <p className="text-xs text-muted-foreground">Member</p>
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
                                            to = "/user-dashboard"
                                            className="flex items-center space-x-2 p-2 bg-primary/10 text-primary rounded-none"
                                        >
                                            <Home className="h-4 w-4" />
                                            <span>Dashboard</span>
                                        </Link>
                                        <Link
                                            to = "/user-dashboard/saved"
                                            className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                        >
                                            <Bookmark className="h-4 w-4" />
                                            <span>Saved Articles</span>
                                        </Link>
                                        <Link
                                            to = "/user-dashboard/comments"
                                            className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                        >
                                            <MessageSquare className="h-4 w-4" />
                                            <span>My Comments</span>
                                        </Link>
                                        <Link
                                            to = "/user-dashboard/liked"
                                            className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                        >
                                            <Heart className="h-4 w-4" />
                                            <span>Liked Articles</span>
                                        </Link>
                                        <Link
                                            to = "/user-dashboard/reports"
                                            className="flex items-center space-x-2 p-2 text-foreground hover:bg-muted rounded-none"
                                        >
                                            <Flag className="h-4 w-4" />
                                            <span>My Reports</span>
                                        </Link>
                                        <Link
                                            to = "/user-dashboard/settings"
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
                                    <CardTitle className="text-base font-serif">User Profile</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-4">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Jane Doe</p>
                                            <div className="flex items-center space-x-1">
                                                <Badge variant="secondary" className="text-xs rounded-none">
                                                    Regular User
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Member Since</p>
                                            <p className="font-medium">March 2023</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Articles Saved</p>
                                            <p className="font-medium">18</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Comments Posted</p>
                                            <p className="font-medium">32</p>
                                        </div>
                                    </div>

                                    <Separator className="my-4" />

                                    <div className="space-y-2">
                                        <p className="text-xs font-medium">Reading Preferences</p>
                                        <div className="flex flex-wrap gap-1">
                                            <Badge variant="outline" className="text-xs rounded-none">
                                                Technology
                                            </Badge>
                                            <Badge variant="outline" className="text-xs rounded-none">
                                                Health
                                            </Badge>
                                            <Badge variant="outline" className="text-xs rounded-none">
                                                Politics
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="mt-4 shadow-sm rounded-none">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base font-serif">Become a Reporter</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-4">
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Share your voice with our community. Apply to become a verified reporter.
                                    </p>
                                    <Button
                                        className="w-full rounded-none"
                                    >
                                    Apply Now</Button>
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
                                                <CardTitle className="font-serif">Welcome Back, Jane!</CardTitle>
                                                <CardDescription>Tuesday, May 16, 2023</CardDescription>
                                            </div>
                                            <Button className="rounded-none">
                                                <Bookmark className="h-4 w-4 mr-2" />
                                                Saved Articles
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-none border border-blue-100 dark:border-blue-900">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-none">
                                                        <Bookmark className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                    </div>
                                                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Saved</span>
                                                </div>
                                                <p className="text-2xl font-bold">18</p>
                                                <p className="text-sm text-muted-foreground">Articles saved</p>
                                            </div>
                                            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-none border border-green-100 dark:border-green-900">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-none">
                                                        <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                    </div>
                                                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Comments</span>
                                                </div>
                                                <p className="text-2xl font-bold">32</p>
                                                <p className="text-sm text-muted-foreground">Comments posted</p>
                                            </div>
                                            <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-none border border-purple-100 dark:border-purple-900">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-none">
                                                        <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                                    </div>
                                                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Likes</span>
                                                </div>
                                                <p className="text-2xl font-bold">45</p>
                                                <p className="text-sm text-muted-foreground">Articles liked</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* New Feature: Reading Experience Settings */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <CardTitle className="font-serif">Reading Experience</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-3 border rounded-none">
                                                <div className="flex items-center space-x-3">
                                                    <Moon className="h-5 w-5" />
                                                    <div>
                                                        <p className="font-medium">Dark Mode</p>
                                                        <p className="text-sm text-muted-foreground">Switch to dark theme for comfortable reading</p>
                                                    </div>
                                                </div>
                                                <Switch />
                                            </div>
                                            <div className="flex items-center justify-between p-3 border rounded-none">
                                                <div className="flex items-center space-x-3">
                                                    <Mic className="h-5 w-5" />
                                                    <div>
                                                        <p className="font-medium">Text-to-Speech</p>
                                                        <p className="text-sm text-muted-foreground">Listen to articles instead of reading</p>
                                                    </div>
                                                </div>
                                                <Switch />
                                            </div>
                                            <div className="flex items-center justify-between p-3 border rounded-none">
                                                <div className="flex items-center space-x-3">
                                                    <Globe className="h-5 w-5" />
                                                    <div>
                                                        <p className="font-medium">Translation</p>
                                                        <p className="text-sm text-muted-foreground">Translate articles to your preferred language</p>
                                                    </div>
                                                </div>
                                                <select className="text-sm border-input bg-background rounded-none">
                                                    <option>English</option>
                                                    <option>Nepali</option>
                                                    <option>Hindi</option>
                                                    <option>Spanish</option>
                                                </select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Personalized News Feed */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="font-serif">Your Personalized Feed</CardTitle>
                                            <div className="flex items-center space-x-2">
                                                <Button variant="outline" size="sm" className="rounded-none">
                                                    <Filter className="h-4 w-4 mr-2" />
                                                    Filter
                                                </Button>
                                                <Button variant="outline" size="sm" className="rounded-none">
                                                    Today
                                                </Button>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex items-start space-x-4 p-4 border rounded-none hover:bg-muted/50 transition-colors"
                                                >
                                                    <div className="h-20 w-20 rounded-none overflow-hidden shrink-0">
                                                        <img
                                                            src={`/placeholder.svg?height=80&width=80&text=News+${item}`}
                                                            alt={`News ${item}`}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <Badge className="text-xs rounded-none">
                                                                {["Technology", "Health", "Politics", "Science"][item - 1]}
                                                            </Badge>
                                                            <div className="flex items-center">
                                                                <Button variant="ghost" size="sm" className="h-8 w-8">
                                                                    <Bookmark className="h-4 w-4" />
                                                                </Button>
                                                                <Button variant="ghost" size="sm" className="h-8 w-8">
                                                                    <Share2 className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <h4 className="font-medium text-sm mb-1">
                                                            {item === 1 && "The Impact of Artificial Intelligence on Modern Healthcare Systems"}
                                                            {item === 2 && "New Study Reveals Surprising Benefits of Mediterranean Diet"}
                                                            {item === 3 && "Global Climate Summit Reaches Historic Agreement"}
                                                            {item === 4 && "Breakthrough in Quantum Computing Could Revolutionize Technology"}
                                                        </h4>
                                                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                                            {item === 1 &&
                                                                "Artificial intelligence is transforming healthcare delivery, from diagnosis to treatment planning and patient monitoring..."}
                                                            {item === 2 &&
                                                                "Researchers have discovered new benefits of the Mediterranean diet that go beyond heart health, including improved cognitive function..."}
                                                            {item === 3 &&
                                                                "After intense negotiations, world leaders have reached a landmark agreement on climate change that sets ambitious targets..."}
                                                            {item === 4 &&
                                                                "Scientists have achieved a major breakthrough in quantum computing that could solve problems previously thought impossible..."}
                                                        </p>
                                                        <div className="flex items-center text-xs text-muted-foreground">
                                                            <User className="h-3 w-3 mr-1" />
                                                            <span>By {["Michael Johnson", "Sarah Smith", "David Lee", "Emily Chen"][item - 1]}</span>
                                                            <span className="mx-2">•</span>
                                                            <Clock className="h-3 w-3 mr-1" />
                                                            <span>{item * 3} hours ago</span>
                                                            {item % 2 === 0 && (
                                                                <>
                                                                    <span className="mx-2">•</span>
                                                                    <Shield className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                                                    <span className="text-green-600 dark:text-green-400">Verified</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="border-t pt-4">
                                        <Button variant="link" size="sm" className="ml-auto text-primary">
                                            View More Articles <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                {/* New Feature: Content Format Preferences */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <CardTitle className="font-serif">Content Format Preferences</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                            <Button
                                                variant="outline"
                                                className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Newspaper className="h-8 w-8" />
                                                <span>Articles</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Video className="h-8 w-8" />
                                                <span>Videos</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Headphones className="h-8 w-8" />
                                                <span>Podcasts</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-6 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Zap className="h-8 w-8" />
                                                <span>Short News</span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Recent Activity */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="font-serif">Your Recent Activity</CardTitle>
                                            <Button variant="link" size="sm" className="text-primary">
                                                View All <ChevronRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Tabs defaultValue="all">
                                            <TabsList className="mb-4">
                                                <TabsTrigger value="all">All</TabsTrigger>
                                                <TabsTrigger value="saved">Saved</TabsTrigger>
                                                <TabsTrigger value="comments">Comments</TabsTrigger>
                                                <TabsTrigger value="likes">Likes</TabsTrigger>
                                            </TabsList>

                                            <TabsContent defaultValue="all" className="mt-0">
                                                <div className="space-y-4">
                                                    <div className="flex items-center space-x-4 p-3 border-b">
                                                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-none">
                                                            <Bookmark className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">
                                                                You saved "The Future of Renewable Energy: Trends to Watch"
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">2 hours ago</p>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="rounded-none">
                                                            View
                                                        </Button>
                                                    </div>

                                                    <div className="flex items-center space-x-4 p-3 border-b">
                                                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded-none">
                                                            <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">
                                                                You commented on "Global Climate Change Conference Results"
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">5 hours ago</p>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="rounded-none">
                                                            View
                                                        </Button>
                                                    </div>

                                                    <div className="flex items-center space-x-4 p-3 border-b">
                                                        <div className="bg-red-100 dark:bg-red-900 p-2 rounded-none">
                                                            <Heart className="h-4 w-4 text-red-600 dark:text-red-400" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">
                                                                You liked "New Advancements in Space Exploration Technology"
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">1 day ago</p>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="rounded-none">
                                                            View
                                                        </Button>
                                                    </div>

                                                    <div className="flex items-center space-x-4 p-3 border-b">
                                                        <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-none">
                                                            <Flag className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">
                                                                You reported an issue with "Economic Forecast for Next Quarter"
                                                            </p>
                                                            <p className="text-xs text-muted-foreground">2 days ago</p>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="rounded-none">
                                                            View
                                                        </Button>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent defaultValue="saved" className="mt-0">
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((item) => (
                                                        <div key={item} className="flex items-center space-x-4 p-3 border-b last:border-0">
                                                            <Bookmark className="h-4 w-4 text-blue-500" />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium truncate">
                                                                    {item === 1 && "The Future of Renewable Energy: Trends to Watch"}
                                                                    {item === 2 && "How Artificial Intelligence is Transforming Industries"}
                                                                    {item === 3 && "Global Economic Outlook: Challenges and Opportunities"}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Saved {item} day{item !== 1 ? "s" : ""} ago
                                                                </p>
                                                            </div>
                                                            <Button variant="ghost" size="sm" className="rounded-none">
                                                                Read
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TabsContent>

                                            <TabsContent defaultValue="comments" className="mt-0">
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((item) => (
                                                        <div key={item} className="flex items-start space-x-4 p-3 border-b last:border-0">
                                                            <MessageSquare className="h-4 w-4 text-green-500 mt-0.5" />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium">
                                                                    On: {item === 1 && "Global Climate Change Conference Results"}
                                                                    {item === 2 && "The Impact of Social Media on Mental Health"}
                                                                    {item === 3 && "New Educational Policies and Their Effects"}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                    {item === 1 &&
                                                                        "This is a great summary of the conference outcomes. I'm particularly interested in how these policies will be implemented."}
                                                                    {item === 2 &&
                                                                        "The research methodology seems sound, but I wonder if there are other factors that weren't considered in this study."}
                                                                    {item === 3 &&
                                                                        "As someone working in education, I can confirm these changes will have significant impacts on classroom dynamics."}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                    Commented {item * 2} day{item * 2 !== 1 ? "s" : ""} ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TabsContent>

                                            <TabsContent defaultValue="likes" className="mt-0">
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((item) => (
                                                        <div key={item} className="flex items-center space-x-4 p-3 border-b last:border-0">
                                                            <Heart className="h-4 w-4 text-red-500" />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium truncate">
                                                                    {item === 1 && "New Advancements in Space Exploration Technology"}
                                                                    {item === 2 && "Breakthrough Medical Research Could Lead to New Treatments"}
                                                                    {item === 3 && "Cultural Festival Celebrates Diversity and Inclusion"}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Liked {item * 3} day{item * 3 !== 1 ? "s" : ""} ago
                                                                </p>
                                                            </div>
                                                            <Button variant="ghost" size="sm" className="rounded-none">
                                                                Read
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>

                                {/* New Feature: Article Actions */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <CardTitle className="font-serif">Article Actions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <Button
                                                variant="outline"
                                                className="h-auto py-4 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Save className="h-5 w-5" />
                                                <span className="text-xs">Save for Later</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-4 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Share2 className="h-5 w-5" />
                                                <span className="text-xs">Share Article</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-4 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Printer className="h-5 w-5" />
                                                <span className="text-xs">Print Article</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-auto py-4 flex flex-col items-center justify-center space-y-2 rounded-none"
                                            >
                                                <Flag className="h-5 w-5" />
                                                <span className="text-xs">Report Issue</span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Topics You Might Like */}
                                <Card className="shadow-sm rounded-none">
                                    <CardHeader>
                                        <CardTitle className="font-serif">Topics You Might Like</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["Science & Tech", "Health & Wellness", "Environment", "Education"].map((topic) => (
                                                <div
                                                    key={topic}
                                                    className="bg-muted hover:bg-muted/80 transition-colors rounded-none p-4 text-center cursor-pointer border border-border"
                                                >
                                                    <p className="font-medium text-sm">{topic}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="border-t pt-4">
                                        <Button variant="link" size="sm" className="ml-auto text-primary">
                                            Customize Interests
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
