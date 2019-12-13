<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page'
}
</script>

<style lang="scss">
  .page {
  text-align: left;
  width: 100%;
  > h1:nth-child(1) {
    margin-top: 0;
  }
  > h1,
  > h2,
  > h3 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  > p {
    margin-bottom: 20px;
  }
  h2 {
    &:before {
      content: '#';
      color: #ccc;
      margin-right: 5px;
    }
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #282c34;
  }
  pre[class*='language-'] {
    margin: 16px 0;
    padding: 1.25em 1.5em;
    border-radius: 5px;
    code {
      background: transparent;
    }
  }
  code {
    font-size: 0.85em;
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
      monospace !important;
  }
  :not(pre) > code {
    color: #41403e;
    padding: 0.25rem 0.5rem;
    margin: 0 3px;
    background-color: #deefff;
    border-radius: 3px;
  }
  table {
    border-collapse: collapse;
    line-height: 1.5;
    thead {
      th {
        background: #eee;
        padding: 15px;
      }
    }
    td {
      padding: 15px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
