<template>
  <div class="card">
    <a :href="link" target="_blank" class="cardContent">
      <div class="cardTitle">{{title}}</div>
      <p class="cardLink">{{link}}</p>
    </a>
    <div class="cardRemove" @click="$emit('remove')">
      <img width="17" height="17" src="./assets/trash.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["link", "title"],
  data() {
    return {
      msg: "card"
    };
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1.5px solid #e6deff;
  animation: fadein 0.2s linear 0s 1;
}

.cardContent {
  width: 90%;
  height: 100px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: block;
  padding: 15px 0 15px 15px;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.card:hover {
  background: rgba(148, 95, 255, 0.2);
}

.cardTitle {
  color: #707070;
  height: 70%;
  margin: 0;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 145%;
}

.cardLink {
  height: 30%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  line-height: 150%;
  font-size: 0.4rem;
  color: #707070;
}

.cardRemove {
  height: 100%;
  width: 50px;
  font-size: 180%;
  font-weight: bold;
  color: #d0d0d0;
  background: #f5f5f5;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
}
</style>
