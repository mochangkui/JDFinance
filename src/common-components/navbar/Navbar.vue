<template>
  <Panel :class="$style.panel">
    <ul :class="$style.content">
      <li>
        <router-link :to="{name: 'home'}">
          <img src="./images/580f2435Nbfaa8055.png" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'money'}">
          <img src="./images/580f1e25N028a1f2c.png" alt="">
          <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'ious'}">
          <img src="./images/580f50e4N005181d0.png" alt="">
          <p>白条</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'raise'}">
          <img src="./images/580f240aNbee3dcc4.png" alt="">
          <p>众筹</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'home'}">
          <img src="./images/580f51cdN4caf20b2.png" alt="">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '@/common-components/Panel'
export default {
  name: 'Navbar',
  components: {
    Panel
  }
}
</script>

<style lang="scss">
  .router-link-exact-active {
    p {
      color: red!important;
    }
  }
</style>

<style lang="scss" module>
  @import '~styles/element.scss';
  .panel {
    margin: 0!important;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100px;
    >h4 {
      display: none;
    }
    .content {
      @include flex(row);
      justify-content: space-around;
      height: 100%;
      li {
        width: 20%;
        text-align: center;
        a {
          text-decoration: none;
          img {
            width: 44px;
            height: 44px;
            display: inline-block;
            margin: 12px auto 6px;
          }
          p {
            font-size: 22px;
            color: #656565;
          }
        }
      }
    }
  }
</style>
