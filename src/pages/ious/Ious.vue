<template>
  <div>
    <Header/>
    <IousSlider />
    <IousWelfare />
    <IousService />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import Header from '@/common-components/header/Header'
import IousSlider from './components/iousslider/IousSlider'
import IousWelfare from './components/welfare/Welfare'
import IousService from './components/service/Service'
import Footer from '../../common-components/footer/Footer'
import Navbar from '../../common-components/navbar/Navbar'
export default {
  name: 'Ious',
  components: {
    Header,
    IousSlider,
    IousWelfare,
    IousService,
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
