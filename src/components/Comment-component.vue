<template>
  <div class="comment">
    <div class="user-info">
      <i class="bi bi-person-circle"></i>
      <span>username</span>
    </div>
    <div class="comment-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eaque eveniet magni minus nemo, pariatur perferendis perspiciatis quas sequi tempore. Dolorum incidunt nemo officia quia ratione repellat sed suscipit tempora.</p>
    </div>
    <span class="timestamp">timestamp</span>
  </div>
</template>

<script>
export default {
  data() {


    return {}
  }
}
</script>

<style scoped>

.comment{
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
}

.comment-text{
  width: auto;
  height: auto;
  margin-top: 5px;
  line-height: 1.2;
}

.user-info{
  display: flex;
  align-items: center;
}

.user-info i{
  font-size: 32px;
  margin-right: 10px;
}

.user-info span{
  font-weight: bold;
}

.timestamp{
  margin-top: 5px;
  font-size: 12px;
  color: gray;
}
</style>