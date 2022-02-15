<template>
  <Panel title="金融头条" :cname="$style.panel">
    <section :class="$style.content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          签到领流量，1元500M！
          <em>></em>
        </swiper-slide>
        <swiper-slide>
          百万白条券免费送，速来领取！！
          <em>></em>
        </swiper-slide>
        <swiper-slide>
          签到领流量，1元500M！
          <em>></em>
        </swiper-slide>
        <swiper-slide>
          百万白条券免费送，速来领取！！
          <em>></em>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'RaiseSlider',
  components: {
    Panel,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  }
}
</script>

<style lang="scss">
  .swiper-container-vertical {
    height: 72px;
    line-height: 72px;
    .swiper-slide {
      font-size: 28px;
      color: #333;
      em {
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>

<style lang="scss" module>
  @import '~styles/element.scss';
  .panel {
    margin-top: 120px!important;
    >h4 {
      display: none;
    }
    .content {
      height: 72px;
      overflow: hidden;
      padding-left: 170px;
      background: url('@/pages/raise/components/raiseslider/images/scroll_title_img.png') no-repeat;
      background-size: auto 100%;
    }
  }
</style>
