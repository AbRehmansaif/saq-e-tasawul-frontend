<template>
    <div class="product-main">
      <h2 class="title">New Products</h2>
  
      <div class="product-grid">
        <div v-for="(product, index) in products" :key="index" class="showcase">
          <div class="showcase-banner">
            <img :src="product.defaultImage" :alt="product.name" width="300" class="product-img default">
            <img :src="product.hoverImage" :alt="product.name" width="300" class="product-img hover">
            
            <p v-if="product.discount" class="showcase-badge">{{ product.discount }}%</p>
            
            <div class="showcase-actions">
              <button class="btn-action" @click="addToFavorites(product)">
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button class="btn-action" @click="viewProduct(product)">
                <ion-icon name="eye-outline"></ion-icon>
              </button>
              <button class="btn-action" @click="addToWishlist(product)">
                <ion-icon name="repeat-outline"></ion-icon>
              </button>
              <button class="btn-action" @click="addToCart(product)">
                <ion-icon name="bag-add-outline"></ion-icon>
              </button>
            </div>
          </div>
  
          <div class="showcase-content">
            <a :href="product.categoryLink" class="showcase-category">{{ product.category }}</a>
            <a :href="product.productLink">
              <h3 class="showcase-title">{{ product.name }}</h3>
            </a>
  
            <div class="showcase-rating">
              <ion-icon v-for="n in product.rating" :key="n" name="star"></ion-icon>
              <ion-icon v-for="n in (5 - product.rating)" :key="`outline-${n}`" name="star-outline"></ion-icon>
            </div>
  
            <div class="price-box">
              <p class="price">{{ product.price }}</p>
              <del v-if="product.oldPrice">{{ product.oldPrice }}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jacket3 from '../assets/images/products/jacket-3.jpg'
  import jacket4 from '../assets/images/products/jacket-4.jpg'

  import shirt1 from '../assets/images/products/shirt-1.jpg'
  import shirt2 from '../assets/images/products/shirt-2.jpg'

  import jacket5 from '../assets/images/products/jacket-5.jpg'
  import jacket6 from '../assets/images/products/jacket-6.jpg'
  
  import clothes3 from '../assets/images/products/clothes-3.jpg'
  import clothes4 from '../assets/images/products/clothes-4.jpg'
  
  import shoes2 from '../assets/images/products/shoe-2.jpg'
  import shoes3 from '../assets/images/products/shoe-2_1.jpg'
  export default {
    data() {
      return {
        products: [
          {
            name: 'Mens Winter Leathers Jackets',
            category: 'jacket',
            price: '$48.00',
            oldPrice: '$75.00',
            defaultImage: jacket3,
            hoverImage: jacket4,
            discount: 15,
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Pure Garment Dyed Cotton Shirt',
            category: 'shirt',
            price: '$45.00',
            oldPrice: '$56.00',
            defaultImage: shirt1,
            hoverImage: shirt2,
            discount: 'sale',
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'MEN Yarn Fleece Full-Zip Jacket',
            category: 'Jacket',
            price: '$58.00',
            oldPrice: '$65.00',
            defaultImage: jacket5,
            hoverImage: jacket6,
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Black Floral Wrap Midi Skirt',
            category: 'skirt',
            price: '$25.00',
            oldPrice: '$35.00',
            defaultImage: clothes3,
            hoverImage: clothes4,
            discount: 'new',
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Casual Men\'s Brown shoes',
            category: 'casual',
            price: '$99.00',
            oldPrice: '$105.00',
            defaultImage: shoes2,
            hoverImage: shoes3,
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Mens Winter Leathers Jackets',
            category: 'jacket',
            price: '$48.00',
            oldPrice: '$75.00',
            defaultImage: './assets/images/products/jacket-3.jpg',
            hoverImage: './assets/images/products/jacket-4.jpg',
            discount: 15,
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Pure Garment Dyed Cotton Shirt',
            category: 'shirt',
            price: '$45.00',
            oldPrice: '$56.00',
            defaultImage: './assets/images/products/shirt-1.jpg',
            hoverImage: './assets/images/products/shirt-2.jpg',
            discount: 'sale',
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'MEN Yarn Fleece Full-Zip Jacket',
            category: 'Jacket',
            price: '$58.00',
            oldPrice: '$65.00',
            defaultImage: './assets/images/products/jacket-5.jpg',
            hoverImage: './assets/images/products/jacket-6.jpg',
            rating: 3,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Black Floral Wrap Midi Skirt',
            category: 'skirt',
            price: '$25.00',
            oldPrice: '$35.00',
            defaultImage: './assets/images/products/clothes-3.jpg',
            hoverImage: './assets/images/products/clothes-4.jpg',
            discount: 'new',
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Casual Men\'s Brown shoes',
            category: 'casual',
            price: '$99.00',
            oldPrice: '$105.00',
            defaultImage: './assets/images/products/shoe-2.jpg',
            hoverImage: './assets/images/products/shoe-2_1.jpg',
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Black Floral Wrap Midi Skirt',
            category: 'skirt',
            price: '$25.00',
            oldPrice: '$35.00',
            defaultImage: './assets/images/products/clothes-3.jpg',
            hoverImage: './assets/images/products/clothes-4.jpg',
            discount: 'new',
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          },
          {
            name: 'Casual Men\'s Brown shoes',
            category: 'casual',
            price: '$99.00',
            oldPrice: '$105.00',
            defaultImage: './assets/images/products/shoe-2.jpg',
            hoverImage: './assets/images/products/shoe-2_1.jpg',
            rating: 5,
            categoryLink: '#',
            productLink: '#'
          }
        ]
      };
    },
    methods: {
      addToFavorites(product) {
        console.log(`Added ${product.name} to favorites.`);
      },
      viewProduct(product) {
        console.log(`Viewing details for ${product.name}.`);
      },
      addToWishlist(product) {
        console.log(`Added ${product.name} to wishlist.`);
      },
      addToCart(product) {
        console.log(`Added ${product.name} to cart.`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here, similar to your original CSS */
  .product-main {
    /* Example styles */
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  .showcase {
    border: 1px solid #ddd;
    padding: 15px;
  }
  .showcase img {
    max-width: 100%;
  }
  </style>
  