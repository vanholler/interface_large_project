
<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer dark fixed clipped v-model="openLeftMenu" app>
        
        <menu-list></menu-list>  

      </v-navigation-drawer>


    <v-toolbar
      color="#4394bf"
      fixed
      clipped-left
      app
      dark  
      class="pl-1"    
    >
     <v-flex row xs2  v-if="openLeftMenu">
        <v-layout  justify-start >
          <v-icon class="material-icons" >home</v-icon>
          <v-toolbar-title class="mr-2 align-center grow">
          <span class="title"><router-link to="/">Главная</router-link></span>
          </v-toolbar-title>
          <v-divider vertical class=""></v-divider>
        </v-layout>
     </v-flex>
      
     
   <v-toolbar-side-icon @click.stop="openLeftMenu = !openLeftMenu"></v-toolbar-side-icon>
     
   <v-spacer></v-spacer>
 
   <user-window></user-window>

   </v-toolbar>

     <v-content> 
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex Grow >
  
            <router-view/>
         
          </v-flex>
        </v-layout>
      </v-container>
     
    </v-content>
   </v-app>
  </div>
</template>



<script>
import menuList from '@/components/menuList';
 import userWindow from '@/components/userWindow';
  
  export default {
    components: {
      menuList,
      userWindow,

    },
    data: () => ({
      openLeftMenu: true,
    }),
    props: {
    }
  }
</script>
