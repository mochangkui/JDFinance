<template>
  <Panel title="- 每日签到 -" :cname="$style.panel">
    <section :class="$style.content">
      <p>不抢白不抢</p>
      <img src="./images/589bd5a2Nabdbbbd9.jpg" alt="">
      <img src="./images/589bd5d4Nf32e7adc.jpg" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'RaiseDaily',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .content {
    position: relative;
    @include flex(row);
    padding-bottom: 40px;
    p {
      position: absolute;
      top: -70px;
      right: 20px;
      font-size: 28px;
      color: #999;
    }
    img {
      width: 320px;
      height: 136px;
    }
  }
</style>
