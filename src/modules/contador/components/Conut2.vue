<template>
  <div class="">
    <h1>Hola mundo me llamo {{ nombre }}</h1>
    <p>Este es la segunda pagina {{ valor }}</p>
    <button type="button" class="btnv" @click="btnincre">Incrementar</button>
    <button type="button" class="btnr" @click="btndecre">Decrementar</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let nombre="joshuaNK"
let valor=ref(0)
let btnincre=()=>{
  valor.value++
}
let btndecre=()=>{
  valor.value--
}
</script>
<style>
.btnv{
  cursor: pointer;
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 20px;
  margin: 10px;
  box-shadow: 0px 0px 10px 2px green;

}
.btnr{
  cursor: pointer;
  border: 2px solid white;
  border-radius: 20px;
  padding: 5px 20px;
  box-shadow: 0px 0px 10px 2px red;
}
</style>
