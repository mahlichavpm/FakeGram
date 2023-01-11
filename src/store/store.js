import { createStore } from "vuex";

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
    mutations: {
        toggleLikePost(state) {
            state.postLiked = !state.postLiked;
        }
    },
    getters: {
        isLiked(state) {
             return state.postLiked;
        },
        getComments(state) {
            return state.comments;
        }
    }
});