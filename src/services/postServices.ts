import axios, { AxiosError } from "axios";
import { postsStore } from "../stores/postStore.js";
import type { IPost } from "../stores/postStore.js";
import { user } from "../stores/userStore.js"; 


const apiUrl = 'https://silvertestback.onrender.com/api'; 
//if you want to communicate with local back server u need just to change the apiUrl by const apiUrl = import.meta.env.VITE_API_URL;

// Get all posts service from data base with axios
export const GetAllPosts = async (): Promise<void> => {
    try {
        let token: string | undefined;

        user.subscribe((user) => {
         token = user?.token; 
        });

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get<IPost[]>(`${apiUrl}/post/getposts`, { headers });
        const posts = response.data;

        postsStore.setPosts(posts);

    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
    }
};

// create Post service using axios 
export const createPost = async (title: string, description: string, category: string): Promise<IPost | string> => {
    try {
        let token: string | undefined;

        user.subscribe((user) => {
            token = user?.token;
        })();

       
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const postData = {title,description,category};
        const response = await axios.post<IPost>(`${apiUrl}/post/createPost`, postData, { headers });
        const newPost = response.data.post;        ;
        postsStore.addPost(newPost);

        return newPost; 
    } catch (error ) {
        throw new Error(error.response?.data?.message || "Erreur réseau ou serveur.");
    }
};

// Delete Post By id service using axios 
export const DeletePost = async (id: string) : Promise <string> => {

    try {
        let token: string | undefined;

        user.subscribe((user) => {
            token = user?.token;
        })();

       
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.delete<{ message: string }>(`${apiUrl}/post/delete/${id}`,{ headers });
        postsStore.deletePost(id);
        return response.data.message ;
    }
    catch{
        throw new Error(error.response?.data?.message || "Erreur réseau ou serveur.");
    }   
}

// update Post by id service using axios 

export const UpdatePost = async (title: string, description: string, category: string, id: string): Promise<IPost | string> => {
    let token: string | undefined;

    user.subscribe((user) => {
        token = user?.token;
    })();

    const postToupdateData = { title, description, category };
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    try {
        const response = await axios.put<IPost>(`${apiUrl}/post/update/${id}`, postToupdateData, { headers });

        return response.data;
    } catch (error) {
        console.error("Error updating post:", error);
        return "An error occurred while updating the post";
    }
};