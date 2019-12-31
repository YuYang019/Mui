# Dialog 对话框

对话框

## 示例

### 模态

带遮罩层，打开时将不能滚动，`Dialog`将分为三个部分：`head`,`body`,`foot`，这里展示了`foot`的用法，
`title`用于定义标题

``` demo
<template>
    <div class="wrapper">
        <m-button @click="visible = true">点我</m-button>

        <m-dialog title="提示" v-model="visible">
            modal1
            <m-button @click="visible2 = true">点我</m-button>
            <template v-slot:foot>
                <m-button type="primary" @click="visible = false">确定</m-button>
                <m-button @click="visible = false">取消</m-button>
            </template>
        </m-dialog>

        <m-dialog title="提示" v-model="visible2">
            modal2
            <template v-slot:foot>
                <m-button type="primary" @click="visible2 = false">确定</m-button>
                <m-button @click="visible2 = false">取消</m-button>
            </template>
        </m-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                visible2: false,
            }
        }
    }
</script>
```

### 非模态

不带遮罩层，设置`modal`属性为`false`

``` demo
<template>
    <div class="wrapper">
        <m-button @click="visible = true">点我 modal1</m-button>

        <m-button @click="visible2 = true">点我 modal2</m-button>

        <m-dialog title="提示" v-model="visible" :modal="false">
            modal1
            <template v-slot:foot>
                <m-button type="primary" @click="visible = false">确定</m-button>
                <m-button @click="visible = false">取消</m-button>
            </template>
        </m-dialog>

        <m-dialog title="提示" v-model="visible2" :modal="false">
            modal2
            <template v-slot:foot>
                <m-button type="primary" @click="visible2 = false">确定</m-button>
                <m-button @click="visible2 = false">取消</m-button>
            </template>
        </m-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                visible2: false,
            }
        }
    }
</script>
```

### 异步处理

``` demo
<template>
    <div class="wrapper">
        <m-button @click="visible = true">点我</m-button>

        <m-dialog title="提示" v-model="visible">
            确定提交吗？
            <template v-slot:foot>
                <m-button type="primary" @click="submit" :loading="loading">确定</m-button>
                <m-button @click="visible = false" :disabled="loading">取消</m-button>
            </template>
        </m-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                loading: false
            }
        },
        methods: {
            submit() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.visible = false;
                }, 3000)
            }
        }
    }
</script>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| visible(v-model) | 控制显示隐藏 | *boolean* | `false` | - |
| modal | 是否需要遮罩层 | *boolean* | `true` | - |
| color | 遮罩层颜色 | *string* | `rgba(33, 33, 33, 0.46)` | - |
| append-to-body | Dialog是否插至body元素上 | *boolean* | `true` | - |
| lazy | Dialog是否是懒加载 | *boolean* | `true` | - |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | *boolean* | `true` | - |
| title | 标题名称 | *string* | - | - |

### Slots

| name | 说明
|------|------|------|------|------|
| - | body区域 |
| head | 头部区域 |
| foot | 底部区域 | 