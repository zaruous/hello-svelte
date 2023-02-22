import {posts} from "./data.js";
export function load(){
    return {
        sumaries : posts.map((post) => ({
           slug : post.slug,
           title : post.title
        }))
    };
}