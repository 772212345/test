<template>
  <div class="navbar">
    <HamBurger></HamBurger>
    <div class="right-menu">
      <el-dropdown trigger="click">
        <div class="avatar-wrapper">
          <div class="avatar"></div>
          <div class="username">用户名</div>

          <el-icon><DCaret /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import HamBurger from "./hamBurger.vue";
function logout() {
  console.log("log out");
}
</script>
<style lang="less" scoped>
.navbar {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #680202;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    margin-right: 10px;
    display: flex;
    align-items: center;
    .avatar-wrapper {
      display: flex;
      align-items: center;
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background: rgb(62, 66, 190);
      }
      .username {
        font-size: 14px;
        color: #444b61;
        margin-left: 8px;
      }
    }
  }
}
</style>
