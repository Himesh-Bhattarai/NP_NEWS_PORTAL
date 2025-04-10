import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

interface NewsItem {
    _id: string;
    title: string;
    body: string;
    category: string;
    imageUrl?: string;
    createdAt: string;
    isVerified?: boolean;
    author: {
        _id: string;
        name: string;
        avatar?: string;
    };
    slug?: string;
}

interface FetchNewsOptions {
    limit?: number;
    category?: string;
    sort?: 'newest' | 'oldest';
}

export const fetchNews = async (options: FetchNewsOptions = {}): Promise<NewsItem[]> => {
    try {
        const { limit = 10, category, sort = 'newest' } = options;
        const params = new URLSearchParams();

        if (limit) params.append('limit', limit.toString());
        if (category) params.append('category', category);
        if (sort) params.append('sort', sort);

        const response = await axios.get(`${API_BASE_URL}/trending-news?${params.toString()}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        throw new Error('Failed to fetch news');
    }
};

export const fetchTrendingNews = async (limit = 6): Promise<NewsItem[]> => {
    return fetchNews({ limit, sort: 'newest' });
};

export const fetchNewsByCategory = async (category: string): Promise<NewsItem[]> => {
    return fetchNews({ category });
};