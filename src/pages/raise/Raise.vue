<template>
  <div>
    <CommonHeader />
    <RaiseSlider />
    <RaiseDaily />
    <RaiseIn />
    <RaiseMoreWelfare />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import CommonHeader from '@/common-components/header/Header'
import RaiseSlider from './components/raiseslider/RaiseSlider'
import RaiseDaily from './components/daily/Daily'
import RaiseIn from './components/in/In'
import RaiseMoreWelfare from './components/morewelfare/MoreWelfare'
import Footer from '../../common-components/footer/Footer'
import Navbar from '../../common-components/navbar/Navbar'
export default {
  name: 'Raise',
  components: {
    CommonHeader,
    RaiseSlider,
    RaiseDaily,
    RaiseIn,
    RaiseMoreWelfare,
    Footer,
    Navbar
  }
}
</script>

<style lang="scss" module>
  body {
    background: #f5f5f5;
  }
</style>
