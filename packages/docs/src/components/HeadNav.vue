<template>
  <div class="nav">
    <div class="title">Mui</div>
    <ul class="links">
      <li>{{ $t('home') }}</li>
      <select :value="locale" @change="handleChange">
        <option value="zh-CN">zh-CN</option>
        <option value="en-US">en-US</option>
      </select>
      <li>Github</li>
      <li>2.0.1</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      locale: state => state.locale
    })
  },
  methods: {
    ...mapActions([
      'changeLang'
    ]),
    handleChange (e) {
      const lang = e.target.value
      this.$i18n.locale = lang
      this.changeLang(lang)
    }
  }
}
</script>

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
