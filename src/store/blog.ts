// src/store/blog.ts

import { defineStore } from 'pinia';

interface Article {
    id: number;
    title: string;
    content: string;
    summary: string;
}

export const useBlogStore = defineStore('blog', {
    state: () => ({
        articles: [
            { id: 1, title: "First Article", summary: "This is the summary", content: "Full content of the first article" },
            { id: 2, title: "Second Article", summary: "This is another summary", content: "Full content of the second article" },
        ] as Article[],
    }),
    getters: {
        getArticleById: (state) => (id: number) => {
            return state.articles.find(article => article.id === id);
        }
    }
});
