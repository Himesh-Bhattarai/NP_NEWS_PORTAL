import * as React from "react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, CheckCircle } from "lucide-react";

interface NewsLetterSignupProps {
    className?: string;
}

export default function NewsLetterSignup({ className }: NewsLetterSignupProps) {
    const [email, setEmail] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real app, send this to your API
            setIsSubmitted(true);
            // Reset form after submission
            setTimeout(() => {
                setEmail("");
                setIsSubmitted(false);
            }, 3000);
        }
    };

    return (
        <Card className={`shadow-sm overflow-hidden ${className}`}>
            <CardContent className="p-0">
                <div className="bg-primary/10 p-6 text-center">
                    <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Get the latest news and updates delivered directly to your inbox.
                    </p>

                    {isSubmitted ? (
                        <div className="flex flex-col items-center text-green-600 space-y-2 py-2">
                            <CheckCircle className="h-8 w-8" />
                            <p className="font-medium">Thank you for subscribing!</p>
                            <p className="text-xs text-muted-foreground">You'll receive our next newsletter soon.</p>
                        </div>
                    ) : (
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-3 py-2 text-sm border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Email address"
                            />
                            <Button type="submit" className="w-full">
                                Subscribe Now
                            </Button>
                        </form>
                    )}

                    <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </CardContent>
        </Card>
    );
}
