<template>
    <div class="card" id="card">
        <img :src="data.image" alt="imagen">
        <h3>{{ data.name }}:</h3>
        <p>{{ data.status }}</p>
    </div>
</template>

<script>
    export default{
        name:'cardComponent',
        props:{
            data: Object
        }
    }
</script>

<style>
    
</style>