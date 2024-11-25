<template>
    <div class="banner">
      <div class="container">
        <div class="slider-container has-scrollbar">
          <div 
            v-for="(item, index) in banners" 
            :key="index" 
            class="slider-item"
          >
            <img :src='item.imgSrc'  :alt="item.altText" class="banner-img" />
            <div class="banner-content">
              <p class="banner-subtitle">{{ item.subtitle }}</p>
              <h2 class="banner-title">{{ item.title }}</h2>
              <p class="banner-text">
                starting at &dollar; <b>{{ item.price }}</b>
              </p>
              <a href="#" class="banner-btn">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import banner1 from '../assets/images/banner-1.jpg'
  import banner2 from '../assets/images/banner-2.jpg'
  import banner3 from '../assets/images/banner-3.jpg'
  export default {
    name: "Banner",
    data() {
      return {
        banners: [
          {
            imgSrc: banner1,
            altText: "women's latest fashion sale",
            subtitle: "Trending item",
            title: "Women's latest fashion sale",
            price: "20.00",
          },
          {
            imgSrc: banner2,
            altText: "modern sunglasses",
            subtitle: "Trending accessories",
            title: "Modern sunglasses",
            price: "15.00",
          },
          {
            imgSrc: banner3,
            altText: "new fashion summer sale",
            subtitle: "Sale Offer",
            title: "New fashion summer sale",
            price: "29.99",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your banner styles here */
  .banner {
    /* Example styles */
  }
  .container {
    /* Example styles */
  }
  .slider-container {
    /* Example styles */
  }
  </style>
  