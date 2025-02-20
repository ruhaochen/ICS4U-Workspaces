<script setup>
import { defineEmits, reactive, defineProps } from 'vue'
import '../styles.css'
import ReviewForm from './ReviewForm.vue';
import ReviewList from './ReviewList.vue';

const productData = reactive({
  product: 'Socks',
  brand: 'Vue Mastery',
  description: 'Grey socks with no holes',
  // image: 'src/assets/images/socks_green.jpg',
  // inventory: 9,
  onSale: true,
  details:['50% cotton', '30% wool', '20% polyester'],
  selectedVariant: 0,
  variants:[
    {id: 2234, color: 'green', image: 'src/assets/images/socks_green.jpg', quantity: 15},
    {id: 2235, color: 'blue', image: 'src/assets/images/socks_blue.jpg', quantity: 0}
  ],
  reviews: []
}); 

const emit = defineEmits(['add-to-cart', 'remove-from-cart'])

const props = defineProps({
    premium: {
        type: Boolean,
        required: true
    },
    outOfStock: {
        type: Boolean,
        required: true
    }
})

function title(){
  return productData.brand + ' ' + productData.product;
}

function onSale(){
  return productData.brand + ' ' + productData.product + ' is on sale!';
}

function image(){
  return productData.variants[productData.selectedVariant].image;
}

function inStock(){
  return productData.variants[productData.selectedVariant].quantity;
}

function updateVariant(index){
  productData.selectedVariant = index; 
}

function addToCart(){
  productData.variants[productData.selectedVariant].quantity--;
  emit('add-to-cart', productData.variants[productData.selectedVariant].id) 
}

function removeFromCart(){
  emit('remove-from-cart', productData.variants[productData.selectedVariant].id)
  if(!outOfStock){
    productData.variants[productData.selectedVariant].quantity++;
  }
}

function shipping(){
  if(props.premium){
      return 'Free'
  }else{
      return '$2.99'; 
  }
}

function addReview(review){
  productData.reviews.push(review)
}

</script>

<template>
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image()"
             :class = "{'out-of-stock-img': productData.variants[productData.selectedVariant].quantity == 0}">
      </div>
      <div class="product-info">
        <h1>{{ title() }}</h1>
        <p>{{ productData.description }}</p>
        <ul>
          <li v-for="detail in productData.details">{{ detail }}</li>
        </ul>
        <p v-if="inStock() > 10">In Stock</p>
        <p v-else-if="inStock() <= 10 && productData.variants[productData.selectedVariant].quantity > 0">Almost sold out! </p>
        <p v-else>Out of Stock</p>
        <!-- <p>cart:{{ productData.cart }}, inventory: {{ inStock() }}</p> -->
        <p v-show="productData.onSale">{{ onSale() }}</p>
        <p>Shipping: {{ shipping() }}</p>
        <div v-for = "(variant, index) in productData.variants"
            :key="productData.variants.id" 
            @mouseover="updateVariant(index)" 
           class="color-circle"
           :style = "{backgroundColor: variant.color}">
        </div>
        <button 
          class="button" 
          :class = "{disabledButton: inStock() == 0}"
          :disabled="inStock() == 0" 
          @click="addToCart()">
          Add to Cart
        </button>
        <button 
          class="button" 
          :disabled="productData.cart == 0" 
          @click="removeFromCart()">
          Remove from Cart
        </button>
      </div>
      <review-list v-if="productData.reviews.length > 0" :reviews="productData.reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>
  </div>
</template>

<style>

</style>