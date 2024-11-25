<template>
    <div class="max-w-7xl mx-auto p-2">
      <h2 class="text-2xl font-semibold mb-6">Your Favorite Products</h2>
      <div class="space-y-2 p-4" style="max-height: 400px; overflow: scroll;">
        <div v-for="(product, index) in products" :key="index"  class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <img :src="product.defaultImage" :alt="product.name" class="w-20 h-20 object-cover rounded-md">
          <div class="flex-1 ml-4">
            <h3 class="text-lg font-normal">{{ product.name }}</h3>
            <p class="text-lg text-gray-700">{{ product.price }}</p>
          </div>
          <button @click="addToChart(product)" class="text-blue-500 hover:text-blue-700 font-semibold">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>

          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    {
      name: "Mens Winter Leathers Jackets",
      price: "$48.00",
      defaultImage: "./assets/images/products/jacket-3.jpg",
    },
    {
      name: "Pure Garment Dyed Cotton Shirt",
      price: "$45.00",
      defaultImage: "./assets/images/products/shirt-1.jpg",
    },
    {
      name: "MEN Yarn Fleece Full-Zip Jacket",
      price: "$58.00",
      defaultImage: "./assets/images/products/jacket-5.jpg",
    },
    {
      name: "Casual Men's Brown shoes",
      price: "$99.00",
      defaultImage: "./assets/images/products/shoe-2.jpg",
    },
  ]);
  
//   const favorites = ref([]);
  
  // Add product to favorites
//   const addToChart = (product) => {
//     if (!favorites.value.some(item => item.name === product.name)) {
//       favorites.value.push(product);
//     } else {
//       alert("This product is already in your favorites.");
//     }
//   };
  
  // Remove product from favorites
//   const removeFromFavorites = (index) => {
//     favorites.value.splice(index, 1);
//   };
  </script>
  
  <style scoped>
  /* Tailwind is being used for styling, so custom styles can be minimal */
  </style>
  