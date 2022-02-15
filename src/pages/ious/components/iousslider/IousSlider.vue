<template>
  <slider :items="items" :cname="$style.slider"></slider>
</template>

<script>
import Slider from '@/common-components/Slider'
export default {
  name: 'IousSlider',
  components: {
    Slider
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: require('./images/59a94358N92475fca.jpg')
      }, {
        href: 'home',
        src: require('./images/59bf1f41N50d846f9.jpg')
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
