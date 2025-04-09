import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Save, Send } from "lucide-react";

export default function NewContentPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [isDraft, setIsDraft] = useState(true);

    const availableTags = [
        "Entertainment",
        "Sports",
        "Politics",
        "Technology",
        "Health",
        "Business",
        "Science",
        "Education",
        "Environment",
    ];

    const handleAddTag = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleRemoveTag = (tag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    const handleSaveDraft = () => {
        // Logic to save draft
        alert("Draft saved successfully!");
    };

    const handlePublish = () => {
        // Logic to publish content
        alert("Content published successfully!");
        router.push("/dashboard");
    };

    return (
        <div className="container mx-auto py-6 max-w-5xl">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Create New Content</h1>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => router.back()}>
                        Cancel
                    </Button>
                    <Button variant="outline" onClick={handleSaveDraft}>
                        <Save className="mr-2 h-4 w-4" />
                        Save Draft
                    </Button>
                    <Button onClick={handlePublish} className="bg-black text-white hover:bg-gray-800">
                        <Send className="mr-2 h-4 w-4" />
                        Publish
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Content Details</CardTitle>
                    <CardDescription>Fill in the details of your new article or news post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium">
                            Title
                        </label>
                        <Input
                            id="title"
                            placeholder="Enter a compelling title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="body" className="text-sm font-medium">
                            Body
                        </label>
                        <Textarea
                            id="body"
                            placeholder="Write your content here..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="min-h-[300px] w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tags</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {selectedTags.map((tag) => (
                                <Badge key={tag} className="flex items-center gap-1 bg-gray-200 text-black hover:bg-gray-300">
                                    {tag}
                                    <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                                </Badge>
                            ))}
                        </div>
                        <Select onValueChange={handleAddTag}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a tag" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableTags.map((tag) => (
                                    <SelectItem key={tag} value={tag}>
                                        {tag}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                    <div className="text-sm text-gray-500">{isDraft ? "Draft" : "Ready to publish"}</div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleSaveDraft}>
                            <Save className="mr-2 h-4 w-4" />
                            Save Draft
                        </Button>
                        <Button onClick={handlePublish} className="bg-black text-white hover:bg-gray-800">
                            <Send className="mr-2 h-4 w-4" />
                            Publish
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}