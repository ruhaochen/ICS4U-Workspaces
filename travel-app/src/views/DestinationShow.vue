<script setup>
    import { computed, ref, onMounted, watch } from 'vue';
    import {useRoute} from 'vue-router'
    import sourceData from '../data.json'

    const route = useRoute();
    const destinationId = computed(() => parseInt(route.params.id));
    const destination = ref(null)

    async function initData(){
        const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
        destination.value = await response.json()
    }
    onMounted(() => {
        initData();
        watch(() => route.params, initData); 
    })
</script>

<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class = "destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>