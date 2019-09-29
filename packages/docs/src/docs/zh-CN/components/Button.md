# Button 按钮

常用的按钮操作

## 示例

### 尺寸

可选的尺寸值：`x-small/small/default(默认)/large/x-large`

``` demo
<template>
    <div class="wrapper">
        <m-button x-small />
        <m-button small />
        <m-button />
        <m-button large />
        <m-button x-large />
    </div>
</template>
```

你知道的

``` demo
<template>
    <div class="wrapper">
        {{ text }}
        <m-button @click="handleClick" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'hello'
            }
        },
        methods: {
            handleClick() {
                console.log(1)
            }
        }
    }
</script>
```