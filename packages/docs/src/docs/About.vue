<template>
  <div class="about">
    <h1>This is an about page</h1>
    <t-button />
  </div>
</template>

<script>
import Button from './zh-CN/components/Button.md'
console.log(Button)

export default {
  components: {
    TButton: Button
  }
}
</script>
