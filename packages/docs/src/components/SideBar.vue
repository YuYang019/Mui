<template>
  <div class="side-bar" v-if="nav">
    <template v-for="item in nav">
      <div v-if="item.children" class="group" :key="item.name">
        <p>{{ item.label }}</p>
        <template v-for="child in item.children">
          <p :key="child.name">
            <router-link :to="`/${locale}/${item.name}${child.path}`">
              {{ child.label }}
            </router-link>
          </p>
        </template>
      </div>
      <p v-else :key="item.name">
        <router-link :to="`/${locale}${item.path}`">{{ item.label }}</router-link>
      </p>

    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      nav: null
    }
  },
  computed: {
    ...mapState({
      locale: state => state.locale
    })
  },
  watch: {
    locale: {
      immediate: true,
      handler (val, oldVal) {
        console.log(this.$route)
        if (oldVal) {
          const to = this.$route.path.replace(oldVal, val)
          console.log(to)
          this.$router.replace(to)
        }
        import('@/docs/' + val + '/menu.js').then(res => {
          console.log(res.default)
          this.nav = res.default
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .side-bar {
    box-sizing: border-box;
    min-height: calc(100vh - 60px);
    width: 220px;
    background: #fff;
    border-right: 1px solid #ddd;
    padding: 30px;
  }
</style>
