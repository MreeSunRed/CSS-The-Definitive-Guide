# 《CSS 权威指南》学习代码

按书中章节组织的 CSS 练习页面，每章一个目录，另附一个仿淘宝首页的综合案例。纯 HTML + CSS + 原生 JS，无构建步骤。

## 章节索引

| 章 | 主题 | 示例 |
|----|------|------|
| ch1 | 基础：`display` 与元素框 | `ch1/1`、`ch1/3` |
| ch2 | 选择器与优先级 | `ch2/1` ~ `ch2/4` |
| ch3 | 选择器进阶：组合、类、属性选择器 | `ch3/1` |
| ch4 | 值与单位、伪类与继承 | `ch4/1` |
| ch5 | 字体 `font-family` | `ch5/1` ~ `ch5/3` |
| ch6 | 文本属性：缩进、对齐、行高、垂直对齐 | `ch6/1` |
| ch7 | 基本视觉格式化：盒模型与 `display` | `ch7/1` |
| ch8 | 内边距、边框与外边距 | `ch8/1` |
| ch9 | 颜色与背景 | `ch9/1` ~ `ch9/3` |
| ch10 | 浮动与形状 `float` / `shape-outside` | `ch10/` |
| ch11 | 定位 `position` 与溢出 `overflow` | `ch11/` |
| ch12 | Flexbox 弹性布局 | `ch12/1` |
| ch13 | Grid 网格布局 | `ch13/` |
| ch15 | 列表样式与生成内容 | `ch15/1` |
| ch16 | 变换 `transform` | `ch16/` |
| ch17 | 过渡 `transition` | `ch17/` |
| ch18 | 动画 `animation` / `@keyframes` | `ch18/` |
| ch19 | 滤镜与混合 `filter` | `ch19/` |

仓库中没有 `ch14`（书中该章为 `@规则` 等，未做练习）。

## 综合案例：仿淘宝首页

`taobao/` 是用 CSS 布局 + 原生 JavaScript 还原的淘宝首页局部：

| 文件 | 作用 |
|------|------|
| `taobao/test.html` | 页面结构 |
| `taobao/css/css.css` | 布局与样式 |
| `taobao/js/addLoadEvent.js` | 兼容性 `load` 事件绑定 |
| `taobao/js/moveElement.js` | 元素位移动画（轮播基础） |
| `taobao/js/bigpic.js` | 大图切换 |

## 运行

每个目录下的 `test.html` 直接用浏览器打开即可，样式位于同级的 `css/css.css`，图片在 `imgs/` 下。

## 说明

- 章节编号与书中保持一致，方便对照阅读。
- 代码以练习属性用法为主，多数文件保留了注释掉的多组取值，便于观察不同效果。
