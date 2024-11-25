<template>
  <header>
    <div class="header-top">
      <div class="container">
        <ul class="header-social-container">
          <li>
            <a href="#" class="social-link">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="social-link">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </li>
        </ul>

        <div class="header-alert-news">
          <p>
            <b>Free Shipping</b>
            This Week Order Over - $55
          </p>
        </div>

        <div class="header-top-actions">
          <select v-model="currency" @change="handleCurrencyChange">
            <option value="usd">USD &dollar;</option>
            <option value="eur">EUR &euro;</option>
          </select>

          <select v-model="language" @change="handleLanguageChange">
            <option value="en-US">English</option>
            <option value="es-ES">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>

    <div class="header-main">
      <div class="container">
        <a href="#" class="header-logo">
          <img
            src="../assets/images/logo/logo.svg"
            alt="Anon logo"
            width="120"
            height="36"
          />
        </a>

        <div class="header-search-container">
          <input
            type="search"
            v-model="searchQuery"
            class="search-field"
            placeholder="Enter your product name..."
          />
          <button class="search-btn" @click="searchProducts">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>

        <div class="header-user-actions">
          <!-- <button class="action-btn">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button> -->

          <n-dropdown :options="options">
            <button button style="border: none !important;">
              <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            </button>
          </n-dropdown>

          <button  @click="showFavouriteModal = true" class="action-btn">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>

            <span class="count">{{ favoritesCount }}</span>
          </button>

          <button  @click="showCartModal = true" class="action-btn">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
              />
            </svg>

            <span class="count">{{ cartCount }}</span>
          </button>
        </div>
      </div>
    </div>

    <nav class="desktop-navigation-menu">
      <div class="container">
        <ul class="desktop-menu-category-list space-x-1">
          <li class="menu-category" v-for="menu in menus" :key="menu.title">
            <a href="#" class="menu-title">{{ menu.title }}</a>
            <div v-if="menu.submenus" class="dropdown-panel">
              <ul
                class="dropdown-panel-list"
                v-for="submenu in menu.submenus"
                :key="submenu.title"
              >
                <li class="menu-title">
                  <a href="#">{{ submenu.title }}</a>
                </li>
                <li
                  class="panel-list-item"
                  v-for="item in submenu.items"
                  :key="item"
                >
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <n-modal
    v-model:show="showFavouriteModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Wish List"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
    <template #header-extra>

    </template>
    <Favourite/>
    <!-- <template #footer>
      Footer
    </template> -->
  </n-modal>
  <n-modal
    v-model:show="showCartModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Cart List"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
  <template #header-extra>

  </template>
  <Cart/>
  <!-- <template #footer>
    Footer
  </template> -->
  </n-modal>
</template>

<script lang="ts">

import Cart from './Cart.vue';
import Favourite from './Favourite.vue';
import { defineComponent, h, ref } from 'vue';
import type { Component } from 'vue';
import { NIcon, NDropdown, NButton, NModal } from 'naive-ui';
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon
} from '@vicons/ionicons5';

function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
}

export default defineComponent({
  components: {
    NDropdown,
    NButton,
    NModal,
    Favourite,
    Cart
  },
  data() {
    return {
      bodyStyle: {
        width: '600px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      } as const,
      showFavouriteModal: false,
      showCartModal: false,
      currency: 'usd',
      language: 'en-US',
      searchQuery: '',
      favoritesCount: 0,
      cartCount: 0,
      menus: [
        {
          title: 'Home',
        },
        {
          title: 'Categories',
          submenus: [
            {
              title: 'Electronics',
              items: ['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'],
            },
            {
              title: "Men's",
              items: ['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'],
            },
            {
              title: "Women's",
              items: ['Formal', 'Casual', 'Perfume', 'Cosmetics', 'Bags'],
            },
            {
              title: 'Electronics',
              items: [
                'SmartWatch',
                'Smart Tv',
                'Keyboard',
                'Mouse',
                'Microphone',
              ],
            },
          ],
        },
        {
          title: "Men's",
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
        {
          title: "Women's",
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
        {
          title: 'Jewelry',
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
        {
          title: 'Perfume',
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
        {
          title: 'Blog',
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
        {
          title: 'Hot Offers',
          submenus: [
            {
              items: ['Shirts', 'Shorts & Jeans', 'Wallet'],
            },
          ],
        },
      ],
      options: [
        {
          label: 'Profile',
          key: 'profile',
          icon: renderIcon(UserIcon),
        },
        {
          label: 'Edit Profile',
          key: 'editProfile',
          icon: renderIcon(EditIcon),
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: renderIcon(LogoutIcon),
        },
      ],
    };
  },
  methods: {
    handleCurrencyChange() {
      console.log('Currency changed to:', this.currency);
    },
    handleLanguageChange() {
      console.log('Language changed to:', this.language);
    },
    searchProducts() {
      console.log('Searching for:', this.searchQuery);
    },
  },
});
</script>


<style scoped>
  button{
    border: none !important;
  }
</style>
