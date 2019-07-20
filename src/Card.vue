<template>
  <div class="card">
    <a :href="link" target="_blank" class="cardContent">
      <div class="cardTitle">{{title}}</div>
      <p class="cardLink">{{link}}</p>
    </a>
    <div class="cardRemove" :class="{showDelete:isShowDelete}" @click="$emit('remove')"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["link", "title", "isShowDelete"],
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
  position: relative;
}

.cardContent {
  width: 100%;
  height: 100px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: block;
  padding: 15px;
  transition: all 0.2s ease-out;
}

.cardContent:hover {
  transition: all 0.2s ease-out;
  background: #f5f5f5;
  transform: scale(1.02);
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.cardTitle {
  color: #707070;
  height: 70%;
  margin: 0;
  overflow: hidden;
  font-size: 0.8rem;
  letter-spacing: -0.5px;
  font-weight: 600;
  line-height: 150%;
}

.cardLink {
  height: 30%;
  margin: 0;
  overflow: hidden;
  vertical-align: middle;
  font-size: 0.4rem;
  color: #707070;
}
.cardRemove {
  height: 100%;
  width: 50px;
  background-color: #f5f5f5;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  background-image: url(./assets/trash.svg);
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 0;
  top: 0;
  transform:rotateY(90deg);
  transition: all 0.3s ease;
  transform-origin: right;
}

.showDelete {
  transform:rotateY(0);
}

.cardRemove:hover {
  background-color: #f86b6b;
  transition: all 0.2s ease-out;
  transform: scale(1.05);
  z-index: 10;
}
</style>
