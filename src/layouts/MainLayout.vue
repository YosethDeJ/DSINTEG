<template>

    <q-layout view="hHh LpR lFf">

    <q-header
      reveal
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
    >
      <q-toolbar class="header-toolbar text-white rounded-borders">

                  <div class="q-ml-sm header-user-name">
            <spam>DSINTEG</spam>
          </div>


        <q-space />

        <!-- Usuario + nombre (derecha) -->
        <div class="row items-center no-wrap header-user q-mr-sm">
          <q-avatar size="32px">
            <img
              src="https://cdn.quasar.dev/img/boy-avatar.png"
              alt="Usuario"
            />
          </q-avatar>
          <div class="q-ml-sm header-user-name">
            {{ username.toUpperCase() }}
          </div>
        </div>

        <!-- Botón logout (derecha) -->
        <q-btn
          color="white"
          text-color="black"
          dense
          icon="logout"
          
          @click="logoutNotify"
          to="/"
          class="q-ml-sm"
          unelevated
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      class="left-navigation"
      show-if-above
      v-model="left"
      side="left"
      elevated
    >
      <div
        class="full-height drawer-shell"
        :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"
      >
        <div style="height: calc(100% - 117px); padding: 10px;">

                  

          <!-- Menú lateral -->
          
                                    <!-- Logo corporativo ocupando el ancho superior del drawer -->
                  <div class="drawer-logo-box">
                    <q-img
                      src="~assets/carro_desinteg.png" 
                      alt="Logo DSINTEG"
                      class="drawer-logo-img"
                                          />
                  </div>
          <q-scroll-area style="height: 100%;">

            

            <q-list padding>


              <q-item
                active-class="tab-active"
                to="/listado"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
  <q-item-section avatar>
       <q-icon
      :name="
        $route.path === '/listado'
          ? 'img:icons/icon_ingresos_solid.svg'
          : 'img:icons/icon_ingresos_outline.svg'
      "
      size="35px"
    />
  </q-item-section>

                <q-item-section>
                  Gestion De Ingresos
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/listado2"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                      <q-icon
      :name="
        $route.path === '/listado2'
          ? 'img:icons/icon_desinteg_solid.svg'
          : 'img:icons/icon_desinteg_outline.svg'
      "
      size="35px"
    />
                </q-item-section>

                <q-item-section>
                  Gestion De Desintegraciones
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                @click="f_mensaje_test()"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                      <q-icon
      :name="
        $route.path === '/gestion-ambiental'
          ? 'img:icons/icon_ambiental_globe_solid.svg'
          : 'img:icons/icon_ambiental_globe_outline.svg'
      "
      size="35px"
    />
                </q-item-section>

                <q-item-section>
                  Gestion ambiental
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/dashboard"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>

                <q-item-section>
                  Reportes y consultas
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/marca"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="admin_panel_settings" />
                </q-item-section>

                <q-item-section>
                  Administracion
                </q-item-section>
              </q-item>

              <q-item
                active-class="tab-active"
                to="/Gestion_operativa"
                class="q-ma-sm navigation-item"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>

                <q-item-section>
                  Gestion Operativa
                </q-item-section>
              </q-item>

            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height">
            <q-scroll-area class="col q-pr-sm full-height" visible>
              <router-view />
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Swal from 'sweetalert2'
import { useQuasar } from 'quasar'
const $q = useQuasar()

export default {
  data () {
    return {
      left: false,
      username: ''
    }
  },
  created () {
    this.username = localStorage.getItem('nombre') || ''
  },
  methods: {
    logoutNotify () {
      localStorage.removeItem('nombre')
      localStorage.removeItem('token')
      this.$q.notify({
        message: 'Sesión cerrada correctamente',
        color: 'positive',
        icon: 'logout'
      })
    },
    f_mensaje_test () {
      Swal.fire('Módulo en desarrollo')
    }
  }
}
</script>

<style>
:root {
  --ds-gray-dark: #111827;   /* similar a bg-gray-900 */
  --ds-gray-mid: #4b5563;    /* gray-700 */
  --ds-gray-soft: #f9fafb;   /* fondo de la card del login */
  --ds-gray-border: #9ca3af; /* gray-400 */
}

body {
  background: #e5e7eb !important; /* mismo fondo del login */
}

/* HEADER */
.header_normal {
  background: linear-gradient(
    135deg,
    var(--ds-gray-dark) 0%,
    var(--ds-gray-mid) 60%,
    #6b7280 100%
  );
}

.header_dark {
  background: linear-gradient(
    135deg,
    #020617 0%,
    #111827 50%,
    #1f2937 100%
  );
}

.header-toolbar {
  background: transparent;
  box-shadow: none;
}

/* Usuario en el header */
.header-user-name {
  color: #f9fafb;
  font-weight: 500;
  letter-spacing: 0.4px;
  max-width: 180px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/* DRAWER */
.q-drawer {
  background: transparent;
}

.left-navigation {
  background: transparent;
}

.drawer-shell {
  color: var(--ds-gray-dark);
}

.drawer_normal {
  background: var(--ds-gray-soft);
  color: var(--ds-gray-dark);
}

.drawer_dark {
  background: #111827;
  color: #f9fafb;
}

/* Logo corporativo en el drawer ocupando ancho */
.drawer-logo-box {
  width: 100%;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
 
}

.drawer-logo-img {
  width: 100%;
  border-radius: 4px;
}

/* ITEMS DEL MENÚ LATERAL */
.navigation-item {
  border-radius: 8px;
  color: inherit;
  transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.1s ease;
}

.navigation-item:hover {
  background-color: rgba(156, 163, 175, 0.16); /* gris suave */
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.tab-active {
  background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%); /* azul intenso */
  color: #f9fafb !important;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.45);
}

/* Icono también en azul claro */
.tab-active .q-icon {
  color: #e0f2fe !important;
}

/* Opcional: al pasar el mouse, un poco más de brillo */
.navigation-item.tab-active:hover {
  box-shadow: 0 3px 12px rgba(37, 99, 235, 0.6);
  transform: translateY(-1px);
}


/* Botón del menú (ajuste fino) */
.q-mr-sm {
  color: var(--ds-gray-dark);
}
</style>
