<template>
    <div class="service">

            <h2 class="title">Our Services</h2>

            <div class="service-container">

              <a href="#" class="service-item">

                <div class="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div class="service-content">

                  <h3 class="service-title">Worldwide Delivery</h3>
                  <p class="service-desc">For Order Over $100</p>

                </div>

              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Next Day delivery</h3>
                  <p class="service-desc">UK Orders Only</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Best Online Support</h3>
                  <p class="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Return Policy</h3>
                  <p class="service-desc">Easy & Free Return</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">30% money back</h3>
                  <p class="service-desc">For Order Over $100</p>
              
                </div>
              
              </a>

            </div>

          </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            icon: 'boat-outline',
            title: 'Worldwide Delivery',
            description: 'For Order Over $100',
          },
          {
            icon: 'rocket-outline',
            title: 'Next Day delivery',
            description: 'UK Orders Only',
          },
          {
            icon: 'call-outline',
            title: 'Best Online Support',
            description: 'Hours: 8AM - 11PM',
          },
          {
            icon: 'arrow-undo-outline',
            title: 'Return Policy',
            description: 'Easy & Free Return',
          },
          {
            icon: 'ticket-outline',
            title: '30% money back',
            description: 'For Order Over $100',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  