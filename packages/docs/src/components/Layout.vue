<template>
  <div class="layout">
    <head-nav />
    <div class="container">
      <side-bar />
      <div class="content">
        <slot name="content"></slot>
        <m-footer></m-footer>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from './HeadNav'
import MFooter from './MFooter'
import SideBar from './SideBar'

export default {
  components: {
    HeadNav, SideBar, MFooter
  }

}
</script>

<style lang="scss">
  .layout {
    .container {
      display: flex;
      .content {
        padding: 30px 60px 80px;
        width: 100%;
        position: relative;
      }
    }
  }
</style>
