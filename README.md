## vue-pure-slider.js
* * *
vue-pure-slider,一个简单易用的vue滑动组件,易于配置，易于使用，兼容Mobile与PC

[Demo](http://kuscript.com/vue-pure-slider/index.html)

### 安装

```html
  npm install vue-pure-slider --save
```

### 如何使用

```html
<template>
  <div>
    <pure-slider :items='items'></pure-slider>
  </div>
</template>

<script>
  import pureSlider from 'vue-pure-slider'; // 引入组件
  export default {
    components: {
      pureSlider
    },
    data () {
      return {
        //图片列表
        items:[
          {
            title: '图片1',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/08/02/4/44a727912d76dbb47a34e29fc4f70582.jpg',
            link: ''
          },
          {
            title: '图片2',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/07/17/7/11483d25e0123fdd3a66f38a9b788fdd.jpg',
            link: ''
          },
          {
            title: '图片3',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/07/05/3/49e0e9f402810f641dde7900599c00f4.jpg',
            link: ''
          }
        ],
      }
    }
  }
</script>
```
### 参数说明
<table width="100%">
  <thead>
    <tr>
      <th width="15%">Option</th>
      <th width="15%">Type</th>
      <th width="15%">Need</th>
      <th width="15%">Default</th>
      <th width="40%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><code>items</code></td>
      <td>Array</td>
      <td>必填</td>
      <td>[]</td>
      <td>Banner slider图片列表｛title:'标题', imgUrl: '图片地址链接', link: '图片点击跳转url'｝</td>
    </tr>
    <tr align="center">
      <td><code>start</code></td>
      <td>Number</td>
      <td>-</td>
      <td>0</td>
      <td>滚动起始位置</td>
    </tr>
    <tr align="center">
      <td><code>continuous</code></td>
      <td>Boolean</td>
      <td>-</td>
      <td>true</td>
      <td>是否循环滚动</td>
    </tr>
    <tr align="center">
      <td><code>auto</code></td>
      <td>Number</td>
      <td>-</td>
      <td>4000</td>
      <td>自动播放时间间隔，单位ms</td>
    </tr>
    <tr align="center">
      <td><code>propagation</code></td>
      <td>Boolean</td>
      <td>-</td>
      <td>true</td>
      <td>阻止时间冒泡</td>
    </tr>
    <tr align="center">
      <td><code>slidefn</code></td>
      <td>Function</td>
      <td>-</td>
      <td>-</td>
      <td>切换时动画回调函数</td>
    </tr>
    <tr align="center">
      <td><code>endfn</code></td>
      <td>Function</td>
      <td>-</td>
      <td>-</td>
      <td>切换动画完成后回调函数</td>
    </tr>
  </tbody>
</table>

### 更多相关问题
欢迎讨论: https://github.com/blackie4/vue-pure-slider/issues
