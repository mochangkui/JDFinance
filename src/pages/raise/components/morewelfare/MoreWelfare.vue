<template>
  <Panel title="更多福利">
    <section :class="$style.content">
      <span>专享福利 ></span>
      <img src="./images/599cee04Ne77b3641.jpg" alt="">
      <img src="./images/599cee57Naea99020.jpg" alt="">
      <img src="./images/59549aedNa30670f7.jpg" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'RaiseMoreWelfare',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .content {
    position: relative;
    padding-bottom: 40px;
    @include flex(row);
    span {
      position: absolute;
      right: 30px;
      top: -70px;
      font-size: 26px;
      color: #999;
    }
    img {
      width: 33.33%;
      height: 280px;
    }
  }
</style>
