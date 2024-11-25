<template>
    <div class="cta-container">
      <img :src="ctaData.bannerImage" :alt="ctaData.altText" class="cta-banner">
  
      <a :href="ctaData.link" class="cta-content">
        <p class="discount">{{ ctaData.discount }}</p>
        <h2 class="cta-title">{{ ctaData.title }}</h2>
        <p class="cta-text">{{ ctaData.price }}</p>
        <button class="cta-btn">{{ ctaData.buttonText }}</button>
      </a>
    </div>
  </template>
  
  <script>
  import ctaData_img from '../assets/images/cta-banner.jpg';
  export default {
    data() {
      return {
        ctaData: {
          bannerImage: ctaData_img,
          altText: 'summer collection',
          discount: '25% Discount',
          title: 'Summer collection',
          price: 'Starting @ $10',
          link: '#',
          buttonText: 'Shop now'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles specific to the CTA container */
  .cta-container {
    /* Your styles here */
  }
  
  .cta-banner {
    /* Your styles here */
  }
  
  .cta-content {
    /* Your styles here */
  }
  
  .cta-btn {
    /* Your styles here */
  }
  
  /* Add other styles as needed */
  </style>
  