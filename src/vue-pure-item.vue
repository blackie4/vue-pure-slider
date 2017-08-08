<template>
  <div class="vue-pure-slider-item"
    :style="{
      'width': width +'px',
      'left': (index * -width) + 'px',
      'webkit-transform': 'translate(' + dist + 'px, 0)' + ' translateZ(0)',
      'transition-duration:': speed + 'ms',
    }"
  >
    <a class="vue-pure-slider-a" href="javascirpt:;">
      <img class="vue-pure-slider-img" :src="item.imgUrl">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'vue-pure-item',
    props: {
      item: {
        type: Object,
        default: {},
        required: true,
      },
      index: {
        type: Number,
        default: 0,
        required: true
      },
      width: {
        type: Number,
        default: 0,
        required: true
      },
      dist: {
        type: Number,
        default: 0,
        required: true
      },
      speed: {
        type: Number,
        default: 0,
        required: true
      },
    },
    data () {
      return {

      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

