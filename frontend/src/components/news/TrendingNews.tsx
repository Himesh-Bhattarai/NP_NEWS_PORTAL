"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["all", "politics", "economy", "technology", "health", "society", "sports"];

export default function TrendingNews() {
    const [activeTab, setActiveTab] = useState("all");
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/news/filter?tag=${activeTab}`);
                console.log("Fetched News Data:", res.data);
                setNewsData(res.data);
            } catch (err) {
                console.error("Error fetching news", err);
            }
        };

        fetchNews();
    }, [activeTab]);

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-4">Trending News</h2>

            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="overflow-x-auto flex-nowrap">
                    {categories.map((cat) => (
                        <TabsTrigger key={cat} value={cat} className="text-xs">
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value={activeTab}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {newsData.length === 0 ? (
                            <p>No news found.</p>
                        ) : (
                            newsData.map((item: any) => (
                                <Card key={item._id} className="overflow-hidden">
                                    <div className="relative h-40">
                                        <Image
                                            src={item.media?.[0]?.url || "/placeholder.svg"}
                                            alt={item.title}
                                            width={300}
                                            height={160}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-2 left-2">
                                            <Badge>{item.tags?.[0] || "General"}</Badge>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                            <div className="flex items-center text-white text-xs">
                                                <Clock className="h-3 w-3 mr-1" />
                                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-sm mb-2 line-clamp-2">
                                            <Link href={`/article/${item._id}`}>{item.title}</Link>
                                        </h3>
                                        <div className="text-xs text-muted-foreground flex items-center">
                                            <User className="h-3 w-3 mr-1" />
                                            {item.author?.username || "Reporter"}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
