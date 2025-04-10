'use client'
//Homepage------------- "/"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
import BreakingNews from '@/components/news/BreakingNews'
import HomeSection from '@/components/news/HomeSection'
import WeatherWidget from '@/components/features/WeatherWidget'
import PopularTags from '@/components/features/PopularTags'
import TrendingTopic from '@/components/news/TrendingTopic'
import Audioplayer from '@/components/features/Audioplayer'
import VideoNewsSection from '@/components/news/VideoNewsSection'
// import FactCheckBadge from '@/components/ui/FactCheckBadge'
import TrustedSources from '@/components/features/TrustedSources'
import EditorPick from '@/components/features/EditorPick'
import ThemeToggle from '@/components/features/ThemeToggle'
import NewsLetterSignup from '@/components/features/NewsLetterSignup'
import { useState, useEffect } from 'react'
import Foorter from '@/components/layout/Foorter'
// import Image from 'next/image'
// import  NewsCard  from '@/components/news/NewsCard'
import TrendingNews from '@/components/news/TrendingNews'




export default function HomePage() {
    
    const FormattedClock = () => {
        const [date, setDate] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => setDate(new Date()), 1000);
            return () => clearInterval(timer);
        }, []);

        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return <span>{formattedDate}</span>;
    };

    const router = useRouter();
    const SignInButtonClicked = () => {
        router.push("/auth")
    }

    return (
        <>
            <div className="min-h-screen bg-background">
                {/* Top Bar */}
                <div className="bg-primary text-primary-foreground py-2">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs">
                                <span className="flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <FormattedClock />
                                </span>
                                <span className="hidden md:inline-flex">|</span>
                                <WeatherWidget />
                            </div>
                            <div className="flex items-center space-x-4 text-xs">
                                <Link href="/about" className="elegant-underline">
                                    About
                                </Link>
                                <Link href="/contact" className="elegant-underline">
                                    Contact
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <button className="hover:text-primary-foreground/80 transition-colors">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button className="hover:text-primary-foreground/80 transition-colors">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </button>
                                    <button className="hover:text-primary-foreground/80 transition-colors">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden md:flex items-center space-x-2 border-l border-primary-foreground/20 pl-4">
                                    <Globe className="h-3 w-3" />
                                    <select className="bg-transparent text-xs border-none focus:ring-0 p-0">
                                        <option value="en">English</option>
                                        <option value="ne">Nepali</option>
                                    </select>
                                </div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <header className="bg-card shadow-sm sticky top-0 z-10 backdrop-blur-md bg-opacity-90">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="bg-primary text-primary-foreground p-2 rounded-none">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-serif font-bold tracking-tight">NP REVOLUTION</span>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <span className="mr-2">Your Voice Matter !!</span>
                                            <Shield className="h-3 w-3 text-primary" />
                                        </div>
                                    </div>
                                </Link>

                                <button className="md:hidden">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex-1 max-w-md mx-4 hidden md:block">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for news..."
                                        className="w-full py-2 pl-10 pr-4 text-sm bg-background border border-input rounded-none focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-transparent transition-all"
                                    />
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="hidden md:flex items-center space-x-1">
                                    <Button variant="outline" size="sm" className="rounded-none">
                                        <Bell className="h-4 w-4 mr-2" />
                                        <span>Subscribe</span>
                                    </Button>
                                </div>
                                <Button variant="default" size="sm" className="rounded-none" onClick={SignInButtonClicked}>
                                    <User className="h-4 w-4 mr-2" />
                                    <span>Sign In</span>
                                </Button>
                            </div>
                        </div>

                        <nav className="hidden md:block mt-4 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors elegant-underline">
                                        Home
                                    </Link>
                                    <Link
                                        href="/trending"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Trending
                                    </Link>
                                    <Link
                                        href="/live"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Live Reports
                                    </Link>
                                    <Link
                                        href="/investigations"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Investigations
                                    </Link>
                                    <Link
                                        href="/fact-check"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Fact-Check
                                    </Link>
                                    <Link
                                        href="/videos"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Videos
                                    </Link>
                                    <Link
                                        href="/opinion"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Opinion
                                    </Link>
                                    <Link
                                        href="/podcasts"
                                        className="text-sm font-medium hover:text-primary transition-colors elegant-underline"
                                    >
                                        Podcasts
                                    </Link>
                                </div>
                                <Audioplayer />
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Mobile Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-10 py-2 px-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex flex-col items-center text-xs">
                            <Home className="h-5 w-5 mb-1" />
                            <span>Home</span>
                        </Link>
                        <Link href="/trending" className="flex flex-col items-center text-xs">
                            <TrendingUp className="h-5 w-5 mb-1" />
                            <span>Trending</span>
                        </Link>
                        <Link href="/videos" className="flex flex-col items-center text-xs">
                            <Video className="h-5 w-5 mb-1" />
                            <span>Videos</span>
                        </Link>
                        <Link href="/search" className="flex flex-col items-center text-xs">
                            <Search className="h-5 w-5 mb-1" />
                            <span>Search</span>
                        </Link>
                        <Link href="/account" className="flex flex-col items-center text-xs">
                            <User className="h-5 w-5 mb-1" />
                            <span>Account</span>
                        </Link>
                    </div>
                </div>

                {/* Breaking News portal */}
                <BreakingNews />

                {/* Home Section */}
                <HomeSection />

                {/* Trust Indicators */}
                <section className="py-6 bg-background border-b border-border">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Fact-Checked Content</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Trusted Sources</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Award className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Award-Winning Journalism</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Real-Time Updates</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-8 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Main News Column */}
                            <div className="lg:col-span-8">
                                {/* Trending Topics */}
                                <TrendingTopic className="mb-8" />

                                {/* Editor's Picks */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-serif font-bold relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary">
                                            Editor's Picks
                                        </h2>
                                        <Button variant="ghost" size="sm" className="text-primary">
                                            View All <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>

                                    <EditorPick />
                                </div>

                                {/* Trusted Sources Section */}
                                <TrustedSources className="mb-12" />

                                {/* Trending News Section */}
                                <TrendingNews />
                                

                                {/* <div className="mb-12">
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
                                </div>  */}

                                {/* Video News Section*/}
                                <VideoNewsSection />
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4">
                                {/* Live Updates */}
                                <Card className="mb-6 shadow-sm overflow-hidden rounded-none">
                                    <CardContent className="p-0">
                                        <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
                                            <h3 className="font-bold flex items-center">
                                                <AlertCircle className="h-4 w-4 mr-2" />
                                                Live Updates
                                            </h3>
                                            <Badge variant="secondary" className="text-xs rounded-none">
                                                Now
                                            </Badge>
                                        </div>
                                        <div className="divide-y divide-border">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <div key={item} className="p-4 hover:bg-muted/50 transition-colors">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="min-w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                                                            <Clock className="h-4 w-4 text-red-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium mb-1 verified-content">
                                                                {item === 1 && "Breaking: Major infrastructure bill passes final vote"}
                                                                {item === 2 && "Update: Rescue operations continue after flooding in coastal areas"}
                                                                {item === 3 && "Traffic alert: Major accident on highway causing delays"}
                                                                {item === 4 && "Weather update: Storm warning issued for northern regions"}
                                                                {item === 5 && "Sports: National team scores in final minutes of championship game"}
                                                            </p>
                                                            <div className="flex items-center text-xs text-muted-foreground">
                                                                <span>{item * 10} mins ago</span>
                                                                <span className="mx-1">•</span>
                                                                <span>{["Politics", "Society", "Local", "Weather", "Sports"][item - 1]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-3 border-t text-center">
                                            <Button variant="link" size="sm" className="text-primary text-xs">
                                                View All Updates
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Popular Tags */}
                                <PopularTags className="mb-6" />

                                {/* Newsletter Signup */}
                                <NewsLetterSignup className="mb-6" />

                                {/* Most Read */}
                                <Card className="mb-6 shadow-sm overflow-hidden rounded-none">
                                    <CardContent className="p-0">
                                        <div className="p-4 bg-muted">
                                            <h3 className="font-bold font-serif">Most Read</h3>
                                        </div>
                                        <div className="divide-y divide-border">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <div key={item} className="p-4 hover:bg-muted/50 transition-colors">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="min-w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold">
                                                            {item}
                                                        </div>
                                                        <div>
                                                            <Link
                                                                href={`/article/popular-${item}`}
                                                                className="text-sm font-medium hover:text-primary transition-colors"
                                                            >
                                                                {item === 1 && "Scientists Discover Breakthrough in Renewable Energy Storage"}
                                                                {item === 2 && "Global Economic Forum Announces New Trade Agreements"}
                                                                {item === 3 && "Tech Giant Unveils Revolutionary New Product Line"}
                                                                {item === 4 && "Health Study Reveals Surprising Benefits of Common Food"}
                                                                {item === 5 && "Environmental Initiative Launches to Combat Climate Change"}
                                                            </Link>
                                                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                                                                <div className="flex items-center">
                                                                    <Eye className="h-3 w-3 mr-1" />
                                                                    <span>{(6 - item) * 1.2}k views</span>
                                                                </div>
                                                                <span className="mx-2">•</span>
                                                                <div className="flex items-center">
                                                                    <MessageSquare className="h-3 w-3 mr-1" />
                                                                    <span>{(6 - item) * 12} comments</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Advertisement */}
                                <div className="mb-6 bg-muted/50 border rounded-none p-4 text-center">
                                    <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
                                    <div className="bg-muted h-60 flex items-center justify-center">
                                        <span className="text-muted-foreground">Ad Space Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Public Contribution Panel */}
                <section className="py-8 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-primary/5 to-primary/5 border border-border rounded-none p-6">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-4 md:mb-0 text-center md:text-left">
                                    <h2 className="text-2xl font-serif font-bold mb-2">Got a Story?</h2>
                                    <p className="text-muted-foreground max-w-md">
                                        Share your news, insights, or tips with our community. Become a contributor and make your voice heard.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button variant="outline" className="rounded-none">
                                        Learn More
                                    </Button>
                                    <Button className="rounded-none">Submit a Story</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Foorter />
        </>
    )
}
