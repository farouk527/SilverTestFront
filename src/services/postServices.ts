import axios, { AxiosError } from "axios";
import { postsStore } from "../stores/postStore.js";
import type { IPost } from "../stores/postStore.js";
import { user } from "../stores/userStore.js"; 
const apiUrl = import.meta.env.VITE_API_URL;

export const GetAllPosts = async (): Promise<void> => {
    try {
        let token: string | undefined;

        user.subscribe(($user) => {
         token = $user.token; 
        });

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get<IPost[]>(`${apiUrl}/post/getposts`, { headers });
        const posts = response.data;

        posts.forEach((post: IPost) => {
            postsStore.addPost(post);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
    }
};


export const createPost = async (title: string, description: string, category: string): Promise<IPost | string> => {
    try {
        let token: string | undefined;

        user.subscribe(($user) => {
            token = $user.token;
        })();

        if (!token) {
            throw new Error('Token is not available');
        }
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const postData = {title,description,category};
        const response = await axios.post<IPost>(`${apiUrl}/post/createPost`, postData, { headers });
        const newPost = response.data;
        postsStore.addPost(newPost);

        return newPost; 
    } catch (error ) {
        throw new Error(error.response?.data?.message || "Erreur réseau ou serveur.");
    }
};