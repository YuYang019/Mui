# Button 按钮

常用的按钮操作

## 示例

### 尺寸

可选的尺寸值：`x-small/small/default(默认)/large/x-large`

``` demo
<template>
    <div class="wrapper">
        {{ text }}
        <m-button @click="handleClick" x-small />
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
                alert(1)
            }
        }
    }
</script>
```

### 颜色

可选颜色：red, blue

```demo
<template>
    <div class="wrapper">
        <m-button @click="handleClick" x-small />
    </div>
</template>
```