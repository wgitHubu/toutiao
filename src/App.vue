<template>
  <div>
    <!-- 左滑进入 -->
    <transition name="van-slide-left" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  width: 2rem;
  height: 2rem;
  background-color: gold;
}
</style>
