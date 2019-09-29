<template>
  <div class="nav">
    <div class="title">Mui</div>
    <ul class="links">
      <li>首页</li>
      <li>Github</li>
      <li>2.0.1</li>
    </ul>
  </div>
</template>

<style lang="scss">
  .nav {
    box-sizing: border-box;
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .links {
      display: flex;
      li {
        padding: 0 20px;
        list-style: none;
      }
    }
  }
</style>
