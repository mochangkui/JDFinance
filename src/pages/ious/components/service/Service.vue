<template>
  <Panel title="-更多服务-" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="./images/59b8da06N14f62cf3.png" alt="">
        <p>小白条</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590ac7deN9a0eac2a.png" alt="">
        <p>白条商城</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590ac8afN5dd91d6e.png" alt="">
        <p>消费分期</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590ac8e8Ne9def22e.png" alt="">
        <p>借钱</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590ac860N752d5738.png" alt="">
        <p>白条提额</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590aca20N089fd34a.png" alt="">
        <p>白条闪付</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590aca55N22a6f274.png" alt="">
        <p>小白会玩</p>
      </div>
      <div :class="$style.item">
        <img src="./images/590aca78Nf15a7947.png" alt="">
        <p>钢镚</p>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'IousService',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .content {
    @include flex(row);
    .item {
      width: 25%;
      height: 144px;
      text-align: center;
      padding-bottom: 50px;
      img {
        width: 105px;
        height: 105px;
      }
      p {
        font-size: 26px;
        color: #666;
        margin-top: 12px;
      }
    }
  }
</style>
