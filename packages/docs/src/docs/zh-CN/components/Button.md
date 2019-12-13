# Button 按钮

常用的按钮操作

## 示例

### 尺寸

可选的尺寸值：`x-small`、`small`、`default(默认)`、`large`、`x-large`

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

### 类型

可选的类型：`error`、`success`、`default(默认)`、`info`、`primary`

``` demo
<template>
    <div class="wrapper">
        <m-button type="error" />
        <m-button type="success" />
        <m-button type="info" />
        <m-button type="warning" />
        <m-button type="primary" />
    </div>
</template>
```

### 禁用状态

``` demo
<template>
    <div class="wrapper">
        <m-button type="error" disabled />
        <m-button type="success" disabled />
        <m-button type="info" disabled />
        <m-button type="warning" disabled />
        <m-button type="primary" disabled />
    </div>
</template>
```

### Loading状态

``` demo
<template>
    <div class="wrapper">
        <m-button :loading="loading" />
        <m-button type="error" loading />
        <m-button type="success" loading />
        <m-button type="info" loading />
        <m-button type="warning" loading />
        <m-button type="primary" loading />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: true
            }
        },
    }
</script>
```

### 图标按钮

通过 `icon` 属性设置图标按钮

``` demo
<template>
    <div class="wrapper">
        <m-button icon="search">搜索</m-button>
        <m-button type="info" icon="save">保存</m-button>
    </div>
</template>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `error` `success` | *string* | `default` | - |
| size | 尺寸，可选值为 `large` `small` `xSmall` `xLarge` | *string* | `default` | - |
| icon | 左侧图标名称 | *string* | - | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |