<template>
  <div class="text-xs-center">  
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      left
    >
      <v-btn
          slot="activator"
          dark
          icon="true"
      >
        <v-badge 
        left
        color="light-green"
        overlap
        >
          <span slot="badge">1</span>
          <v-icon large color="cyan lighten-5">mail</v-icon>
        </v-badge>
      </v-btn>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>UserName</v-list-tile-title>
              <v-list-tile-sub-title>на пути изучения Vuetify.js</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Выпить кофе</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>сходить покурить</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Закрыть</v-btn>
          <v-btn color="primary" flat @click="menu = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
   </div>
</template>

<script>
export default {
data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true
    }),
}
</script>
