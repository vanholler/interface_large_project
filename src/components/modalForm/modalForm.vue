<template>
  <v-layout row justify-center>
  
     
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeModal">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Добавление заявки</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="closeModal">Сохранить</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
        
          <add-claim-form></add-claim-form>

        </v-list>
      
       
      </v-card>
 
  </v-layout>
</template>

  


<script>
 import addClaimForm from '@/components/modalForm/addClaimForm';
  export default {
    components: {
        addClaimForm
    },
    data: () => ({
      editClaim: {},   
    }),
    props: {
       claim: {
        DateApplication: '',
        bp: '',
        organization: '',
        contractor: '',
        comment: ''
       },
       
    },
    methods: {
      closeModal: function() {
        this.$emit('closeModal');
      }


    }

  }
</script>