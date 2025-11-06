<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      
      

    </div>
  </div>
  <div class="q-pa-md q-gutter-sm">
    
    <q-card
      class="my-card text-black"
      style="width: 100%;"
      
    >

    <!-- <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    > -->
     

      <!-- <q-item-section> -->
        <!-- <q-item-label class="text-h6">
          ADMINISTRACION VEHICULO
        </q-item-label> -->

        <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn class="text-h6" flat label="ADMINISTRACION" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink stretch>
      <q-tab  name="tab4" label="DESINTEGRADORA " @click="components_1=false;components_2=false;components_3=false;components_4=true;components_5=false;"/>
        <q-tab  name="tab1" label="MARCAS VEHICULOS"  @click="components_1=true;components_2=false;components_3=false;components_4=false;components_5=false;"/>
        <q-tab  name="tab2" label="COLORES VEHICULOS"   @click="components_1=false;components_2=true;components_3=false;components_4=false;components_5=false;"/>
        <q-tab  name="tab3" label="USUARIOS " @click="components_1=false;components_2=false;components_3=true;components_4=false;components_5=false;"/>
      <q-tab  name="tab5" label="SEDE"  @click="components_1=false;components_2=false;components_3=false;components_4=false;components_5=true;"/>
                   
               
        </q-tabs>
    </q-toolbar>
 
      <!-- </q-item-section> -->

       

      
    <!-- </q-item>   -->
    



    
    </q-card>


  


    <q-card style="width: 100%;" v-show="components_1">
  <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
   
    <q-item-section>
        <q-item-label class="text-h6">
          MARCAS VEHICULOS 
        </q-item-label>
 
      </q-item-section>

     
      
      
    </q-item>

   
    <div class="q-pa-md example-row-mix-and-match">       
               <div class="row" style="text-align: center;">
         
                 <div class="col-4">
                  <q-card class="my-card">
                       <q-card-section>    
                          <q-btn target="_blank"  glossy style="background-color:#f76ff7">{{new Date().toLocaleString()}}</q-btn>
                       </q-card-section>





                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Marca" stack-label v-model="marca" />
                </q-card-section>

            
                  
                </q-card> 
              </div>

             

              <div class="col-4">
                
                  <q-card-section>  

      <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
    </q-card-section>

        </div>

 
              
            </div>  
          </div>

    



  
  <q-card-section>
  
        <div class="row">    
            <div class="col-2" >
               <q-btn style="background-color:#e241e2;"  icon-right="save" label="Guardar" @click="f_guardar_marca()"/>
             </div>
          </div>
       </q-card-section>

    

  </q-card>

  <q-card style="width: 100%;" v-show="components_2">
  <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
   
    <q-item-section>
        <q-item-label class="text-h6">
          COLORES VEHICULOS 
        </q-item-label>
 
      </q-item-section>

     
      
      
    </q-item>

   
    <div class="q-pa-md example-row-mix-and-match">       
               <div class="row" style="text-align: center;">
         
                 <div class="col-4">
                  <q-card class="my-card">
                       <q-card-section>    
                          <q-btn target="_blank"  glossy style="background-color:#f76ff7">{{new Date().toLocaleString()}}</q-btn>
                       </q-card-section>





                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="color" stack-label v-model="color" />
                </q-card-section>

            
                  
                </q-card> 
              </div>

             

              <div class="col-4">
                
                  <q-card-section>  

      <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
    </q-card-section>

        </div>

 
              
            </div>  
          </div>

    



  
  <q-card-section>
  
        <div class="row">    
            <div class="col-2" >
               <q-btn style="background-color:#e241e2;"  icon-right="save" label="Guardar" @click="f_guardar_color()"/>
             </div>
          </div>
       </q-card-section>

    

  </q-card>

  <q-card style="width: 100%;" v-show="components_3">
  <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
   
    <q-item-section>
        <q-item-label class="text-h6">
          USUARIOS 
        </q-item-label>
 
      </q-item-section>

     
      
      
    </q-item>

   
    <div class="q-pa-md example-row-mix-and-match">       
               <div class="row" style="text-align: center;">
         
                 <div class="col-4">
                  <q-card class="my-card">
                       <q-card-section>    
                          <q-btn target="_blank"  glossy style="background-color:#f76ff7">{{new Date().toLocaleString()}}</q-btn>
                       </q-card-section>



                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="numero_documento" stack-label v-model="idfuncionario" />
                </q-card-section>

                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="usuario" stack-label v-model="usuario" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="nombre" stack-label v-model="nombre" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="contraseña" stack-label v-model="pass" />
                </q-card-section>               

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="cargo" stack-label v-model="cargo" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="rol" stack-label v-model="idrol" />
                </q-card-section>

                <q-card-option>   
                  <q-input standout="bg-purple-3 text-white" label="sede" stack-label v-model="idrol" />
                </q-card-option>
                  
                </q-card> 
              </div>

             

              <div class="col-4">
                
                  <q-card-section>  

      <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
    </q-card-section>

        </div>

 
              
            </div>  
          </div>

          

    



  
  <q-card-section>
  
        <div class="row">    
            <div class="col-2" >
               <q-btn style="background-color:#e241e2;"  icon-right="save" label="Guardar" @click="f_guardar_usuario()"/>
             </div>
          </div>
       </q-card-section>

    

  </q-card>

  <q-card style="width: 100%;" v-show="components_4">
  <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
   
    <q-item-section>
        <q-item-label class="text-h6">
          DESINTEGRADORA 
        </q-item-label>
 
      </q-item-section>

     
      
      
    </q-item>

   
    <div class="q-pa-md example-row-mix-and-match">       
               <div class="row" style="text-align: center;">
         
                 <div class="col-4">
                  <q-card class="my-card">
                       <q-card-section>    
                          <q-btn target="_blank"  glossy style="background-color:#f76ff7">{{new Date().toLocaleString()}}</q-btn>
                       </q-card-section>

                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="idfuncionario" />
                </q-card-section>

                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Razon social" stack-label v-model="usuario" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Direccion" stack-label v-model="nombre" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Persona de contacto" stack-label v-model="pass" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="pass" />
                </q-card-section>  

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="telefono" stack-label v-model="pass" />
                </q-card-section>
                
                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="ubicacion" stack-label v-model="pass" />
                </q-card-section>

                <q-card-section>
                  <q-uploader
                    label="Habilitación MinTransporte"
                    style="width: 100%;"
                    flat
                    bordered
                    color="purple"
                    text-color="white"
                    no-thumbnails
                    auto-upload="false"
                    hide-upload-btn
                  />
                </q-card-section>       
                
                </q-card> 
              </div>

             

              <div class="col-4">
                
                  <q-card-section>  

      <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
    </q-card-section>

        </div>

 
              
            </div>  
          </div>

          

    



  
  <q-card-section>
  
        <div class="row">    
            <div class="col-2" >
               <q-btn style="background-color:#e241e2;"  icon-right="save" label="Guardar" @click="f_guardar_usuario()"/>
             </div>
          </div>
       </q-card-section>

    

  </q-card>


  <q-card style="width: 100%;" v-show="components_5">
  <q-item
      clickable
      v-ripple
      class="rounded-borders"
      :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-2'"
    >
   
    <q-item-section>
        <q-item-label class="text-h6">
          SEDE 
        </q-item-label>
 
      </q-item-section>

     
      
      
    </q-item>

   
    <div class="q-pa-md example-row-mix-and-match">       
               <div class="row" style="text-align: center;">
         
                 <div class="col-4">
                  <q-card class="my-card">
                       <q-card-section>    
                          <q-btn target="_blank"  glossy style="background-color:#f76ff7">{{new Date().toLocaleString()}}</q-btn>
                       </q-card-section>



                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Nombre" stack-label v-model="idfuncionario" />
                </q-card-section>

                 <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Dirección" stack-label v-model="usuario" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="persona contacto" stack-label v-model="nombre" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="email" stack-label v-model="pass" />
                </q-card-section>

                <q-card-section>   
                 <q-input standout="bg-purple-3 text-white" label="Telefonos" stack-label v-model="pass" />
                </q-card-section>

                <q-page padding>
                  <q-input
                    standout="bg-purple-3 text-white"
                    label="Ubicación"
                    v-model="ubicacion"
                    readonly
                    @click="abrirMapa = true"
                  />

                  <q-dialog v-model="abrirMapa" persistent>
                    <q-card style="width: 90vw; max-width: 900px; height: 80vh">
                      <l-map
                        ref="mapRef"
                        style="height:100%; width:100%;"
                        :zoom="zoom"
                        :center="center"
                        @click="setMarker"
                      >
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <l-marker v-if="marker" :lat-lng="marker" />
                      </l-map>

                      <q-card-actions align="right">
                        <q-btn color="primary" label="Usar ubicación" :disable="!marker" @click="confirmar" />
                      </q-card-actions>
                    </q-card>
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-dialog>
                </q-page>

                <q-card-section>
                  <q-uploader
                    label="Resolucion Ambiental"
                    style="width: 100%;"
                    flat
                    bordered
                    color="purple"
                    text-color="white"
                    no-thumbnails
                    auto-upload="false"
                    hide-upload-btn
                  />
                </q-card-section> 

                <q-card-section>
                  <q-uploader
                    label="Polizas de Seguros"
                    style="width: 100%;"
                    flat
                    bordered
                    color="purple"
                    text-color="white"
                    no-thumbnails
                    auto-upload="false"
                    hide-upload-btn
                  />
                </q-card-section> 

                <q-card-section>
                  <q-uploader
                    label="Certificados ISO 9001 2015"
                    style="width: 100%;"
                    flat
                    bordered
                    color="purple"
                    text-color="white"
                    no-thumbnails
                    auto-upload="false"
                    hide-upload-btn
                  />
                </q-card-section> 

                <q-card-section>
                  <q-uploader
                    label="Documentos distritales de operación"
                    style="width: 100%;"
                    flat
                    bordered
                    color="purple"
                    text-color="white"
                    no-thumbnails
                    auto-upload="false"
                    hide-upload-btn
                  />
                </q-card-section>             
                
                </q-card> 
              </div>

             

              <div class="col-4">
                
                  <q-card-section>  

      <q-img src="../assets/Cemdiv_logo_2.jpg" style="width: 50%;height: auto; align-items: center;"></q-img>
    </q-card-section>

        </div>

 
              
            </div>  
          </div>

          

    



  
  <q-card-section>
  
        <div class="row">    
            <div class="col-2" >
               <q-btn style="background-color:#e241e2;"  icon-right="save" label="Guardar" @click="f_guardar_usuario()"/>
             </div>
          </div>
       </q-card-section>

    

  </q-card>







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
      value: ref(true),
      tab: ref('mails'),
      secondModel: ref('one'),
      modeldos: ref('one'),
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      abrirMapa: ref(false),
      toolbar: ref(false),
      text: ref(''),
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      date: ref('2024/02/01'),
      date1: ref('2024/02/01'),
       username: "",
       password: "",
       confirmPassword: "",
       isRegister : false,
       errorMessage: "",
       stateObj: {
          register :{
             name: 'Registrarse',
             message: 'Ya tiene una cuenta? De click aqui para Iniciar Sesion.'
          },
          login : {
             name: 'Iniciar Sesion',
             message: 'Registrarse'
          }
       },
       vehiculo:[],
       headers_vehiculo: [    

    { label: '#REGISTRO', field: 'id_ingreso',name:'id_ingreso',align:'center'},
    { label: 'PLACA', field: 'placa',name:'placa',align: 'center'},
    { label: 'FECHA_INGRESO', field: 'fecha_ingreso',name:'fecha_ingreso',align: 'center'} ,
    { label: 'LATITUD', field: 'latitud',name:'latitud',align: 'center'},
    { label: 'LONGITUD', field: 'longitud',name:'longitud',align: 'center'} 
  
    
  ],
  rutas:[],
 
  components_1:true,
  components_2:false,
  components_3:false,

  latitud:"",
  longitud:"",
  idfuncionario:"",
  usuario:"",
  nombre:"",
  pass:"",
  cargo:"",
  id_rol:"",
  nombre_marca:"",
  modelo:"",
  nombre_color:""

     };
   },

   created(){
      this.username=localStorage.getItem('nombre');
      // this.username='yordis';
    },
   methods: {
  ListaDesintegracion(){   
      
      
            
      if (this.opcion==1){ 


        this.latitud='';
          this.longitud='';
          this.numero_documento='';
          this.nombre_funcionario='';
          this.numero_chasis='';
          this.numero_motor='';
          this.tipo_vehiculo='';
          this.marca='';
          this.modelo='';
          this.color=''; 


        console.log(this.opcion);
        
             let datos={
             placa: this.placa
       
             };
       
           axios.post("https://cemvid.ibingcode.com/public/consultarplacas",datos).then((result) => {
          console.log(this.vehiculo = result.data);
          this.latitud=result.data[0].latitud;
          this.longitud=result.data[0].longitud;
          this.numero_documento=result.data[0].numero_documento;
          this.nombre_funcionario=result.data[0].nombre_funcionario;
          this.numero_chasis=result.data[0].numero_chasis;
          this.numero_motor=result.data[0].numero_motor;
          this.tipo_vehiculo=result.data[0].tipo_vehiculo;
          this.marca=result.data[0].marca;
          this.modelo=result.data[0].modelo;
          this.color=result.data[0].color; 
         
          
     
    })

  }else{

    console.log(this.opcion);

 console.log(this.fecha_inicio= this.date)
console.log(this.fecha_fin= this.date1)

    let datos={
             fecha_inicio: this.date,
             fecha_fin: this.date1
       
             };

             
       
           axios.post("https://cemvid.ibingcode.com/public/listarIngresos",datos).then((result) => {
           
           this.vehiculo = result.data == "" ? [] : result.data;
           console.log(this.vehiculo = result.data);
           this.latitud=result.data[0].latitud;
           this.longitud=result.data[0].longitud;
          
     
    })


  }
  },
  DetalleDesintegracion(evt,row){
console.log(row.placa);
console.log(row.id_ingreso);
          
          this.placa=row.placa;
          this.latitud=row.latitud;
          this.longitud=row.longitud;
          this.numero_documento=row.numero_documento;
          this.nombre_funcionario=row.nombre_funcionario;
          this.numero_chasis=row.numero_chasis;
          this.numero_motor=row.numero_motor;
          this.tipo_vehiculo=row.tipo_vehiculo;
          this.marca=row.marca;
          this.modelo=row.modelo;
          this.color=row.color; 

   
this.components=false;
this.components_1=false;
this.components_2=true;


let datos={
  
codigo_ingreso:row.id_ingreso,

       
             };
       
           axios.post("https://cemvid.ibingcode.com/public/getsoportes",datos).then((result) => {
          console.log(this.rutas = result.data);
          console.log(result.data[0].ruta.split("/",2));

           })



  },
  CargarDocumentos() {
      if (this.files_0=='' || this.files_1=='' || this.files_2=='' || this.files_3=='' ) {

        this.toolbar=false;

        Swal.fire({
                     title:"ERROR",
                     text:"No Ha Cargado Todos Los Soportes",
                     icon:"error"
                     
                    })
        
      } else {
        Swal.fire({
          title: "Cargando...",
          html: "Por Favor Espere...",
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton:false,
          willOpen: () => {
            this.toolbar=false;
            Swal.showLoading();
            
          },
        });
       
        
        let formData = new FormData();
        formData.append("files_0", this.files_0); 
        formData.append("files_1", this.files_1); 
        formData.append("files_2", this.files_2); 
        formData.append("files_3", this.files_3);       
        formData.append("id_desintegradora",this.desintegradora);
        formData.append("id_ingreso",this.numero_registro);
        formData.append("placa",this.placa);        
        const datospermitidos = {"Content-Type": "multipart/form-data",};
        
        axios.post("https://cemvid.ibingcode.com/public/cargar_documentos",formData,datospermitidos)
        .then((respuesta) => {

          var msg = (respuesta.data);
          
          console.log(msg)
            if(msg == 1){
                   Swal.fire({
                     title:"EXITO",
                     text:"Soportes Cargados Correctamente",
                     allowOutsideClick: false,
                showConfirmButton:true,
                     icon:"success"})

                     this.components_3=false;
                     this.components_4=true;
                     this.components_5=true;
                     this.components_6=true;
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error Al Cargar Soportes",
                     icon:"error"})
                 }

                 
        });
        Swal.close();
      }
  },
  aprobaregistro(){



      Swal.fire({
                title: "Esta seguro?",
                text: "Verificar los soportes, antes de aprobar la desintegracion del vehiculo !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, estoy seguro!"
                }).then((result)=>{
                      if(result.isConfirmed){



                        
   




                        Swal.fire({
                        title:"EXITO",
                        text:"Solicitud Desintegracion Aprobada",
                        allowOutsideClick: false,
                        showConfirmButton:true,
                        icon:"success"
                      });

                      let datos={
             placa: this.placa,
             numero_registro:this.numero_registro,
             estado:2
       
             };       
           axios.post("https://cemvid.ibingcode.com/public/actualizar_estado",datos).then((result) => {
           
            var respuesta = (result.data);
            console.log(respuesta);
            if(respuesta == 1){


                     this.components_3=true;
                     this.components_4=false;
                     this.components_5=false;
                     this.components_6=true;
               

                    
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error En Solicitud, Informar al Administrador",
                     icon:"error"})
                 }                 
        });
                
                     }                   
                    });



          
  },
  rechazaregistro(){
      let datos={
             placa: this.placa,
             numero_registro:this.numero_registro,
             estado:3
       
             };       
           axios.post("https://cemvid.ibingcode.com/public/actualizar_estado",datos).then((result) => {
           
            var msg = (result.data);
            
            if(msg == 1){
                   Swal.fire({
                     title:"ALERTA",
                     text:"Solicitud Desintegracion Rechazada",
                     allowOutsideClick: false,
                showConfirmButton:true,
                     icon:"success"})

                     this.components_3=true;
                     this.components_4=false;
                     this.components_5=false;
                     this.components_6=true;
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error En Solicitud, Informar al Administrador",
                     icon:"error"})
                 }                 
        });
 
  },
  fonctionTest(){
  


  if (this.value==true) 
  {
         this.components_7=true;
         this.components_8=false;
         this.opcion=1
         this.vehiculo = [];
  }   else 
  {
    this.components_8=true;
      this.components_7=false;
      this.opcion=2
      this.vehiculo = [];
  }
  },
 f_guardar_marca(){
  
  console.log( this.marca);

  let datos={            
             nombre_marca:this.marca,                  
             };       
           axios.post("https://cemvid.ibingcode.com/public/guardar_marca",datos).then((result) => {

  var msg = JSON.parse(result.data);
          
          console.log(msg.CODIGO)
            if(msg.CODIGO == 0){
                   Swal.fire({
                     title:"EXITO",
                     text:"Registro Guardado Correctamente",
                     allowOutsideClick: false,
                showConfirmButton:true,
                     icon:"success"})

             
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error Al Guardar Registro",
                     icon:"error"})
                 }

                 
        });
        Swal.close();
      

},
f_guardar_color(){
  
  console.log( this.color);

  let datos={
             nombre_color:this.color       
             };       
           axios.post("https://cemvid.ibingcode.com/public/guardar_color",datos).then((result) => {

  var msg = JSON.parse(result.data);
          
          console.log(msg.CODIGO)
            if(msg.CODIGO == 0){
                   Swal.fire({
                     title:"EXITO",
                     text:"Registro Guardado Correctamente",
                     allowOutsideClick: false,
                showConfirmButton:true,
                     icon:"success"})

             
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error Al Guardar Registro",
                     icon:"error"})
                 }

                 
        });
        Swal.close();
      

},
f_guardar_usuario(){
  console.log( this.idfuncionario);
  console.log( this.usuario);
  console.log( this.nombre);
  console.log( this.pass);  
  console.log( this.cargo);
  console.log( this.idrol);

  let datos={
             idfuncionario:this.idfuncionario,
             usuario: this.usuario,
             nombre: this.nombre,
             pass:this.pass,            
             cargo:this.cargo,
             id_rol:this.idrol,
             

       
             };       
           axios.post("https://cemvid.ibingcode.com/public/guardar_usuario",datos).then((result) => {

  var msg = JSON.parse(result.data);
          
          console.log(msg.CODIGO)
            if(msg.CODIGO == 0){
                   Swal.fire({
                     title:"EXITO",
                     text:"Registros Guardados Correctamente",
                     allowOutsideClick: false,
                showConfirmButton:true,
                     icon:"success"})

             
                 } else {
                  Swal.fire({
                     title:"FALLO",
                     text:"Error Al Guardar Registros",
                     icon:"error"})
                 }

                 
        });
        Swal.close();
      

},
f_descarga_soporte(){



 this.codigo_busqueda=1


      window.open('https://cemvid.ibingcode.com/descarga_soporte.php?id_desintegradora='+this.desintegradora+'&codigo_busqueda='+this.codigo_busqueda,'_blank');

   },
   f_mensaje_test(){

    Swal.fire("Funcionalidad en Desarrollo!");
   },
   f_generardocumento(){
     
     let datos={             
            placa:this.placa,
            id_desintegradora:this.desintegradora,
            id_ingreso:this.numero_registro
           };

        
       console.log(datos);
     axios.post("https://cemvid.ibingcode.com/public/generardocumento",datos).then((respuesta) => {
       
       
       var msg = JSON.parse(respuesta.data);
       this.title1="Actas De Desintegracion";
       if(msg.CODIGO == 0){
                  Swal.fire({
                    title:this.title1+", las rutas de descargas ya estan creadas",
                    text:msg.MENSAJE,
                    timer: 3000,
                    icon:"info"})
                } else {
                  Swal.fire({
                    title:this.title1+" y rutas de descargas generadas correctamente",
                    text:msg.MENSAJE,
                    timer: 3000,
                    icon:"succes"})
                }
  
 });

 
     } 
   }
  }

</script>
<style scoped>
.my-custom-toggle{
  border: 1px solid #027be3
}
  .hero{
    background: url('../assets/Cemdiv_logo_2.jpg');
    background-repeat: no-repeat;
    height: 23vh;}
</style>
