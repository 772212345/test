<template>
  <el-scrollbar>
    <el-menu
      mode="vertical"
      default-active="/login"
      :collapse-transition="tttfalse"
      :collapse="tttfalse"
      :popper-offset="0"
      :unique-opened="tttfalse"
      :text-color="textColor"
    >
      <sideBarItem v-for="menu in menuData" :key="menu.path" :menu="menu"></sideBarItem>
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import sideBarItem from "./sideBarItem.vue";

import { ref, reactive } from "vue";
const ttt = ref(true);
const tttfalse = ref(false);
const textColor = ref("red");
const menuData = reactive([
  {
    path: "/login",
    meta: {
      title: "数据监控",
      icon: "location"
    }
  },
  {
    path: "/home",
    meta: {
      title: "主页",
      icon: "location"
    },
    children: [
      {
        path: "/home/index",
        meta: {
          title: "主页aaa"
        }
      },
      {
        path: "/home/bb",
        meta: {
          title: "主页bbb"
        }
      }
    ]
  },
  {
    path: "/sign",
    meta: {
      title: "注册",
      icon: "location"
    },
    children: [
      {
        path: "/sign/aa",
        meta: {
          title: "注册aa"
        }
      },
      {
        path: "/signed/bb",
        meta: {
          title: "注册bb"
        },
        children: [
          {
            path: "/signed/aa/fff",
            meta: {
              title: "注册bb-aa"
            }
          },
          {
            path: "/signed/bb/rrrr",
            meta: {
              title: "注册bb-bb"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/test",
    meta: {
      title: "测试",
      icon: "location"
    },
    children: [
      {
        path: "/test/aa",
        meta: {
          title: "测试aa"
        }
      },
      {
        path: "/test/bb",
        meta: {
          title: "测试bb"
        }
      }
    ]
  },
  {
    path: "/test2",
    meta: {
      title: "测试2",
      icon: "location"
    },
    children: [
      {
        path: "/test2/aa",
        meta: {
          title: "测试aa"
        }
      },
      {
        path: "/test2/bb",
        meta: {
          title: "测试bb"
        }
      }
    ]
  },
  {
    path: "/test3",
    meta: {
      title: "测试3",
      icon: "location"
    },
    children: [
      {
        path: "/test3/aa",
        meta: {
          title: "测试aa"
        }
      },
      {
        path: "/test3/bb",
        meta: {
          title: "测试bb"
        }
      }
    ]
  }
]);
const change = () => {
  console.log(variables);
};
</script>
<style lang="less" scoped>
.el-menu {
  background-color: #112943;
  border-right: none;
}
</style>
