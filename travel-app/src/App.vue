<script setup>
import TheNavigation from './components/TheNavigation.vue';

const components = {
  TheNavigation 
}
</script>

<template>
  <TheNavigation/>
  <div class = "container">
    <router-view></router-view>
  </div>
</template>

