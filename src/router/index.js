import {createRouter,createWebHistory} from "vue-router";
import UserPost from "@/components/User-Post.vue";
import CommentSection from "@/components/Comment-Section.vue";



export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/post", component: UserPost},
        {path:"/comments", component: CommentSection}
    ]
})