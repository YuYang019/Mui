<template>
  <div class="side-bar" v-if="nav">
    <template v-for="item in nav">
      <div v-if="item.children" class="group" :key="item.name">
        <p>{{ $t(item.name) }}</p>
        <template v-for="child in item.children">
          <p :key="child.name">
            <router-link :to="`/${locale}/${item.name}${child.path}`">
              {{ $t(child.name) }}
            </router-link>
          </p>
        </template>
      </div>
      <p v-else :key="item.name">
        <router-link :to="`/${locale}${item.path}`">{{ $t(item.name) }}</router-link>
      </p>

    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import nav from '@/nav.config.js'

export default {
  data () {
    return {
      nav: nav
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
        if (oldVal) {
          const to = this.$route.path.replace(oldVal, val)
          console.log(to)
          this.$router.replace(to)
        }
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
