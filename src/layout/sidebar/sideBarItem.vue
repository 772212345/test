<template>
  <div>
    <template v-if="!props.menu.children">
      <el-menu-item
        :class="{ 'main-menu': !!props.menu.meta?.icon }"
        :index="props.menu.path"
        @click="routerLink(props.menu)"
      >
        <el-icon>
          <component :is="props.menu.meta?.icon"></component>
        </el-icon>
        <span>{{ props.menu.meta?.title }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu :index="props.menu.path">
        <template #title>
          <el-icon :class="{ 'main-menu': !!props.menu.meta?.icon }">
            <component :is="props.menu.meta?.icon"></component>
          </el-icon>
          <span :class="{ 'main-menu': !!props.menu.meta?.icon }">{{ props.menu.meta?.title }}</span>
        </template>
        <sideBarItem v-for="item in props.menu.children" :menu="item"></sideBarItem>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/main/counter";
const router = useRouter();
defineOptions({
  name: "sideBarItem"
});
const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
});

let constStror = useCounterStore();
function routerLink(item) {
  // router.push("/home/a");
  console.log("item", item);
  constStror.add(item);
}
</script>
<style lang="less" scoped>
.el-menu-item {
}
.main-menu {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  font-size: 14px;
}
</style>
