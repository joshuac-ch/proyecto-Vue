<template>
  <div>
    <h1>Bienvenido a Registro de personas</h1>
    <div>
      <Form :validation-schema="validar" @submit="envio" >
        <div>
          <Field type="text" name="nombre"  placeholder="ingrese su nonmbe"/>
          <ErrorMessage name="nombre"></ErrorMessage>
        </div>
        <div>
          <Field type="email" name="correo" placeholder="ingrese su correo" value=""/>
      <ErrorMessage name="correo"></ErrorMessage>
        </div>


      <button type="submit">enviar</button>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Form,Field,ErrorMessage } from 'vee-validate';
import {validar} from "../Schema/validate"
const envio=()=>{
  console.log("se envio los datos")
}
</script>
<style scoped>
</style>
