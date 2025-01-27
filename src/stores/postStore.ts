import { writable } from 'svelte/store';

export interface IPost {
    _id: string;
    title: string;
    description: string;
    category: string;
    user: {
        _id: string;
        username: string;
        email: string;
        isAccountVerified: boolean;
        createdAt: string;
        updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
}

const createPostsStore = () => {
    const { subscribe, set, update } = writable<IPost[]>([]);

    return {
        subscribe,

        addPost: (post: IPost) => {
            update((posts) => [...posts, post]);
        },

        setPosts: (posts: IPost[]) => {
            set(posts);
        },
        
        deletePost: (id: string) => {
            update((posts) => posts.filter((post) => post.id !== id));
        },
    };
};

export const postsStore = createPostsStore();
