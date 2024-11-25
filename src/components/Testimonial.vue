<template>
    <div class="testimonial">
      <h2 class="title">Testimonial</h2>
  
      <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
        <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-banner" width="80" height="80">
  
        <p class="testimonial-name">{{ testimonial.name }}</p>
  
        <p class="testimonial-title">{{ testimonial.title }}</p>
  
        <img src="../assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26">
  
        <p class="testimonial-desc">
          {{ testimonial.description }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import testimonials_img from '../assets/images/testimonial-1.jpg';
  export default {
    data() {
      return {
        testimonials: [
          {
            image: testimonials_img,
            name: 'Alan Doe',
            title: 'CEO & Founder Invision',
            description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.'
          }
          // Add more testimonials as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles specific to the testimonial section */
  .testimonial {
    /* Your styles */
  }
  
  .testimonial-card {
    /* Your styles */
  }
  
  /* Add other styles as needed */
  </style>
  