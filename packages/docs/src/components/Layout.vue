<template>
  <div class="layout">
    <head-nav />
    <div class="container">
      <side-bar />
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from './HeadNav'
import SideBar from './SideBar'

export default {
  components: {
    HeadNav, SideBar
  }

}
</script>

<style lang="scss">
  .layout {
    .container {
      display: flex;
      .content {
        padding: 30px;
      }
    }
  }
</style>
