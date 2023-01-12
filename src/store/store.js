import { createStore } from "vuex";
import getters  from "./getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export const store = createStore({
    state() {
        return {
            postLiked: false,
            comments: [{
                username: 'charles_leclerc',
                comment: 'WOW!',
                timestamp: '6 days ago'
            }]
        }
    },
    actions: actions,
    mutations: mutations,
    getters: getters,
    // getters: {
    //     isLiked(state) {
    //          return state.postLiked;
    //     },
    //     getComments(state) {
    //         return state.comments;
    //     }
    // }
});