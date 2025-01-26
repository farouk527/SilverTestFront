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
    const { subscribe, update } = writable<IPost[]>([]);

    return {
        subscribe,

        addPost: (post: IPost) => {
            update((posts) => [...posts, post]);
        },
    };
};

export const postsStore = createPostsStore();
