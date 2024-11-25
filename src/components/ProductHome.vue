<template>
    <div class="product-minimal">
      
      <div class="product-showcase">
        <h2 class="title">New Arrivals</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div class="showcase-container">
            <div v-for="product in newArrivals" :key="product.id" class="showcase">
              <a href="#" class="showcase-img-box">
                <img :src="product.image" :alt="product.title" width="70" class="showcase-img">
              </a>
              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">{{ product.title }}</h4>
                </a>
                <a href="#" class="showcase-category">{{ product.category }}</a>
                <div class="price-box">
                  <p class="price">${{ product.price.toFixed(2) }}</p>
                  <del>${{ product.oldPrice.toFixed(2) }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    
      <div class="product-showcase">
        <h2 class="title">Trending</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div class="showcase-container">
            <div v-for="product in trendingProducts" :key="product.id" class="showcase">
              <a href="#" class="showcase-img-box">
                <img :src="product.image" :alt="product.title" width="70" class="showcase-img">
              </a>
              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">{{ product.title }}</h4>
                </a>
                <a href="#" class="showcase-category">{{ product.category }}</a>
                <div class="price-box">
                  <p class="price">${{ product.price.toFixed(2) }}</p>
                  <del>${{ product.oldPrice.toFixed(2) }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      
      <div class="product-showcase">
        <h2 class="title">Top Rated</h2>
        <div class="showcase-wrapper has-scrollbar">
          <div class="showcase-container">
            <div v-for="product in topRatedProducts" :key="product.id" class="showcase">
              <a href="#" class="showcase-img-box">
                <img :src="product.image" :alt="product.title" width="70" class="showcase-img">
              </a>
              <div class="showcase-content">
                <a href="#">
                  <h4 class="showcase-title">{{ product.title }}</h4>
                </a>
                <a href="#" class="showcase-category">{{ product.category }}</a>
                <div class="price-box">
                  <p class="price">${{ product.price.toFixed(2) }}</p>
                  <del>${{ product.oldPrice.toFixed(2) }}</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import clothes1 from '../assets/images/products/clothes-1.jpg'
  import clothes2 from '../assets/images/products/clothes-2.jpg'


  import sport1 from '../assets/images/products/sports-1.jpg'
  import sport2 from '../assets/images/products/sports-2.jpg'

  import watch1 from '../assets/images/products/watch-3.jpg'
  import watch2 from '../assets/images/products/jewellery-3.jpg'
  export default {
    name: 'ProductShowcase',
    data() {
      return {
        newArrivals: [
          {
            id: 1,
            title: 'Relaxed Short full Sleeve T-Shirt',
            category: 'Clothes',
            price: 45.00,
            oldPrice: 12.00,
            image: clothes1
          },
          {
            id: 2,
            title: 'Girls pnk Embro design Top',
            category: 'Clothes',
            price: 61.00,
            oldPrice: 9.00,
            image: clothes2
          },
          {
            id: 1,
            title: 'Relaxed Short full Sleeve T-Shirt',
            category: 'Clothes',
            price: 45.00,
            oldPrice: 12.00,
            image: clothes1
          },
          {
            id: 2,
            title: 'Girls pnk Embro design Top',
            category: 'Clothes',
            price: 61.00,
            oldPrice: 9.00,
            image: clothes2
          },
        
        ],
        trendingProducts: [
          {
            id: 1,
            title: 'Running & Trekking Shoes - White',
            category: 'Sports',
            price: 49.00,
            oldPrice: 15.00,
            image: sport1
          },
          {
            id: 2,
            title: 'Trekking & Running Shoes - black',
            category: 'Sports',
            price: 78.00,
            oldPrice: 36.00,
            image: sport2
          },
          {
            id: 1,
            title: 'Running & Trekking Shoes - White',
            category: 'Sports',
            price: 49.00,
            oldPrice: 15.00,
            image: sport1
          },
          {
            id: 2,
            title: 'Trekking & Running Shoes - black',
            category: 'Sports',
            price: 78.00,
            oldPrice: 36.00,
            image: sport2
          },
          // Add more trending products...
        ],
        topRatedProducts: [
          {
            id: 1,
            title: 'Pocket Watch Leather Pouch',
            category: 'Watches',
            price: 50.00,
            oldPrice: 34.00,
            image: watch1
          },
          {
            id: 2,
            title: 'Silver Deer Heart Necklace',
            category: 'Jewellery',
            price: 84.00,
            oldPrice: 30.00,
            image: watch2
          },
          {
            id: 1,
            title: 'Pocket Watch Leather Pouch',
            category: 'Watches',
            price: 50.00,
            oldPrice: 34.00,
            image: watch1
          },
          {
            id: 2,
            title: 'Silver Deer Heart Necklace',
            category: 'Jewellery',
            price: 84.00,
            oldPrice: 30.00,
            image: watch2
          },
          // Add more top rated products...
        ]
      }
    }
  }
  </script>
  
