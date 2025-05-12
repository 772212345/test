<template>
  <div class="layout-wrapper">
    <div class="main-wrapper">
      <el-scrollbar @scroll="handleScroll" class="main-scrollbar">
        <router-view />
      </el-scrollbar>
    </div>
    <div class="navbar">
      <el-icon><HomeFilled /></el-icon>
      <el-icon><Watermelon /></el-icon>
      <el-icon><Camera /></el-icon>
      <el-icon><VideoCameraFilled /></el-icon>
      <el-icon><User /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const evenBus = getCurrentInstance()?.appContext.config.globalProperties.$evenBus;
function handleScroll(data) {
  // 处理滚动事件
  // console.log("滚动事件触发", data.scrollTop);
  evenBus.emit("handleScroll", data.scrollTop);
}
</script>
<style lang="less" scoped>
.layout-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  .main-wrapper {
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: rgb(234, 234, 234);
    // overflow: hidden;
  }
  .navbar {
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
