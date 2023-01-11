<template>
  <div @click.self="hideComments" class="backdrop">
    <div class="main-container">
      <ul>
        <li>
          <CommentComponent comments="getComments"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


import CommentComponent from "@/components/Comment-component.vue";

export default {
  components: {CommentComponent},

  methods: {
    hideComments() {
      this.$router.push('post');
    }
  },
  computed: {
    getComments () {
      return this.$store.getters['getComments'];
    }
  }

}
</script>


<style scoped>
.fill{
  width: 200px;
  height: 200px;
}

.backdrop {
  width: 100%;
  height: 100%;
  backdrop-filter:blur(10px);
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  margin: 50px 0px;
  width: 500px;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(33, 33, 33, .9);
}
</style>