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
    > h1, > h2, > h3 {
      margin-top: 24px;
      margin-bottom: 16px;
    }
    > p {
      margin-bottom: 16px;
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
        color: #476582;
        padding: 0.25rem 0.5rem;
        margin: 0;
        background-color: rgba(27, 31, 35, 0.05);
        border-radius: 3px;
    }
}
</style>
