<template>
  <slider :items="items" :cname="$style.slider"></slider>
</template>

<script>
import Slider from '@/common-components/Slider'
export default {
  name: 'MoneySlider',
  components: {
    Slider
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: require('./images/59f97baeN3cdae084.jpg')
      }, {
        href: 'home',
        src: require('./images/59f97c36N7599be57.png')
      }]
    }
  }
}
</script>

<style lang='scss' module>
  .slider {
    margin-top: 120px;
    img {
      width: 100%
    }
  }
</style>
