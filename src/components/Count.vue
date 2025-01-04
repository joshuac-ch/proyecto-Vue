<script setup>
import {ref} from 'vue';
  let m=ref(0);
  const incrementar=()=>{
    m.value++;
  }
  const decre=()=>{
    m.value--
  }
</script>
<template>
  <div class="about">
    <h1>Esta es la pagina sobre nosotros  {{ m }}</h1>
    <br>
    <button type="button" @click="incrementar">Incrementar</button>
    <br>
    <button type="button" @click="decre">Decrementar</button>
  </div>


</template>
<style>
button{
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 5px;
}
</style>
