<template>
  <div>
    <common-header/>
    <home-slider />
    <novice />
    <Borrow />
    <MoneySelected />
    <Product />
    <Life />
    <Footer />
    <Navbar />
  </div>
</template>

<script>
import commonHeader from '@/common-components/header/Header'
import HomeSlider from './components/homeslider/HomeSlider'
import Novice from './components/novice/Novice'
import Borrow from './components/borrow/Borrow'
import MoneySelected from './components/MoneySelected'
import Product from './components/product/Product'
import Life from './components/life/Life'
import Footer from '../../common-components/footer/Footer'
import Navbar from '../../common-components/navbar/Navbar'
export default {
  name: 'Home',
  components: {
    commonHeader,
    HomeSlider,
    Novice,
    Borrow,
    MoneySelected,
    Product,
    Life,
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
