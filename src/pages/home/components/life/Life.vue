<template>
  <Panel title="- 生活服务 -" :cname="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item">
        <img src="./images/58be8a6eNf10193d0.png" alt="">
        <p>惠加油</p>
      </li>
      <li :class="$style.item">
        <img src="./images/58be8a81Nd7716a06.png" alt="">
        <p>小白信用</p>
        <p :class="$style.red">全新升级</p>
      </li>
      <li :class="$style.item">
        <img src="./images/58be8acfNdadcaf00.png" alt="">
        <p>信用卡还款</p>
      </li>
      <li :class="$style.item">
        <img src="./images/58be89c8Nb9d41295.png" alt="">
        <p>卡转让</p>
      </li>
      <li :class="$style.item">
        <img src="./images/58f57851N17ee6993.jpg" alt="">
        <p>定期还款</p>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'Life',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .content {
    @include flex(row);
    box-sizing: border-box;
    padding-bottom: 40px;
    justify-content: space-around;
    .item {
      text-align: center;
      img {
        width: 90px;
        height: 90px;
      }
      p {
        margin-top: 12px;
        font-size: 26px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:nth-child(3) {
          color: #FF801A;
        }
      }
    }
  }
</style>
