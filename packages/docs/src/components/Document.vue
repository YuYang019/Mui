<template>
  <div class="document">
    <template v-if="doc">
      <page>
        <component :is="doc"></component>
      </page>
    </template>
    <not-found v-else />
  </div>
</template>

<script>
import { firstUpperCase } from '@/utils'
import Page from './Page'
import NotFound from './NotFound'

export default {
  components: {
    Page, NotFound
  },
  data () {
    return {
      doc: null
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        let { params: { lang, section, page } } = to
        section = section ? `/${section}` : ''
        page = `/${firstUpperCase(page)}`
        const path = `${lang}${section}${page}.md`
        console.log(path)
        try {
          import('@/docs/' + path).then(doc => {
            this.doc = doc.default
          })
        } catch (e) {
          console.err(e)
          this.$router.push('/404')
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
</style>
