<template>
  <div id="app">
    <layout>
      <template slot="content">
        <router-view/>
      </template>
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  color: rgba(0, 0, 0, 0.87);
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}
</style>
