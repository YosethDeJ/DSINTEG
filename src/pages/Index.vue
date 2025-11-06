<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      
    </div>
  </div>


  
  <div class="q-pa-md q-gutter-sm">

    <q-card
      class="my-card text-black"
      style="width: 100%;"
      v-show="components"
    >

    <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
     

      <q-item-section>
        <q-item-label class="text-h6">
          GESTION DESINTEGRACION 
        </q-item-label>
 
      </q-item-section>

       
      
      
    </q-item> 

    <div class="q-pa-md example-row-mix-and-match">
      <div class="row" style="text-align: center;">
        <div class="col">

           <q-card class="my-card" style="
    margin-top: 60px;"
>
             <q-card-section>
              <q-btn text-color=black label="INGRESO VEHICULO" style="border: 2px solid purple;" @click="toolbar = true" />
             </q-card-section>
           </q-card> 
        </div>
       <div class="col">
     

        <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto;"></q-img>
 

          </div>
          <div class="col" a>
           <q-card class="my-card" style="
    margin-top: 60px;">
         <q-card-section>

        
        <q-btn text-color=black label="CONTINUAR INGRESO" style="border: 2px solid purple;"  @click="toolbar = true" />
 
          </q-card-section>
           </q-card>       
          </div> 
    </div> 
  </div> 
  
   

    

    
    </q-card>



    
    
    <q-dialog v-model="toolbar">
      <q-card style="width: 800px; max-width: 85vw;">
        <q-toolbar>
          <q-avatar>
            <img src="../assets/Cemdiv_logo_2.jpg">
          </q-avatar>
          <q-toolbar-title><span class="text-weight-bold">CEMDIV</span> Desintegradora</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
        <div class="q-pa-md">
    <div class="row  q-col-gutter-md">
      <div class="col-12 col-sm-3">
      <q-input dense outlined v-model="text" label="Placa" />
      </div>
      <div class="col-12 col-sm-3">
      <q-input dense outlined v-model="text" label="Numero_motor" />
      </div>
      <div class="col-12 col-sm-3">
      <q-input dense v-model="text" label="No_Chasis" />
      </div>
      <div class="col-12 col-sm-3">
      <q-input dense  v-model="text" label="Documento" />
      </div>
      </div>
      </div>
      <div class="q-pa-md" style="max-width: 300px">
      <q-select outlined v-model="model" :options="options" label="Tipo_Vehiculo" />
      </div>
      <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
       <div class="q-pa-md q-gutter-sm">
        <q-btn style="background-color:purple;color: white;" icon="mail" label="Guardar" />
    <q-btn style="background-color:purple;color: white" icon="mail" icon-right="send" label="Cancelar" />
       </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup () {
    return {
      tab: ref('mails'),
      secondModel: ref('one'),
      modeldos: ref('one'),
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      text: ref(''),
      model: ref(null),
      options: [
        'Automovil', 'Autobus', 'Tracto_Camion', 'Furgon'
      ],
      date: ref('2019/02/01'),
      components:true,
  
    }
  }
})
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid white
</style>
