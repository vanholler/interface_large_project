
<template>
 <div class="claims">
  <v-card>
    <v-card-title>
      <div>

      <import-export-buttons></import-export-buttons>
       
      <v-dialog v-model="dialog.create" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn
        slot="activator" 
        color="primary">Добавить
        </v-btn>
        <v-card>
          <modal-form  @closeModal="closeModal"></modal-form>
        </v-card>           
      </v-dialog>

      <v-dialog  v-model="dialog.update" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
        <modal-form @closeModal="closeModal"></modal-form>
        </v-card>           
      </v-dialog>
        
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
    :items="dates"
    class="elevation-1"
    :rows-per-page-items="rowsOnTable"
     :search="search"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.NumberApplication }}</td>
      <td class="text-xs-left">{{ props.item.DateApplication }}</td>
      <td class="text-xs-left">{{ props.item.bp }}</td>
      <td class="text-xs-left">{{ props.item.organization }}</td>
      <td class="text-xs-left">{{ props.item.contractor }}</td>
      <td class="text-xs-left">{{ props.item.comment }}</td>
      <td class="text-xs-left">  
       <v-btn 
        flat
        icon
        color="indigo" 
        @click="dialog.update = true">
        <v-icon>edit</v-icon>
        </v-btn> </td>

    </template>
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Запрашиваемый результат "{{ search }}" не найден.
      </v-alert>
    </v-data-table>
   </v-card>
  </div>
</template>

<script>
 import importExportButtons from '@/components/importExportButtons';
 import modalForm from '@/components/modalForm/modalForm';
 import zaglushka from '@/zaglushka';


  export default {
    name: 'claims',
   components: {
            importExportButtons,
            modalForm
    },
    data () {
      return {
        dialog: {
          create: false,
          update: false
        },
        dates :  zaglushka,
        search: '',
        rowsOnTable: [10,15,20],
        headers: [
          {
            text: 'Номер заявки',
            align: 'left',
            sortable: false,
            value: 'NumberApplication'
          },
          { text: 'Дата', value: 'DateApplication' },
          { text: 'БП', value: 'bp' },
          { text: 'Организация', value: 'organization' },
          { text: 'КА', value: 'contractor' },
          { text: 'Комментарий заявки', value: 'comment' },
          { text: 'Правки', value: 'Edit' }
        ]
       
      }
    },
    methods: {
      closeCreateModal() {
          this.dialog.create = false;
    },
     closeUpdateModal() {
          this.dialog.update = false;
      },
    closeModal() {
          this.closeCreateModal(); 
          this.closeUpdateModal();
      },
    }
  }
</script>