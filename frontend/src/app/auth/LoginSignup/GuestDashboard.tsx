import { Newspaper, Bookmark, Zap , ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function GuestDashboard() {
    
    const navigate = useNavigate();

    const LoginButtonClicked = () =>{
        console.log("Login button clicked")
        navigate("/auth-portal")
    }

    const SignUpButtonClicked = ()=>{
        console.log("Signup Butoon Clicked")
        navigate("/auth-portal")

    }
  
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Glowing Hero Section */}
            <div className="relative overflow-hidden py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        NEWS PORTAL
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Where information meets innovation
                    </p>
                </div>
            </div>

            {/* Animated Grid Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 - Hover 3D effect */}
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 group">
                        <div className="flex items-start mb-6">
                            <div className="p-3 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition">
                                <Newspaper className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Breaking Stories</h3>
                        <p className="text-gray-400 mb-6">
                            Real-time updates as events unfold worldwide
                        </p>
                        <div className="flex items-center text-gray-300 group-hover:text-white transition">
                            <span>Explore</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                    </div>

                    {/* Feature 2 - Glow effect */}
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                        <div className="flex items-start mb-6">
                            <div className="p-3 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Trending Now</h3>
                        <p className="text-gray-400 mb-6">
                            See what the world is talking about this moment
                        </p>
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>
                        <div className="text-sm text-gray-400">
                            Updated every 5 minutes
                        </div>
                    </div>

                    {/* Feature 3 - Minimalist */}
                    <div className="bg-black p-8 rounded-xl border border-gray-800 hover:bg-gray-900 transition-all duration-500">
                        <div className="flex items-start mb-6">
                            <div className="p-3 rounded-lg bg-white bg-opacity-10 group-hover:bg-opacity-20 transition">
                                <Bookmark className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Curated Collections</h3>
                        <p className="text-gray-400 mb-6">
                            Handpicked stories on topics that matter
                        </p>
                        <div className="flex space-x-2">
                            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">Politics</span>
                            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">Tech</span>
                            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">Culture</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic News Ticker */}
            <div className="bg-white text-black py-4 border-t border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center overflow-hidden">
                        <span className="bg-black text-white px-3 py-1 text-xs font-mono mr-6">LIVE FEED</span>
                        <div className="whitespace-nowrap animate-marquee">
                            <span className="mx-6">• Global markets react to new economic policy</span>
                            <span className="mx-6">• Breakthrough in renewable energy announced</span>
                            <span className="mx-6">• Exclusive interview with industry leader</span>
                            <span className="mx-6">• Cultural festival draws record attendance</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Auth CTA */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-medium mb-6">Join the information revolution</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Create your free account to personalize your news experience and unlock premium features
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={SignUpButtonClicked} className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition flex items-center justify-center">
                            Sign Up Free
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                        <button onClick={LoginButtonClicked} className="px-8 py-3 border border-gray-600 font-medium rounded-lg hover:bg-gray-900 transition">
                            Existing User? Login
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Footer */}
            <div className="border-t border-gray-800 py-8">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} News Portal. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}