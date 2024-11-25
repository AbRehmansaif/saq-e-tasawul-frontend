<template>
    <aside class="w-64 bg-white shadow-lg h-screen overflow-y-auto">
      <!-- Category Section -->
      <div class="p-4">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold">Category</h2>
          <button @click="$emit('close')" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <!-- Category List -->
        <div class="space-y-4">
          <div v-for="(category, index) in categories" :key="index">
            <button 
              @click="toggleCategory(index)"
              class="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
            >
              <div class="flex items-center space-x-2">
                <img :src="category.icon" :alt="category.name" class="w-5 h-5">
                <span class="font-medium">{{ category.name }}</span>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 transition-transform" 
                :class="{ 'rotate-180': openCategories[index] }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
  
            <!-- Submenu -->
            <div v-show="openCategories[index]" class="ml-4 mt-2 space-y-2">
              <a 
                v-for="item in category.items" 
                :key="item.name"
                href="#" 
                class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg text-sm"
              >
                <span>{{ item.name }}</span>
                <span class="text-gray-500 text-xs">{{ item.stock }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Best Sellers Section -->
      <div class="p-4 border-t">
        <h3 class="text-lg font-semibold mb-4">Best Sellers</h3>
        <div class="space-y-4">
          <div v-for="product in bestSellers" :key="product.id" class="flex space-x-3">
            <a href="#" class="flex-shrink-0">
              <img :src="product.image" :alt="product.name" class="w-16 h-16 object-cover rounded">
            </a>
            <div class="flex-1">
              <a href="#" class="text-sm font-medium hover:text-blue-600">{{ product.name }}</a>
              <div class="flex text-yellow-400 my-1">
                <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="{ 'text-gray-300': star > product.rating }"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-400 line-through text-sm">${{ product.oldPrice }}</span>
                <span class="text-blue-600 font-medium">${{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        openCategories: {},
        categories: [
          {
            name: 'Clothes',
            icon: '/assets/images/icons/dress.svg',
            items: [
              { name: 'Shirt', stock: '300' },
              { name: 'Shorts & Jeans', stock: '60' },
              { name: 'Jacket', stock: '50' },
              { name: 'Dress & Frock', stock: '87' }
            ]
          },
          {
            name: 'Footwear',
            icon: '/assets/images/icons/shoes.svg',
            items: [
              { name: 'Sports', stock: '45' },
              { name: 'Formal', stock: '75' },
              { name: 'Casual', stock: '35' },
              { name: 'Safety Shoes', stock: '26' }
            ]
          },
          // Add other categories similarly...
        ],
        bestSellers: [
          {
            id: 1,
            name: 'Baby Fabric Shoes',
            image: '/assets/images/products/1.jpg',
            rating: 5,
            oldPrice: '5.00',
            price: '4.00'
          },
          {
            id: 2,
            name: "Men's Hoodies T-shirt",
            image: '/assets/images/products/2.jpg',
            rating: 4.5,
            oldPrice: '17.00',
            price: '7.00'
          },
          // Add other products similarly...
        ]
      }
    },
    methods: {
      toggleCategory(index) {
        this.$set(this.openCategories, index, !this.openCategories[index])
      }
    }
  }
  </script>