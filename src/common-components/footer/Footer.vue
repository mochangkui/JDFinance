<template>
  <Panel title="公司信息" :class="$style.panel">
    <ul :class="$style.content">
      <li>
        <img src="./images/577cf395N31e76288.png" alt="">
      </li>
      <li>
        <div>
          <img src="./images/577dc28dNe5138337.png" alt="">
          <p>客户端</p>
        </div>
        <div>
          <img src="./images/577cf3dcN18aadbf2.png" alt="">
          <p>触屏版</p>
        </div>
        <div>
          <img src="./images/577cf3e5N53f740b8.png" alt="">
          <p>电脑版</p>
        </div>
      </li>
      <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
      <li>投资有风险，购买需谨慎</li>
      <li>京东金融平台服务协议</li>
      <li>京东金融隐私政策</li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'Footer',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~styles/element.scss';
  .panel {
    >h4 {
      display: none;
    }
    margin-bottom: 100px!important;
    .content {
      @include flex();
      background: #f5f5f5;
      li {
        width: 100%;
        text-align: center;
        color: #999;
        font-size: 24px;
        img {
          width: 100%;
          height: 143px;
        }
        &:nth-child(2) {
          @include flex(row);
          justify-content: space-around;
          height: 186px;
          box-sizing: border-box;
          div {
            text-align: center;
            padding-top: 20px;
            img {
              width: 90px;
              height: 90px;
            }
            p {
              font-size: 26px;
              text-align: center;
              display: block;
              color: #999;
              margin-top: 12px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
        &:nth-child(n + 3) {
          padding: 24px 0;
          height: 38px;
          line-height: 38px;
          border-top: solid 1PX #ddd;
        }
      }
    }
  }
</style>
