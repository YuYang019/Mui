<template>
  <div class="demo">
    <div class="actions" :class="{'no-border': !show}">
      <span @click="handleExpand">
        <m-icon v-if="show" name="menuclassic" />
        <m-icon v-else name="menushort" />
      </span>
    </div>
    <div class="raw-code">
      <div class="code-wrapper" ref="codeWrapper" :class="{'expanded': show}">
        <div class="copy" @click="handleCopy">{{ copyText }}</div>
        <div ref="code" class="code">
          <slot name="html"></slot>
        </div>
      </div>
    </div>
    <div class="playground">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',

  props: {
    source: String,
    html: String
  },

  data () {
    return {
      hlcode: '',
      show: false,
      copy: false
    }
  },

  computed: {
    copyText () {
      return this.copy ? 'Copied!' : 'Copy'
    }
  },

  methods: {
    handleExpand () {
      this.show = !this.show
    },
    handleCopy () {
      if (this.copy) return
      const text = this.$refs.code.innerText
      const input = document.createElement('input')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
      this.copy = !this.copy
      setTimeout(() => {
        this.copy = false
      }, 1500)
    }
  },

  watch: {
    show (val) {
      if (val) {
        this.$refs.codeWrapper.style.height = this.$refs.code.clientHeight + 'px'
      } else {
        this.$refs.codeWrapper.style.height = 0
      }
    }
  }
}
</script>

<style lang="scss">
  .demo {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #eee;
    text-align: left;
    transition: all .3s linear;
    .playground {
      text-align: center;
      padding: 30px;
      border-top: 1px solid #eee;
      .wrapper {
        > div {
          display: inline-block;
          margin: 0 15px;
        }
        .m-button {
          margin: 0 15px;
        }
      }
      .split {
        display: block;
        height: 1px;
        width: 100%;
        margin: 8px 0;
      }
    }
    .code-wrapper {
      position: relative;
      height: 0;
      transition: height .3s;
      overflow: hidden;
      &:hover {
        .copy {
          opacity: 1;
        }
      }
      .copy {
        user-select: none;
        position: absolute;
        right: 20px;
        top: 20px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.54);
        cursor: pointer;
        opacity: 0;
        transition: all .3s ease;
      }
      pre {
        background: #f9f9f9 !important;
        margin: 0 !important;
        border-radius: 0 !important;
      }
    }
    .actions {
      user-select: none;
      background: #eee;
      text-align: right;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      padding: 0 20px;
      color: rgba(0, 0, 0, 0.54);
      border-bottom: 1px solid #eee;
      > span {
        cursor: pointer;
      }
      &.no-border {
        border-bottom: 0;
      }
    }
  }
</style>
