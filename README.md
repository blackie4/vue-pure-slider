## vue-pure-slider.js

vue-pure-slider, A simple vue component, Easy use, Easy configuration, Compatible Mobile&PC

[![npm](https://img.shields.io/npm/v/vue-pure-slider.svg)](https://github.com/blackie4/vue-pure-slider)
[![npm](https://img.shields.io/npm/dm/vue-pure-slider.svg)](https://github.com/blackie4/vue-pure-slider)
[![Github file size](https://img.shields.io/github/size/blackie4/vue-pure-slider/dist/index.js.svg)](https://github.com/blackie4/vue-pure-slider)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/blackie4/vue-pure-slider)

[Demo](http://kuscript.com/vue-pure-slider/index.html)

### Install

```html
  npm install vue-pure-slider --save
```

### Usage

```html
<template>
  <div id="sliderWrap">
    <pure-slider container="sliderWrap" :items='items'></pure-slider>
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
            imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider1.jpg',
            link: ''
          },
          {
            title: 'pic2',
            imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider2.jpg',
            link: ''
          },
          {
            title: 'pic3',
            imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider3.jpg',
            link: ''
          }
        ],
      }
    }
  }
</script>
```
or
```html
<html>
  <body>

    <div id="wrap">
      <vue-pure-slider container="wrap" :items='items'></vue-pure-slider>
    </div>

    <script src="***/vue.min.js"></script>
    <script src="***/dist/index.js"></script>
    <script>
      new Vue({
        el: '#wrap',
        data: {
          items() {
            return [
              {
                title: 'pic1',
                imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider1.jpg',
                link: ''
              },
              {
                title: 'pic2',
                imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider2.jpg',
                link: ''
              },
              {
                title: 'pic3',
                imgUrl: 'http://kuscript.com/vue-pure-slider/img/slider3.jpg',
                link: ''
              }
            ]
          }
        }
      });
    </script>

  </body>
</html>
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
      <td><code>container</code></td>
      <td>String</td>
      <td>Yes</td>
      <td>''</td>
      <td>Slider wrapper id</td>
    </tr>
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
      <td><code>continue</code></td>
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
      <td><code>speed</code></td>
      <td>Number</td>
      <td>-</td>
      <td>300</td>
      <td>Slide duration (ms)</td>
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
      <td>Sliding callback function</td>
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
