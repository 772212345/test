<template>
  <div class="hamburger-container">
    <div @click="toggleClick">
      <svg
        :class="{ 'is-active': isActive }"
        class="hamburger"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <path
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
        />
      </svg>
    </div>
    <div class="navbar-title">标题</div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    }
  }
};
</script>

<style scoped>
.hamburger-container {
  display: flex;
  align-items: center;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  margin-left: 20px;

  .hamburger {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .hamburger.is-active {
    transform: rotate(180deg);
  }
  .navbar-title {
    margin-left: 12px;
    font-size: 14px;
    color: #858b9c;
  }
}
</style>
