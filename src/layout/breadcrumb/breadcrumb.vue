<template>
  <el-breadcrumb class="breadcrumb-wrap" :separator-icon="ArrowRight">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item :key="1" :to="{ path: '/' }" @click="change">主页</el-breadcrumb-item>
      <el-breadcrumb-item :key="2">主页1</el-breadcrumb-item>
      <el-breadcrumb-item :key="3">主页2</el-breadcrumb-item>
      <el-breadcrumb-item :key="4">主页3</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const routs = useRouter();
function change() {
  console.log(routs, "routs");
}
</script>
<style lang="less" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
