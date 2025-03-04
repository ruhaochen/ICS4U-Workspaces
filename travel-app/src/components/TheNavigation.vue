<script setup>
    import sourceData from '../data.json' 
    import { ref } from 'vue';

    const destinations = ref(sourceData.destinations);
</script>

<template>
    <div id="nav">
        <router-link id="logo" to="/">Travel App</router-link>
        <router-link 
                v-for="destination in destinations"
                :key="destination.id" 
                :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
            >
                {{ destination.name }}
            </router-link>
    </div>
</template>

<!-- <style scoped>
#nav .active-link{
    color:red;
    border-bottom: 2px solid red;
}
</style> -->