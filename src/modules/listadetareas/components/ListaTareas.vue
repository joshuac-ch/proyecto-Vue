<template>
<div class="tareas">
  <label for="">Ingrese una tarea</label>
  <br>
  <input type="text"  placeholder="Ingrese tarea" v-model="tarea" @keyup.enter="agregar">
  <div class="lista">
  <ul>
    <li v-for="(t , index) in lista" :key="index">
      {{ t }} <button type="button" @click="deletetas" > eliminar</button>
    </li>
  </ul>

</div>

</div>
</template>
<script setup>
import { ref } from 'vue';
let lista=ref([])
let tarea=ref("")
const agregar=()=>{
  lista.value.push(tarea.value)
  tarea.value=""
  }
const deletetas=(index)=>{
  lista.value.splice(index,1)
}
</script>
<style>
.tareas{
  margin: 0px 10px;
  }
</style>
