<template>
    <footer>
      <!-- Brand Directory Section -->
      <!-- <div class="footer-category">
        <div class="container">
          <h2 class="footer-category-title">Brand directory</h2>
          <div class="footer-category-box" v-for="(category, index) in categories" :key="index">
            <h3 class="category-box-title">{{ category.name }}:</h3>
            <a v-for="(item, i) in category.items" :key="i" href="#" class="footer-category-link">{{ item }}</a>
          </div>
        </div>
      </div> -->
  
      <!-- Footer Navigation Section -->
      <div class="footer-nav">
        <div class="container">
          <ul class="footer-nav-list" v-for="(navGroup, index) in navGroups" :key="index">
            <li class="footer-nav-item">
              <h2 class="nav-title">{{ navGroup.title }}</h2>
            </li>
            <li v-for="(link, i) in navGroup.links" :key="i" class="footer-nav-item">
              <a href="#" class="footer-nav-link">{{ link }}</a>
            </li>
          </ul>
  
          <!-- Contact Info Section -->
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Contact</h2>
            </li>
            <li class="footer-nav-item flex" v-for="(contact, index) in contactInfo" :key="index">
              <div class="icon-box">
                <ion-icon :name="contact.icon"></ion-icon>
              </div>
              <a v-if="contact.type === 'link'" :href="contact.link" class="footer-nav-link">{{ contact.text }}</a>
              <address v-else class="footer-nav-link">{{ contact.text }}</address>
            </li>
          </ul>
  
          <!-- Social Links Section -->
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Follow Us</h2>
            </li>
            <li>
              <ul class="social-link">
                <li v-for="(social, i) in socialLinks" :key="i" class="footer-nav-item">
                  <a :href="social.link" class="footer-nav-link">
                    <ion-icon :name="social.icon"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Footer Bottom Section -->
      <div class="footer-bottom">
        <div class="container">
          <img src="../assets/images/payment.png" alt="payment method" class="payment-img" />
          <p class="copyright">
            Copyright &copy; <a href="#">Saq-e-Tawasul</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import jacket3 from '../assets/images/products/jacket-3.jpg'
  export default {
    data() {
      return {
        categories: [
          {
            name: 'Fashion',
            items: ['T-shirt', 'Shirts', 'Shorts & jeans', 'Jacket', 'Dress & frock', 'Innerwear', 'Hosiery']
          },
          {
            name: 'Footwear',
            items: ['Sport', 'Formal', 'Boots', 'Casual', 'Cowboy shoes', 'Safety shoes', 'Party wear shoes', 'Branded', 'Firstcopy', 'Long shoes']
          },
          {
            name: 'Jewellery',
            items: ['Necklace', 'Earrings', 'Couple rings', 'Pendants', 'Crystal', 'Bangles', 'Bracelets', 'Nosepin', 'Chain']
          },
          {
            name: 'Cosmetics',
            items: ['Shampoo', 'Bodywash', 'Facewash', 'Makeup kit', 'Liner', 'Lipstick', 'Perfume', 'Body soap', 'Scrub', 'Hair gel', 'Hair colors', 'Hair dye', 'Sunscreen', 'Skin lotion']
          }
        ],
        navGroups: [
          {
            title: 'Popular Categories',
            links: ['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches']
          },
          {
            title: 'Products',
            links: ['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap']
          },
          {
            title: 'Our Company',
            links: ['Delivery', 'Legal Notice', 'Terms and conditions', 'About us', 'Secure payment']
          },
          {
            title: 'Services',
            links: ['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap']
          }
        ],
        contactInfo: [
          {
            icon: 'location-outline',
            text: '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
            type: 'address'
          },
          {
            icon: 'call-outline',
            text: '(607) 936-8058',
            type: 'link',
            link: 'tel:+607936-8058'
          },
          {
            icon: 'mail-outline',
            text: 'silqetasawul@gmail.com',
            type: 'link',
            link: 'mailto:example@gmail.com'
          }
        ],
        socialLinks: [
          { icon: 'logo-facebook', link: '#' },
          { icon: 'logo-twitter', link: '#' },
          { icon: 'logo-linkedin', link: '#' },
          { icon: 'logo-instagram', link: '#' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add styles specific to the footer component */
  .footer-category {
    /* Your styles */
  }
  
  /* Add other styles as required */
  </style>
  