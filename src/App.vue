<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>
<script setup>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { dayjs } from "element-plus";
import "dayjs/locale/zh-cn";
dayjs.en.weekStart = 1;
</script>
<style scoped></style>
