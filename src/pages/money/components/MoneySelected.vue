<template>
  <Panel title="- 理财精选 -">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{item.title}}<span>{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'MoneySelected',
  components: {
    Panel
  },
  data () {
    return {
      items: [{
        title: '定期理财',
        sub: '理财首选',
        rate: '5.60%',
        text: '历史年化回报率'
      }, {
        title: '小白理财',
        sub: '理财首选',
        rate: '4.22%',
        text: '7日年化收益率'
      }, {
        title: '月月盈',
        sub: '养老保障',
        rate: '5%',
        text: '七日年化收益率'
      }, {
        title: '小白基金',
        sub: '天天赚钱',
        rate: '4.27%',
        text: '7日年化收益率'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  @import '~styles/layout.scss';
  .content {
    @include flex(row);
    .item {
      padding: 34px 16px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
      &:after {
        content: '';
        height: 136px;
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        border-right: solid 1px #eee;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
      dt {
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span {
          font-size: 22px;
          color: #ff5155;
          border: solid 1px #ff5155;
          padding: 0 8px;
          margin-left: 10px;
        }
      }
      dd {
        &:nth-child(2) {
          font-size: 44px;
          font-weight: 700;
          height: 58px;
          line-height: 58px;
          color: #ff5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3) {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -200px;
    }
  }
</style>
