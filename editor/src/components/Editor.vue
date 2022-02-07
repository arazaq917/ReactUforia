<template>
<h2> Add Text </h2>
  <div class="btn-div">
    <button type="button" @click="addSmall"> Small </button><br>
    <button type="button" @click="addMedium"> Medium </button><br>
    <button type="button" @click="addLarge"> Large </button>
  </div>
</template>

<script>
export default {
  emits: ['addSmall', 'addMedium', 'addLarge'],
  methods:{
    addSmall(){
      const smallCount = this.$store.getters.smallCount;
      if(smallCount > 5){
        this.$store.dispatch('clearSmall');
        return;
      }
      const data = {
        id: 's',
        text: 'Small Text',
        fontSize: 'small',
        left: 350*Math.random(),
        top: 450*Math.random()
      };
      
      this.$store.dispatch('addData', data);
      
    },
    addMedium(){
      const mediumCount = this.$store.getters.mediumCount;
      if(mediumCount > 4){
        this.$store.dispatch('clearMedium');
        return;
      }
      const data = {
        id: 'm',
        text: 'Medium Text',
        fontSize: 'medium',
        left: 350*Math.random(),
        top: 450*Math.random()
      };
      console.log(data);
      this.$store.dispatch('addData', data);
    },
    addLarge(){
      const largeCount = this.$store.getters.largeCount;
      if(largeCount > 3){
        this.$store.dispatch('clearLarge');
        return;
      }
      const data = {
        id: 'l',
        text: 'Large Text',
        fontSize: 'large',
        left: 350*Math.random(),
        top: 450*Math.random()
      };
      this.$store.dispatch('addData', data);
      
    }
  }
}
</script>

<style scoped>
button{
  width: 6rem;
    height: 1.6rem;
    margin: 5px 0;
    border-radius: 12%;
    border: none;
    background-color: rgb(139, 137, 241);
    color: rgb(252, 252, 253);
}
button:hover{
  cursor: pointer;
}
.btn-div{
text-align: center;
}
</style>