<template>
  <h2> Status </h2>
  <p v-for="obj in data" :key="obj.id">
    {{obj.text }}
  </p>
  
</template>

<script>
export default {
  computed:{
    data(){
      return this.$store.getters.data;
    }
  }
}
</script>