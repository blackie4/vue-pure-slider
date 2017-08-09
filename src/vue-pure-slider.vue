<template>
  <div class="vue-pure-slider-wrap" :style="{visibility: isVisible ? 'visible' : 'hidden'}">
    <div class="vue-pure-slider-inner"
      :style="styleInner"
      @touchstart="swipeStart"
      @touchmove="swipeMove"
      @touchend="swipeEnd"
      @webkit-transition-end="onTransitionEnd"
      @transitionend="onTransitionEnd"
    >
      <div class="vue-pure-slider-item" v-for="(item, idx) in items"
        :style="getStyleItem(idx)"
        :data-index="idx"
      >
        <a :href="item.link||'javascript:void(0);'">
          <img :src="item.imgUrl" :alt="item.title">
        </a>
      </div>
    </div>
    <div class="vue-pure-slider-indicator">
      <ul>
        <li v-for="(item, idx) in items" :class="{'active': idx == index}" @click="slideTo(idx)">{{idx+1}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-pure-slider',
    props: {
      container: {
        type: String,
        default: '',
        required: true
      },
      items: {
        type: Array,
        default: [],
        required: true
      },
      start: {
        type: Number,
        default: 0
      },
      continuous: {
        type: Boolean,
        default: true
      },
      auto: {
        type: Number,
        default: 4000
      },
      speed: {
        type: Number,
        default: 400
      },
      propagation: {
        type: Boolean,
        default: true
      },
      slidefn: {
        type: Function,
        default: function() { }
      },
      endfn: {
        type: Function,
        default: function() { }
      }
    },
    data () {
      return {
        wrap: null,
        width: 0,
        height: 0,
        index: this.start,
        timer: null,
        dists: '',
        speeds: '',
        isVisible: 0,
        swiper: {
          start: {},
          delta: {},
          dists: '',
          isScrolling: undefined,
          isMove: false
        }
      };
    },
    computed: {
      styleInner () {
        let _style = {};
        _style['width'] = this.width * this.items.length +'px';
        if (this.height) {
          _style['height'] = this.height +'px';
        }
        return _style;
      }
    },
    watch: {
      items () {
        this.init();
      }
    },
    mounted () {
      if (!this.container || !document.getElementById(this.container)) {
        console.warn('Container param error!');
        return;
      }
      this.init();
      window.addEventListener('resize', this.init, false);
    },
    methods: {
      init () {
        this.stop();
        this.setup();
        if (this.auto) {
          this.run();
        }
      },
      setup () {
        this.wrap = document.getElementById(this.container);
        this.width = this.wrap.getBoundingClientRect().width || this.wrap.offsetWidth;
        this.height = this.wrap.getBoundingClientRect().height || this.wrap.offsetHeight;
        if (this.index > this.items.length - 1) {
          this.index = 0;
        }
        for (let i = 0; i < this.items.length; i++) {
          let dist = this.index > i ? -this.width : (this.index < i ? this.width : 0);
          this.setTranslate(i, dist, 0);
        }
        if (this.continuous) {
          this.setTranslate(this.getCircleIndex(this.index-1), -this.width, 0);
          this.setTranslate(this.getCircleIndex(this.index+1), this.width, 0);
        }
        this.isVisible = 1;
      },
      slideTo (index, speed) {
        this.stop();
        this.slide(index, speed);
      },
      slidePrev () {
        this.stop();
        this.prev();
      },
      slideNext () {
        this.stop();
        this.next();
      },
      run () {
        this.timer = setTimeout(this.next, this.auto);
      },
      prev () {
        if (this.continuous || this.index) {
          this.slide(this.index - 1);
        }
      },
      next () {
        if (this.continuous || this.index < this.items.length - 1) {
          this.slide(this.index + 1);
        }
      },
      stop () {
        clearTimeout(this.timer);
      },
      slide (to, speed) {
        const _index = this.index;
        const _speed = speed || this.speed;

        if (_index === to) return;

        let direction = Math.abs(_index-to) / (_index-to);
        if (this.continuous) {
          let natural_direction = direction;
          direction = -this.getTranslate(this.getCircleIndex(to)).dist / this.width;
          if (direction !== natural_direction) {
            to =  -direction * this.items.length + to;
          }
        }

        let diff = Math.abs(_index - to) - 1;
        while (diff--) {
          let idx = this.getCircleIndex((to > _index ? to : _index) - diff - 1);
          this.setTranslate(idx, this.width * direction, 0);
        }

        to = this.getCircleIndex(to);
        this.setTranslate(_index, this.width * direction, _speed);
        this.setTranslate(to, 0, _speed);

        if (this.continuous) {
          this.setTranslate(this.getCircleIndex(to - direction), -(this.width * direction), 0);
        }

        this.index = to;
        this.slidefn(this.index, this.items[this.index]);
      },
      swipeStart (ev) {
        let _isTouch = !!(ev.type === 'touchstart');
        let _touch = _isTouch ? ev.touches[0] : ev;
        if (this.propagation) {
          ev.stopPropagation();
        }
        this.swiper.start = {
          x: _touch.pageX,
          y: _touch.pageY,
          time: (new Date()).getTime()
        };
        this.swiper.isScrolling = undefined;
        this.swiper.delta = {};
        this.swiper.dists = this.dists;
        this.swiper.isMove = true;
      },
      swipeMove (ev) {
        let _isTouch = !!(ev.type === 'touchmove');
        let _touch = _isTouch ? ev.touches[0] : ev;
        let _index = this.index;
        let _dists = this.swiper.dists;
        if (this.propagation) {
          ev.stopPropagation();
        }
        if (_isTouch && ev.touches.length > 1 || ev.scale && ev.scale !== 1) {
          return;
        }
        if (!this.swiper.isMove) {
          return;
        }
        if (this.disableScroll) {
          ev.preventDefault();
        }

        this.swiper.delta = {
          x: _touch.pageX - this.swiper.start.x,
          y: _touch.pageY - this.swiper.start.y
        };

        if (typeof this.swiper.isScrolling === 'undefined') {
          this.swiper.isScrolling = !!(this.swiper.isScrolling || Math.abs(this.swiper.delta.x) < Math.abs(this.swiper.y) );
        }

        if (!this.swiper.isScrolling) {
          ev.preventDefault();
          this.stop();

          if (this.continuous) {
            this.setTranslate(this.getCircleIndex(_index - 1), this.swiper.delta.x + this.getTranslate(this.getCircleIndex(_index - 1), _dists).dist, 0);
            this.setTranslate(_index, this.swiper.delta.x + this.getTranslate(_index, _dists).dist, 0);
            this.setTranslate(this.getCircleIndex(_index + 1), this.swiper.delta.x + this.getTranslate(this.getCircleIndex(_index + 1), _dists).dist, 0);
          } else {
            let limit = 1;
            if (!_index && this.swiper.delta.x > 0 || _index === this.items.length - 1 && this.swiper.delta.x < 0) {
              limit = Math.abs(this.swiper.delta.x) / this.width + 1;
            }
            this.swiper.delta.x = this.swiper.delta.x / limit;

            this.setTranslate(_index - 1, this.swiper.delta.x + this.getTranslate(_index - 1, _dists).dist, 0);
            this.setTranslate(_index,  this.swiper.delta.x + this.getTranslate(_index, _dists).dist, 0);
            this.setTranslate(_index + 1, this.swiper.delta.x + this.getTranslate(_index + 1, _dists).dist, 0);
          }
        }
      },
      swipeEnd (ev) {
        let _index = this.index;
        let _width = this.width;
        let _speed = this.speed;
        let duration = (new Date()).getTime() - this.swiper.start.time;
        let isValidSlide =
            Number(duration) < 250
            && Math.abs(this.swiper.delta.x) > 20
            || Math.abs(this.swiper.delta.x) > _width / 2;
        let isPastBounds =
            !_index && this.swiper.delta.x > 0
            || _index === this.items.length - 1 && this.swiper.delta.x < 0;
        let direction = this.swiper.delta.x < 0;

        this.swiper.isMove = false;
        if (this.propagation) {
          ev.stopPropagation();
        }
        if (this.continuous) {
          isPastBounds = false;
        }
        if (!this.swiper.isScrolling) {
          if (isValidSlide && !isPastBounds) {
            if (direction) {
              if (this.continuous) {
                this.setTranslate(this.getCircleIndex(_index - 1), -_width, 0);
                this.setTranslate(this.getCircleIndex(_index + 2), _width, 0);
              } else {
                this.setTranslate(_index - 1, -_width, 0);
              }
              this.setTranslate(_index,  -_width, _speed);
              this.setTranslate(this.getCircleIndex(_index + 1), 0, _speed);
              this.index = this.getCircleIndex(_index + 1);
            } else {
              if (this.continuous) {
                this.setTranslate(this.getCircleIndex(_index + 1), _width, 0);
                this.setTranslate(this.getCircleIndex(_index - 2), -_width, 0);
              } else {
                this.setTranslate(_index + 1, _width, 0);
              }
              this.setTranslate(_index, _width, _speed);
              this.setTranslate(this.getCircleIndex(_index - 1), 0, _speed);
              this.index = this.getCircleIndex(_index - 1);
            }
            this.slidefn(this.index, this.items[this.index]);
          } else {
            if (this.continuous) {
              this.setTranslate(this.getCircleIndex(_index-1), -_width, _speed);
              this.setTranslate(_index, 0, _speed);
              this.setTranslate(this.getCircleIndex(_index+1), _width, _speed);
            } else {
              this.setTranslate(_index-1, -_width, _speed);
              this.setTranslate(_index, 0, _speed);
              this.setTranslate(_index+1, _width, _speed);
            }
          }
        }
      },
      onTransitionEnd (ev) {
        if (parseInt(ev.target.getAttribute('data-index'), 10) === this.index) {
          if (this.auto) {
            this.run();
          }
          this.endfn(this.index, this.items[this.index]);
        }
      },
      getStyleItem (index) {
        let style = {};
        let translate = this.getTranslate(index, this.dists, this.speeds);
        style['width'] = this.width + 'px';
        style['left'] = (index * -this.width) +'px';
        style['-webkit-transform'] = 'translate(' + translate.dist + 'px,0)' + 'translateZ(0)';
        style['transition-duration'] = translate.speed + 'ms';
        return style;
      },
      setTranslate (index, dist, speed) {
        let distArr = this.dists.split(',');
        let speedArr = this.speeds.split(',');
        distArr[index] = dist;
        speedArr[index] = speed;
        this.dists = distArr.join(',');
        this.speeds = speedArr.join(',');
      },
      getTranslate (index, dists, speeds) {
        let distArr = (dists || this.dists).split(',');
        let speedArr = (speeds || this.speeds).split(',');
        return {
          dist: parseInt(distArr[index]) || 0,
          speed: parseInt(speedArr[index]) || 0
        };
      },
      getCircleIndex (index) {
        return (this.items.length + (index % this.items.length)) % this.items.length;
      }
    }
  };
</script>

<style lang="less" scoped>
  .vue-pure-slider-wrap {
    overflow: hidden;
    visibility: hidden;
    position: relative;
    text-align: center;
    z-index: 1;

    .vue-pure-slider-inner {
      position: relative;
      height: 157px;
      overflow: hidden;

      .vue-pure-slider-item {
        position: relative;
        float: left;
        width:100%;
        height: 100%;

        a, img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .vue-pure-slider-indicator {
      position: absolute;
      bottom: 0;
      width: 100%;

      ul {
        text-align: center;
        display: inline-block;
        margin: 0 auto;
        padding: 0;
        list-style: none;

        li {
          display: inline-block;
          background: white;
          height: 2px;
          width: 9px;
          padding: 0;
          margin: 0 2px;
          text-indent: -999px;
          list-style: none;
          overflow: hidden;
          &.active {
            background-color: #22c485;
          }
        }
      }
    }
  }
</style>