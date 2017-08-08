## vue-pure-slider.js

vue-pure-slider, A simple vue component, Easy use, Easy configuration, Compatible Mobile&PC

[Demo](http://kuscript.com/vue-pure-slider/index.html)

### Install

```html
  npm install vue-pure-slider --save
```

### Usage

```html
<template>
  <div>
    <pure-slider :items='items'></pure-slider>
  </div>
</template>

<script>
  import pureSlider from 'vue-pure-slider';
  export default {
    components: {
      pureSlider
    },
    data () {
      return {
        items:[
          {
            title: 'pic1',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/08/02/4/44a727912d76dbb47a34e29fc4f70582.jpg',
            link: ''
          },
          {
            title: 'pic2',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/07/17/7/11483d25e0123fdd3a66f38a9b788fdd.jpg',
            link: ''
          },
          {
            title: 'pic3',
            imgUrl: 'http://a.img.pp.cn/fs08/2017/07/05/3/49e0e9f402810f641dde7900599c00f4.jpg',
            link: ''
          }
        ],
      }
    }
  }
</script>
```

### Props Param
<table width="100%">
  <thead>
    <tr>
      <th width="15%">Option</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th width="15%">Default</th>
      <th width="40%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><code>items</code></td>
      <td>Array</td>
      <td>Yes</td>
      <td>[]</td>
      <td>Slider list｛title:'title', imgUrl: 'picture src', link: 'Slider link'｝</td>
    </tr>
    <tr align="center">
      <td><code>start</code></td>
      <td>Number</td>
      <td>-</td>
      <td>0</td>
      <td>Slider start position</td>
    </tr>
    <tr align="center">
      <td><code>continuous</code></td>
      <td>Boolean</td>
      <td>-</td>
      <td>true</td>
      <td>Loop slide</td>
    </tr>
    <tr align="center">
      <td><code>auto</code></td>
      <td>Number</td>
      <td>-</td>
      <td>4000</td>
      <td>Auto play time interval (ms)</td>
    </tr>
    <tr align="center">
      <td><code>propagation</code></td>
      <td>Boolean</td>
      <td>-</td>
      <td>true</td>
      <td>Event stopPropagation</td>
    </tr>
    <tr align="center">
      <td><code>slidefn</code></td>
      <td>Function</td>
      <td>-</td>
      <td>-</td>
      <td>sliding callback function</td>
    </tr>
    <tr align="center">
      <td><code>endfn</code></td>
      <td>Function</td>
      <td>-</td>
      <td>-</td>
      <td>End of slide callback function</td>
    </tr>
  </tbody>
</table>

### Q&A
https://github.com/blackie4/vue-pure-slider/issues

### License
MIT
