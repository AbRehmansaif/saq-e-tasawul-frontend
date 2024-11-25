<template>
    <div class="category">
      <div class="container">
        <div class="category-item-container has-scrollbar">
          <div 
            class="category-item" 
            v-for="(category, index) in categories" 
            :key="index"
          >
            <div class="category-img-box">
              <img :src="category.image" :alt="category.title" width="30" />
            </div>
  
            <div class="category-content-box">
              <div class="category-content-flex">
                <h3 class="category-item-title">{{ category.title }}</h3>
                <p class="category-item-amount">({{ category.amount }})</p>
              </div>
  
              <a href="#" class="category-btn">Show all</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import dress1 from '../assets/images/icons/dress.svg'
  import dress2 from '../assets/images/icons/coat.svg'
  import dress3 from '../assets/images/icons/glasses.svg'
  import dress4 from '../assets/images/icons/shorts.svg'
  import dress5 from '../assets/images/icons/tee.svg'
  import dress6 from '../assets/images/icons/jacket.svg'
  import dress7 from '../assets/images/icons/watch.svg'
  import dress8 from '../assets/images/icons/hat.svg'
  export default {
    data() {
      return {
        categories: [
          {
            image: dress1,
            title: 'Dress & frock',
            amount: 53
          },
          {
            image: dress2,
            title: 'Winter wear',
            amount: 58
          },
          {
            image: dress3,
            title: 'Glasses & lens',
            amount: 68
          },
          {
            image: dress4,
            title: 'Shorts & jeans',
            amount: 84
          },
          {
            image: dress5,
            title: 'T-shirts',
            amount: 35
          },
          {
            image: dress6,
            title: 'Jacket',
            amount: 16
          },
          {
            image: dress7,
            title: 'Watch',
            amount: 27
          },
          {
            image: dress8,
            title: 'Hat & caps',
            amount: 39
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles here that are specific to the category component */
  .category {
    /* Your styles */
  }
  </style>
  