<template>
  <div class="home-wrapper"
    v-masonry
    column-width=".content-item"
    fit-width="true"
    gutter="8"
    horizontal-order="false"
  >
    <div class="content-item" v-masonry-tile v-for="(item, index) in tableData" :key="index">
      <div class="item-video-wrapper">
        <video v-show="index % 7 == 0" class="item-video" :autoplay="false" muted="true" playsinline="true" preload="auto" controls>
          <source :src="getvideoList()"></source>
        </video>
        <img v-show="index % 7 != 0" class="item-img" :src="getimgurl()" alt="" />
      </div>
      <div class="item-footer">
        <div class="footer-title">{{ item.title }}</div>
        <span class="footer-tag">{{ item.tag }}</span>
        <div class="footer-userinfo">
          <div class="userinfo-pre">
            <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="userinfo-next">
            <el-icon><Star /></el-icon>
            <span class="name">{{ item.age }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Waterfall
    class="home-wrapper"
    :list="tableData"
    :column-count="2"
    :gutter="8"
    align="left"
    :breakpoints="breakpoints"
    :hasAroundGutter="false"
  >
    <template #default="{ item, url, index }">
      <div class="content-item">
        <div class="item-video-wrapper">
        <video v-show="index % 7 == 0" class="item-video" :autoplay="false" muted="true" playsinline="true" preload="auto" controls>
          <source :src="getvideoList()"></source>
        </video>
        <img v-show="index % 7 != 0" class="item-img" :src="getimgurl()" alt="" />
      </div>
      <div class="item-footer">
        <div class="footer-title">{{ item.title }}</div>
        <span class="footer-tag">{{ item.tag }}</span>
        <div class="footer-userinfo">
          <div class="userinfo-pre">
            <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="userinfo-next">
            <el-icon><Star /></el-icon>
            <span class="name">{{ item.age }}</span>
          </div>
        </div>
      </div>
      </div>
    </template>
  </Waterfall> -->
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";

import { tableList } from "@/service/modules/home";
import img1 from "@/assets/img/壁纸 (9).jpg";
import img2 from "@/assets/img/壁纸 (10).jpg";
import img3 from "@/assets/img/壁纸 (11).jpg";
import img4 from "@/assets/img/壁纸 (12).jpg";
import img5 from "@/assets/img/图片123.jpg";
import img6 from "@/assets/img/图片444.jpg";
import video1 from "@/assets/img/video1.mp4";
import video2 from "@/assets/img/video12.mp4";
import router from "@/router";
const imgList = [img1, img2, img3, img4, img5, img6];
const videoList = [video1];
function getimgurl() {
  return imgList[Math.floor(Math.random() * 6)];
}
function getvideoList() {
  return video2;
}
const tableData = ref([]);
const timeOut = ref(30);
// 数据列表
function tableListReq(params) {
  return new Promise((resolve) => {
    tableList(params).then((res) => {
      console.log("数据列表", res.data.list);
      resolve(res.data.list);
    });
  });
}

async function initTableList() {
  const result = await tableListReq();
  tableData.value = tableData.value.concat(result);
}

import { getCurrentInstance } from "vue";
const evenBus = getCurrentInstance()?.appContext.config.globalProperties.$evenBus;
evenBus.on("handleScroll", async (Top) => {
  const offsetHeight = document.querySelector(".home-wrapper").offsetHeight;
  const clientHeight = document.querySelector(".main-wrapper").clientHeight;
  let bottomDistance = offsetHeight - clientHeight - Top;
  if (bottomDistance < 5) {
    let time = true;
    if(time){
      const result = await tableListReq();
      tableData.value = tableData.value.concat(result);
    }
  }
});
onMounted(() => {
  initTableList();
});
const breakpoints = ref({
  3000: {
    //当屏幕宽度小于等于3000
    rowPerView: 2, // 一行8图
  },
  1800: {
    //当屏幕宽度小于等于1800
    rowPerView: 2,// 一行6图
  },
  1200: {
    //当屏幕宽度小于等于1200
    rowPerView: 2,
  },

  500: {
    //当屏幕宽度小于等于500
    rowPerView: 2,
  },
})
</script>
<style scoped lang="less">
.home-wrapper {
  width: 100vw;
  box-sizing: border-box;
  padding: 8px;
}

.content-item {
  width: calc((100vw - 24px) / 2);
  margin-bottom: 8px;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  background-color: aliceblue;
  &:nth-of-type(odd) {
  }
  &:nth-of-type(even) {
  }
  .item-video-wrapper {
    width: 100%;
    background-color: rgb(163, 195, 253);
    position: relative;
    .item-img {
      width: 100%;
    }
  }
  .item-footer {
    width: 100%;
    box-sizing: border-box;
    padding: 0 3px;
    .footer-title {
      margin: 6px 0;
      font-size: 16px;
      font-weight: bold;
    }
    .footer-tag {
      background-color: rgb(217, 217, 217);
      border-radius: 3px;
      padding: 2px;
    }
    .footer-userinfo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6px;
      .userinfo-pre,
      .userinfo-next {
        display: flex;
        align-items: center;
        .name {
          margin-left: 3px;
        }
      }
    }
  }
}
.item-video {
  width: 100%;
  height: 180px;
  object-fit: fill;
}
</style>
