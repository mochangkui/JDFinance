<template>
  <Panel title="理财精选" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="./images/58affc3bNbfa8f9d7.jpg" alt="">
        <div>
          <h4>开通白条</h4>
          <p>送188元礼包</p>
        </div>
        <em>立即开通></em>
      </div>
      <div :class="$style.item">
        <img src="./images/58affd58Nb5c9198e.jpg" alt="">
        <div>
          <h4>白条闪付</h4>
          <p>新手享158礼包</p>
        </div>
        <em>随机立减></em>
      </div>
      <div :class="$style.item">
        <img src="./images/58bd2e10N453e9464.jpg" alt="">
        <div>
          <h4>白条提额</h4>
          <p>金融app专享提额礼包</p>
        </div>
        <em>去提额></em>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'IousWelfare',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .panel {
    >h4 {
      border-bottom: solid 1px #ddd;
    }
    .content {
      .item {
        @include flex(row);
        align-items: center;
        height: 140px;
        &:after {
          content: " ";
          box-sizing: border-box;
          height: 0;
          width: 100%;
          border-bottom: solid 1px #ddd;
          margin-left: 150px;
        }
        &:last-child:after {
          display: none;
        }
        >img {
          width: 88px;
          height: 88px;
          margin: 0 32px;
        }
        >div {
          width: 304px;
          font-size: 32px;
          color: #333;
          p {
            width: 100%;
            color: #999;
            font-size: 24px;
            margin-top: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        >em {
          font-size: 30px;
          color: #FF801A;
        }
      }
    }
  }
</style>
