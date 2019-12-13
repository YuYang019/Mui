# Button 按钮

常用的按钮操作

## 示例

### 尺寸

可选的尺寸值：`x-small`、`small`、`default(默认)`、`large`、`x-large`

``` demo
<template>
    <div class="wrapper">
        <m-input x-small />
        <m-input small />
        <m-input />

        <span class="split"></span>

        <m-input large />
        <m-input x-large />
    </div>
</template>
```

### 禁用状态

``` demo
<template>
    <div class="wrapper">
        <m-input placeholder="请输入内容" disabled />
    </div>
</template>
```

### 带icon的输入框

`prefix-icon` 在首部添加图标，`suffix-icon` 在尾部添加图标，或者使用 `slot` 的方式

``` demo
<template>
    <div class="wrapper">
        <m-input placeholder="请输入内容" prefix-icon="user" />

        <m-input placeholder="请输入内容" suffix-icon="calendar" />

        <m-input placeholder="请输入内容">
            <template slot="prefix">
                <m-icon name="user" />
            </template>

            <template slot="suffix">
                <m-icon name="calendar" />
            </template>
        </m-input>
    </div>
</template>
```

``` demo
<template>
    <div class="wrapper">
        <m-input placeholder="请输入内容" disabled />
    </div>
</template>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `error` `success` | *string* | `default` | - |
| size | 尺寸，可选值为 `large` `small` `xSmall` `xLarge` | *string* | `medium` | - |
| icon | 左侧图标名称 | *string* | - | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |