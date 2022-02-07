<template>
<div class="main">
  <div class="panel border">
    <Editor></Editor>
  </div>
  <div class="view border">
    <h2> Text Display </h2>
    <div class="convas">
      <editor-view></editor-view>
    </div>
    
  </div>
  <div class="panel border">
    <Status></Status>
  </div>
</div>

</template>

<script>
import EditorView from './components/EditorView.vue';
import Editor from './components/Editor.vue';
import Status from './components/Status.vue';

export default {
  components:{
    EditorView,
    Editor,
    Status
  },
}
</script>

<style>

* {
  box-sizing: border-box;
}
.main{
  display: flex;
  justify-content: space-around;
  height: 95vh;
}
.border{
  border: 1px solid rgba(0, 0, 0, 0.26);
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  border-radius: 5px;
  padding: 15px 8px;
}

.panel{
  width:15%;
  height: 100%;
  }
.convas{
  position: relative;
  }
  .view{
    height: 100%;
  width:68%;
  }
  h2{
    text-align: center;
    color: rgb(14, 12, 80);
  }

</style>
