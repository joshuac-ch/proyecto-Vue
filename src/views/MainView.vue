<template>
<div class="contenedor-principal">
  <div class="contenido">
    <ul class="listarutas">
      <li><RouterLink to="/contador">Contador</RouterLink></li>
      <li><RouterLink to="/lista">lista</RouterLink></li>
      <li><RouterLink to="/registro">registro</RouterLink></li>
    </ul>
    <RouterView></RouterView>
  </div>

</div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>
<style>
.contenido{
  .listarutas{
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    border: 2px solid white;
    li{
      list-style: none;

    }
  }
}
</style>
