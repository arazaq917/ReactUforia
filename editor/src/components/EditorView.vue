<template>
  
  <p class="target" v-for="(obj, index) in data" :data-elementIndex="index" :key="obj.id" :class="obj.fontSize" :style="'position: absolute; top:'+obj.top+'px; left:'+obj.left+'px'">
    {{obj.text }}
  </p>
</template>

<script>
import Moveable from "moveable";

import Selecto from "selecto";

//////



/////////////////
export default {
  

  data(){
    return {
      activeIndex: null
    };
  },
  computed:{
    data(){
      return this.$store.getters.data;
    }
    
  },
  mounted(){
    let moveable = new Moveable(document.body, {
     target: null,
     /////////
    draggable: true,
    throttleDrag: 0,
    startDragRotate: 0,
    throttleDragRotate: 0,
    zoom: 1,
    origin: true,
    padding: {"left":0,"top":0,"right":0,"bottom":0},
    clippable: true,
    clipRelative: false,
    clipArea: false,
    dragArea: true,
    dragWithClip: true,
    defaultClipPath: "inset",
    clipTargetBounds: false,
    clipVerticalGuidelines: [],
    clipHorizontalGuidelines: [],
    snapThreshold: 5,
});


  ////
  
const selecto = new Selecto({
    // The container to add a selection element
    container: document.body,
    // // Targets to select. You can register a queryselector or an Element.
    selectableTargets: [".target"],
    selectFromInside: false,
    hitRate:100
});

selecto.on("select", e => {
  moveable.target = e.selected[0];
  console.log(e);
  console.log(e.selected[0].dataset.elementindex);
   this.activeIndex = e.selected[0].dataset.elementindex;
    
});



moveable.on("drag", e => {
  const curr = this.$store.getters.data[this.activeIndex];
  
  curr.left =  curr.left + e.beforeTranslate[0];
  curr.top = curr.top + e.beforeTranslate[1];
  console.log("current left" + curr.left);
  console.log("current top" + curr.top);
  // console.log(e.beforeTranslate[0] +' , ' + e.beforeTranslate[1]);
 // e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
});


  }
}
</script>

<style scoped>
p{
  width: auto;
  height: auto;
}
.small{
  font-size: small;
  color: green;
}
.medium{
  font-size: medium;
  color: rgb(205, 156, 50);
}
.large{
  font-size: large;
  color: blueviolet;
}
</style>