'use client';

import { useState } from 'react';
// import { Button } from "@/components/ui/button"; 
// import { Card, CardContent } from "@/components/ui/card"; 
import { User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import axios from 'axios';
interface AuthPortalProps { }

const AuthPortal: React.FC<AuthPortalProps> = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);
    const router = useRouter(); // Using Next.js useRouter hook

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleGoogleSuccess = async (credentialResponse: any) => {
        setLoading(true);
        try {
            const res = await axios.get(
                'http://localhost:5000/api/auth/google-login',
                { withCredentials: true }
            );
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            router.push(res.data.user.role === 'reporter' ? '/reporter' : '/client'); // Navigate on success
        } catch (error: any) {
            setErrors(error.response?.data?.message || 'Google login failed');
            console.error('Auth error:', error.response?.data || error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors(null);

        try {
            const endpoint = activeTab === 'login' ? '/api/auth/login' : '/api/auth/register';
            const res = await axios.post(`http://localhost:5000${endpoint}`, activeTab === 'login' ? { email: formData.email, password: formData.password } : formData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            router.push('/client'); // Navigate after successful login/register
        } catch (err: any) {
            setErrors(err.response?.data?.error || (activeTab === 'login' ? 'Login failed' : 'Registration failed'));
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="flex border-b border-gray-200">
                    <button
                        className={`flex-1 py-4 font-medium ${activeTab === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                        onClick={() => {
                            setActiveTab('login');
                            setErrors(null);
                        }}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-4 font-medium ${activeTab === 'signup' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
                        onClick={() => {
                            setActiveTab('signup');
                            setErrors(null);
                        }}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="p-8">
                    <div className="space-y-4 mb-6">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={() => setErrors('Google popup closed or failed to load')}
                            useOneTap
                            size="large"
                            text="continue_with"
                            shape="rectangular"
                           
                           
                        />
                        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 text-blue-500" />
                            <span>Continue with Facebook</span>
                        </button>
                    </div>

                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {errors && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                            {errors}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {activeTab === 'signup' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                    placeholder="John Doe"
                                    required={activeTab === 'signup'}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent pr-10"
                                    placeholder="••••••••"
                                    minLength={activeTab === 'signup' ? 6 : 1}
                                    required
                                />

                                <button
                                    type="button"
                                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {loading ? (
                                <span>Processing...</span>
                            ) : (
                                <>
                                    {activeTab === 'login' ? 'Login' : 'Create Account'}
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button className="text-gray-600 hover:text-black transition flex items-center justify-center gap-1 mx-auto">
                            <User size={16} />
                            <span>Continue as Guest</span>
                        </button>
                        <p className="text-xs text-gray-500 mt-1">Limited access without an account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPortal;
