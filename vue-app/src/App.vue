<script setup>
import { ref, reactive } from 'vue'
import './styles.css'
import ProductDisplay from './components/ProductDisplay.vue';

const productData = reactive({
  cart: [],
  premium: true,
  outOfStock: false
});

// const premium = ref(false)

function addToCart(id){
  productData.cart.push(id);
}

function removeFromCart(id){
  const index = productData.cart.indexOf(id);
  if (index !== -1) {
    productData.cart.splice(index, 1);
  }else{
    alert('Cannot return product.')
    outOfStock = true;
  }
  outOfStock = false;
}

</script>

<template>
  <div class="nav-bar"></div>
  <div class ="cart">Cart({{ productData.cart.length }})</div>
  <product-display :premium="productData.premium" @add-to-cart = "addToCart" @remove-from-cart = "removeFromCart"></product-display>
</template>

<style scoped>

</style>