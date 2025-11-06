
<template>
<div class="bg-light-gray window-height window-width row justify-center items-center hero">
      <div class="column">
        
        <div class="row">
            <q-card  style="background-color:rgb(166, 119, 178 );"  class="q-pa-sm shadow-8"><h5 style="text-align: center;" class="text-white q-my-xs">CEMDIV </h5></q-card>     
        </div>
            <div class="row">
            <q-card class="q-pa-lg shadow-8">
            
            
            <q-card-section>
              <q-form class="q-gutter-md">

                
                <q-input  standout="bg-purple-3 text-white" v-model="username"  type="text" label="usuario" />
                <q-input  standout="bg-purple-3 text-white" v-model="password" type="password" label="password" />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn   text-color="black" style="border: 2px solid purple;border-radius: 4px;" size="lg" class="full-width text-white" label="login"   @click="login()" />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">No Registrado? Crear una cuenta</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
</template>
<script>

import axios from 'axios';
import {ref} from 'vue';
import Swal from 'sweetalert2'
 export default {

   name: "App",
   
   data() {
     return {
         username: ref(''),
         password: ref(''),
     };
   },
    computed: {
     
     },
   methods: {
    login() {

      
      
      let datos={
             username:this.username,
             password:this.password
            };

            console.log(datos.username);
            console.log(datos.password);
       axios.post("https://cemvid.ibingcode.com/public/login", datos).then((result) => {
    if (result.data.status==true){
        const toPath = this.$route.query.to || '/listado'
      this.$router.push(toPath);
    //   this.$router.push({ toPath,params:{username:result.data.nombre}});
      localStorage.setItem('nombre', result.data.nombre);
      localStorage.setItem('token', result.data.token);

    }else{
      alert('Datos Errados, intente nuevamente');
      
    }
  });
       
     },
     register() {
        if(this.password == this.confirmPassword){
           this.isRegister = false;
           this.errorMessage = "";
           this.$refs.form.reset();
        }
        else {
          this.errorMessage = "password did not match"
        }
     }
   }
  }

</script>
<style  scoped>
.q-card {
    width: 360px;
  }
  .hero {
   background: url('../assets/cemvid_fondo.png');
   background-size: cover;
   height: 100vh;
 }
</style>
