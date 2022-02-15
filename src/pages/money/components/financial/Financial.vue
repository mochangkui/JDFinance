<template>
  <Panel title="理财精选" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img src="./images/580d7f6cN7f35e596.png" alt="">
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率4.50%</p>
        </div>
        <em>去赚钱></em>
      </div>
      <div :class="$style.item">
        <img src="./images/580d80afN63b1085a.png" alt="">
        <div>
          <h4>季度理财</h4>
          <p>历史年化回报率5.50%</p>
        </div>
        <em>去赚钱></em>
      </div>
      <div :class="$style.item">
        <img src="./images/580d8189N6b6f8052.png" alt="">
        <div>
          <h4>一年理财</h4>
          <p>历史年化回报率5.80%</p>
        </div>
        <em>去赚钱></em>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'MoneyFinancial',
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
          width: 334px;
          font-size: 32px;
          color: #333;
          p {
            width: 100%;
            color: #ff3232;
            font-size: 24px;
            margin-top: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        >em {
          font-size: 24px;
          color: #FF801A;
        }
      }
    }
  }
</style>
