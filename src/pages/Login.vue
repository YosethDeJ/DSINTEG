<template>
  <div class="window-height window-width row justify-center items-center hero-dsinteg">
    <q-card class="dsinteg-card shadow-8">

      <div class="row no-wrap items-stretch">

<!-- Columna izquierda: imagen del carro -->
<div class="col-12 col-md-6 dsinteg-img-col">
  <q-img
    src="~assets/carro_desinteg.png"
    :ratio="13/13"        
    :img-style="{ objectPosition: '10% center' }"
    position="0px"
  >
  </q-img>
</div>


        <!-- Columna derecha: contenido (título + formulario) -->
        <div class="col-12 col-md-6 dsinteg-form-col">
          <div class="dsinteg-form-inner">

            <!-- Títulos (más abajo) -->
            <div class="dsinteg-title-box">
              <h5 class="q-my-xs text-grey-9 text-center">DSINTEG</h5>

            </div>

            <!-- Formulario -->
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  v-model="usuarioLogin"
                  type="text"
                  label="Usuario"
                  outlined
                  dense
                  color="grey-8"
                />
                <q-input
                  v-model="claveLogin"
                  type="password"
                  label="Contraseña"
                  outlined
                  dense
                  color="grey-8"
                />
              </q-form>
            </q-card-section>

            <q-card-actions class="q-px-md q-pt-none">
              <q-btn
                color="grey-9"
                text-color="white"
                size="lg"
                class="full-width dsinteg-btn-login"
                label="Ingresar"
                @click="login"
              />
            </q-card-actions>

            <q-card-section class="text-center q-pa-none q-mt-sm">
              <p class="text-grey-6 text-caption">
                ¿No estás registrado?
                <span class="text-grey-8 cursor-pointer">
                  Crear una cuenta
                </span>
              </p>
            </q-card-section>

          </div>
        </div>

      </div>

    </q-card>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'LoginDsinteg',

  data () {
    return {
      usuarioLogin: '',
      claveLogin: ''
    };
  },

  methods: {
    login () {
      const datos = {
        username: this.usuarioLogin,
        password: this.claveLogin
      };

      axios
        .post('https://cemvid.ibingcode.com/public/login', datos)
        .then((result) => {
          if (result.data.status === true) {
            const toPath = this.$route.query.to || '/listado';
            this.$router.push(toPath);

            localStorage.setItem('nombre', result.data.nombre);
            localStorage.setItem('token', result.data.token);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Acceso denegado',
              text: 'Usuario o contraseña incorrectos. Intente nuevamente.',
              confirmButtonColor: '#374151'
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error de conexión',
            text: 'No fue posible contactar el servidor. Intente de nuevo más tarde.',
            confirmButtonColor: '#374151'
          });
        });
    }
  }
};
</script>

<style scoped>
/* Fondo general en gris claro */
.hero-dsinteg {
  background: #e5e7eb;
  background-size: cover;
  height: 100vh;
}

/* Card principal */
.dsinteg-card {
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  background: #f9fafb;
}

/* Columna imagen */
.dsinteg-img-col {
  background: #111827;
}

.dsinteg-img-carro {
  height: 100%;
  filter: grayscale(20%);
}

/* Texto sobre la imagen */
.dsinteg-img-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

/* Columna formulario */
.dsinteg-form-col {
  background: #f9fafb;
  display: flex;
  align-items: flex-start;   /* anclar arriba */
  justify-content: center;
}

/* Contenedor interno: limita ancho y baja un poco todo el bloque */
.dsinteg-form-inner {
  width: 100%;
  max-width: 380px;
  padding-top: 40px;         /* baja título + formulario */
  padding-bottom: 24px;
}

/* Caja de título: todavía lo bajo un poco más respecto al borde del inner */
.dsinteg-title-box {
  margin-bottom: 20px;
}

/* Botón */
.dsinteg-btn-login {
  border-radius: 8px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 767px) {
  .dsinteg-card {
    margin: 0 12px;
  }

  .dsinteg-img-col {
    display: none;
  }

  .dsinteg-form-inner {
    max-width: 100%;
    padding-top: 24px;
  }
}
</style>
