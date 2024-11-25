<template>
  <Header />
  <Banner />
  <Category/>
  <div class="product-container">
    <div class="container">
      <SidebarHome/>
      <div class="felx flex-col">
        <ProductHome/>
        <NewProduct/>
      </div>
    </div>
  </div>
  <div class="container mx-auto flex">
    <Testimonial/>
    <CallToAction />
    <Service />
  </div>

  <Footer/>
</template>
<script scop>
import Header from '/src/components/Header.vue';
import Banner from '/src/components/Banner.vue';
import Category from '/src/components/Category.vue';
import ProductHome from '/src/components/ProductHome.vue';
import NewProduct from '/src/components/NewProducts.vue';
import SidebarHome from '/src/components/SidebarHome.vue';


import Testimonial from '/src/components/Testimonial.vue';
import CallToAction from '/src/components/CallToAction.vue';
import Service from '/src/components/Service.vue';


import Footer from '/src/components/Footer.vue';




import { defineComponent } from 'vue';
import Sidebar from './components/SidebarHome.vue';

export default defineComponent({
  components: { Header, Banner, Category, ProductHome, NewProduct, SidebarHome, Testimonial, CallToAction,Service, Footer },
  setup() {
    return { }
    }
  })
</script>