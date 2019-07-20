<template>
  <div id="app">
    <div class="header">
      <div class="line"></div>
      <div class="icon">
        <img width="24" height="24" src="./assets/listmemo_logo.svg">
        <span>Link Memo</span>
      </div>
    </div>
    <div class="cardWrapper">
      <Card
        v-for="(memo,index) in memoList"
        v-bind:key="index"
        v-bind:link="memo.link"
        v-bind:title="memo.title"
        v-bind:isShowDelete="isShowDeleteInCard"
        v-on:remove="removeMemo(index)"
      ></Card>
    </div>
    <div class="addButton" :class="{addButton__hide:isShowDeleteInCard}" @click="addCurrentTabInfo()"></div>
    <div class="deleteButton" :class="{deleteButton__hide:isShowDeleteInCard}" @click="switchDeleteButton()"></div>
    <div class="cancelDeleteButton" :class="{cancelDeleteButton__hide:isShowDeleteInCard}" @click="switchDeleteButton()">cancel</div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import * as storageApi from "./api/storage";
import * as tabApi from "./api/tab";

export default {
  name: "app",
  components: {
    Card
  },
  data() {
    return {
      memoList: [],
      isShowDeleteInCard: false,
    };
  },
  methods: {
    switchDeleteButton(){
      console.log(this.isShowDeleteInCard);
      this.isShowDeleteInCard = !this.isShowDeleteInCard;
    },
    async fetchMemoList() {
      const result = await storageApi.fetchMemoList();
      if (result.memo === undefined) {
        this.memoList = [];
        return;
      }
      this.memoList = result.memo;
    },
    async reserveMemoList(memoList) {
      await storageApi.reserveMemoList(memoList);
      this.memoList = memoList;
    },
    async removeMemo(removeIndex) {
      const memoList = this.memoList;
      memoList.splice(removeIndex, 1);
      await this.reserveMemoList(memoList);
      this.memoList = memoList;
    },
    async addCurrentTabInfo() {
      const info = await tabApi.getTabInfo();
      await this.reserveMemoList(
        this.memoList.concat({ link: info.url, title: info.title })
      );
    }
  },
  async created() {
    this.fetchMemoList();
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 125%;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.cardWrapper {
  margin-top: 80px;
}

.line {
  background: linear-gradient(to right, #8966f5, #31a1c3);
  height: 12px;
  width: 100%;
}

.icon {
  font-size: 1rem;
  width: 100%;
  height: 50px;
  background: #f4f4f4;
  color: #707070;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
}

.icon img {
  margin-right: 8px;
}

.addButton {
  display: block;
  position: fixed;
  top: 25px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  border: none;
  border-radius: 50%;
  transition: all 0.2s;
  box-shadow: 0px 0px 7px 4px rgba(229, 229, 229, 0.91);
  background-image: url(./assets/plus.png);
  cursor: pointer;
  background-size: 40% 40%;
  background-position: center;
  background-repeat: no-repeat;
  outline: none;
  z-index: 100;
  transition: all 0.2s ease-out;

}

.addButton:hover {
  box-shadow: 0px 0px 6px 3px rgba(202, 202, 202, 0.91);
}

.addButton:active {
  filter: grayscale(100%);
}

.addButton__hide {
  right: -60px;
}

.deleteButton {
  background-image: url(./assets/trash-white.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #C1C1C1;
  border-radius: 8px 0 0 0;
  bottom: 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 16px 32px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  height: 50px;
  position: fixed;
  right: 0;
  transition: all 0.2s ease-out;
  transform-origin: right bottom;
  width: 50px;
  z-index: 100;
}

.deleteButton:hover {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.06), 0px 16px 32px 0px rgba(0, 0, 0, 0.32);
}

.cancelDeleteButton{
  background-color: #fff;
  border-radius: 18px 0 0 18px;
  box-shadow: 0px 0px 6px 3px rgba(229, 229, 229, 0.91);
  color: #707070;
  line-height: 36px;
  position: fixed;
  text-align: center;
  top: 30px;
  right: -110px;
  width: 106px;
  height: 36px;
  z-index: 100;
  cursor: pointer;
}

.deleteButton__hide {
  transform: rotateZ(-90deg);
}

.cancelDeleteButton__hide {
  right: 0;
}
</style>