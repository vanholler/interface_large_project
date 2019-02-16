<template>
    <v-list dense expand>
          <template v-for="(item, i) in menus">
                <!--group with subitems-->
                <v-list-group v-if="item.items" :key="item.name" :group="item.group"  no-action="no-action">
                <v-list-tile slot="activator" ripple="ripple">
                    <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <template v-for="(subItem, i) in item.items">
                    <!--sub group-->
                    <v-list-group v-if="subItem.items" :key="subItem.name" :group="subItem.group" sub-group="sub-group">
                    <v-list-tile slot="activator" ripple="ripple">
                        <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>                  
                    </v-list-group>
                </template>
            </v-list-group>
            <v-subheader v-else-if="item.header" :key="i">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="i"></v-divider>

            <v-list-tile v-else :to="!item.href ? { name: item.name } : null" :href="item.href" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="item.name" exact>
              <v-list-tile-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </template>


        <v-divider class="mt-3"></v-divider>
        <v-subheader class=" grey--text text--darken-1">Дополнительно</v-subheader>
        <v-divider></v-divider>   


        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="material-icons">local_post_office</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Обратная связь
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
             <v-list-tile-action>
              <v-icon class="material-icons">exit_to_app</v-icon>
            </v-list-tile-action>
              <v-list-tile-content>
               <v-list-tile-title>
                Выйти
               </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
     </v-list> 

</template>

<script>
  import menu from '@/menu';
  
  
  export default {
    data: () => ({
      menus: menu,
    }),

  }
</script>
