<template>
  <Panel title="- 新品推荐 -" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货 > </div>
      <Slider :swiperOption="options" :items="items" cname="product-slider"></Slider>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
import Slider from '@/common-components/Slider'
export default {
  name: 'Product',
  components: {
    Panel,
    Slider
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: require('./images/5a2f6a4aNbd5a574c.jpg')
      }, {
        href: 'home',
        src: require('./images/5a2f6a17N9da099b1.jpg')
      }, {
        href: 'home',
        src: require('./images/5a2f6a36Nad95b650.jpg')
      }, {
        href: 'home',
        src: require('./images/5bc82e6eN0be93809.png')
      }],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      }
    }
  }
}
</script>

<style lang="scss">
  .product-slider {
    .swiper-container {
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {
        a {
          display: inline-block;
          width: 100%;
          img {
            width: 100%;
            display: block;
            height: 314px;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  .content {
    position: relative;
    .arrow {
      position: absolute;
      right: 20px;
      top: -70px;
      font-size: 28px;
      color: #999;
    }
  }
</style>
