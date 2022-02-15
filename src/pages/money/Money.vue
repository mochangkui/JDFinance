<template>
  <div>
    <common-header/>
    <MoneySlider />
    <Advert />
    <MoneySelected />
    <FinancialAdv />
    <Financial />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import CommonHeader from '@/common-components/header/Header'
import MoneySlider from './components/moneyslider/MoneySlider'
import Advert from './components/advert/Advert'
import MoneySelected from './components/MoneySelected'
import FinancialAdv from './components/financial-adv/FinancialAdv'
import Financial from './components/financial/Financial'
import Footer from '../../common-components/footer/Footer'
import Navbar from '../../common-components/navbar/Navbar'
export default {
  name: 'Money',
  components: {
    CommonHeader,
    MoneySlider,
    Advert,
    MoneySelected,
    FinancialAdv,
    Financial,
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
