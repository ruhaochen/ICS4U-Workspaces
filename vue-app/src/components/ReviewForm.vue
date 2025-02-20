<script setup> 
import { defineEmits, reactive, defineProps } from 'vue'
import '../styles.css'

const data = reactive({
    name: '',
    review: '',
    rating: null
});

const emit = defineEmits(['review-submitted'])

function onSubmit(){
    if (data.name === '' || data.review === '' || data.rating === null) {
        alert('Review is incomplete. Please fill out every field.')
        return;
    }
    const productReview = {
       name: data.name,
       review: data.review,
       rating: data.rating,
     }
    emit('review-submitted', productReview)
    data.name = ''
    data.review = ''
    data.rating = null
}

</script>

<template>
    <form class="review-form" @submit.prevent="onSubmit()">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="data.name">
 
    <label for="review">Review:</label>      
    <textarea id="review" v-model="data.review"></textarea>
 
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="data.rating">
        <option :value="5">5</option>
        <option :value="4">4</option>
        <option :value="3">3</option>
        <option :value="2">2</option>
        <option :value="1">1</option>
    </select>
 
    <input class="button" type="submit" value="Submit">
  </form>`

</template>

<style>

</style>