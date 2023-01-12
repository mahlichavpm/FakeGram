<template>
  <div class="main-container">
    <div class="post-info-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-circle"
           viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
      <div class="user-details-wrapper">
        <span class="username">mahlichavpm</span>
        <span class="location">Sofia,Bulgaria</span>
      </div>
    </div>
    <div class="image-container">
      <img :src="POST_IMG_KEY()" alt="F1-post"/>
    </div>
    <div class="buttons-section">
      <div class="interactive-icons">
        <button @click="handleLikeBtn">
          <svg v-if="isLiked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red"
               class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart"
               viewBox="0 0 16 16">
            <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat"
             viewBox="0 0 16 16">
          <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send"
             viewBox="0 0 16 16">
          <path
              d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
        </svg>
      </div>
      <div class="bookmark-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark"
             viewBox="0 0 16 16">
          <path
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
      </div>
    </div>
    <div class="post-details-container">
      <div class="likes">
        <span>10.213 likes</span>
      </div>
      <div class="post-details">
        <span class="username">mahlichavpm</span>
        <span class="description">fakegram template description</span>
      </div>
      <div class="comments">
        <div>
          <router-link to="/comments">View all comments</router-link>
        </div>
      </div>
      <div class="post-date">
        <span> 5 days ago </span>
      </div>
    </div>
  </div>
</template>

<script>
import {POST_IMG_KEY} from "../Keys.js";

export default {
  data() {
    return {

    }
  },
  methods: {
    POST_IMG_KEY() {
      return POST_IMG_KEY
    },
    handleLikeBtn() {
      this.$store.dispatch('toggleLikeButton');
    }
  },
  computed: {
    isLiked () {
      return this.$store.getters['isLiked'];
    }
  }
}
</script>

<style scoped>

.image-container{
  display: flex;
  justify-content: center;
}

img {
  max-width: 460px;
}

.user-details-wrapper {
  display: flex;
  flex-direction: column;
  padding: 5px 9px;
  align-items: flex-start;
}

.post-info-container {
  display: flex;
  padding: 10px;
}

.main-container {
  margin: 50px 0px;
  width: 500px;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(33, 33, 33, .9);
  font-family: 'Open Sans', sans-serif;

}

.username {
  font-weight: bolder;
  font-size: 14px;
  margin-right: 5px;
}

.location, .description {
  font-size: 12px;
  margin-top: 3px;
}

.buttons-section {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.interactive-icons {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

button {
  border: none;
  background-color: white;
  padding: 0px;
}

.post-details-container {
  padding-left: 10px;
  text-align: left;
}


.likes {
  font-weight: bolder;
  font-size: 14px;
  margin-bottom: 5px;
}

a {
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
}

.post-date {
  margin-top: 5px;
  font-size: 12px;
  color: gray;
  padding-bottom: 40px;
}
</style>