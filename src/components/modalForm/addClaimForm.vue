<template>
    <v-layout align-center justify-center row fill-height>  
    <v-flex xs12 sm5 md6 lg4 pr-4 pt-5>   
        <v-btn flat large color="primary" @click="saveClaim"><v-icon color="">done_outline</v-icon>Потвердить</v-btn>
        <v-btn flat large color="primary"><v-icon color="">close</v-icon>Отменить</v-btn>
        <v-card ref="form">
        <v-card-text>
            <template>
                <v-container grid-list-md>
                <v-layout  row wrap>
                <v-flex>
                    <v-menu
                    ref="openCalendar"
                    v-model="openCalendar"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    v-model="dateFormatted"
                    label="Дата заявки"
                    readonly
                    prepend-icon="event"
                    @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker 
                    v-model="date" 
                    no-title 
                    @input="openCalendar = false"
                    locale="ru-Latn"
                    ></v-date-picker>
                    </v-menu>
                </v-flex>
                </v-layout>
                </v-container>
            </template>

            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                <v-flex xs12>
                    <v-autocomplete 
                        ref="claim.numberDays"
                        v-model="claim.numberDays"
                        :rules="[() => !!claim.numberDays || 'Выберите кол-во дней']"
                        :items="staticDates.ArrayDays"
                        label="На сколько дней"
                        placeholder="Введите кол-во дней..."
                        required
                    ></v-autocomplete>
                    <v-autocomplete
                        ref="claim.departments"
                        v-model="claim.departments"
                        :rules="[() => !!claim.departments || 'Выберите БП']"
                        :items="staticDates.bp"
                        label="БП"
                        placeholder="Выберите БП"
                        required
                    ></v-autocomplete>
                        <v-autocomplete
                        ref="claim.organization"
                        v-model="claim.organizations"
                        :rules="[() => !!claim.organizations || ' не ввели название города']"
                        label="Организация"
                        :items="staticDates.NameOrganizations"
                        required
                        placeholder="Введите название города"
                    ></v-autocomplete>
                    <v-autocomplete
                        :items="staticDates.NameСontractors"
                        ref="claim.contractors"
                        v-model="claim.contractors"
                        :rules="[() => !!claim.contractors || 'Вы не ввели КА']"
                        label="КА"
                        required
                        placeholder="Введите фамилию КА"
                    ></v-autocomplete>
                </v-flex>
                </v-layout>
            </v-container>

        </v-card-text>

        </v-card>
    </v-flex>

        <template>
            <v-data-table
            :headers="headers"
            :items="claim.list"
            class="elevation-1"
            hide-actions
            >
                <template slot="items" slot-scope="props">
                   <td><v-autocomplete
                     v-model="props.item.functionOutstaff"
                        :rules="[() => !!defaultElOptionList.functionOutstaff || 'Выберите кол-во дней']"
                        :items="staticDates.FunctionOutstafers"
                        placeholder="Выберите функцию"
                        required
                    ></v-autocomplete></td>
                    <td><v-autocomplete  
                     v-model="props.item.PosOutstafers"   
                        :items="staticDates.PositionOutstafers"
                        placeholder="Выберите должность"
                        required
                    ></v-autocomplete></td>
                    <td><v-autocomplete
                          v-model="defaultOptionList.JobChange"            
                        :items="staticDates.NameJobChange"
                        placeholder="Выберите смену"
                        required
                    ></v-autocomplete></td>
                    <td><v-autocomplete
                        :items="staticDates.NameNumberBets"
                        placeholder="Выберите должность"
                        required
                    ></v-autocomplete></td>
                    <td class="text-xs-right">{{ props.item.valueHours }}</td>
                    <td class="text-xs-right">
                        <v-text-field
                        v-model="props.item.Comments"
                        :counter="100"
                        required
                        ></v-text-field>
                    </td>
                    <td class="justify-center layout px-0">
                        <v-icon small @click="deleteItem(props.item)"
                        >delete</v-icon>
                    </td>         
                </template> 
                            
            </v-data-table>     
            <v-btn color="blue darken-1" flat @click="addOptions"><v-icon color="">add_circle_outline</v-icon> Добавить</v-btn>    
        </template>
    </v-layout>
</template>

<script>
 import zaglushka_claims from '@/zaglushka_claims';

  export default {
    data: vm => ({
    staticDates: zaglushka_claims, 
    openCalendar: false,
    editedIndex: -1,  
    claim: {
        dateFormatted:"",
        numberDays: null, 
        departments: null,
        organizations: null,
        contractors: null ,
        list: [ 
          
        ]
    },
        EditedOptionList: {
            functionOutstaff: null,
            PosOutstafers:null,
            JobChange: null,
            valueBet: null,
            valueHours: null,
            comments: null
    },
        defaultOptionList: {
            functionOutstaff: null,
            PosOutstafers:null,
            JobChange: null,
            valueBet: null,
            valueHours: null,
            comments: null
      },
    ElOptionList: null,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    headers: [
          {
            text: 'Функция',
            align: 'left',
            sortable: false,
            value: 'functionOutstaff'
          },
          { text: 'Должность', value: 'PosOutstafers', sortable: false },
          { text: 'Смена', value: 'Сhangejob', sortable: false },
          { text: 'Кол-во ставок', value: 'valueBet', sortable: false },
          { text: 'Кол-во часов', value: 'valueHours', sortable: false},
          { text: 'Комментарий', value: 'comments' , sortable: false}
        ],

    }),

    computed: {
            computedDateFormatted () {
            return this.formatDate(this.date)
            }
    },

    watch: {
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            }
    },

    methods: {
            formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
            },
            parseDate (date) {
            if (!date) return null
            const [day,month, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
            saveClaim (item){
                return console.log(this.claim); 
            },
            resetDefaultOption () {
            setTimeout(() => {
                this.EditedOptionList = Object.assign({}, this.defaultElOptionList)
                this.editedIndex = -1
            }, 300)
            },

            addOptions () {
            if (this.editedIndex > -1) {
                Object.assign(this.claim.list[this.editedIndex], this.EditedOptionList)
            } else {
                this.claim.list.push(this.EditedOptionList)
            }
            this.resetDefaultOption()
            },
            deleteItem (item) {
            const index = this.claim.list.indexOf(item)
            confirm('Точно удалить?') && this.claim.list.splice(index, 1)
            },

    },
    created () {
            this.claim.list.push(this.defaultOptionList);
    },
    
  }
</script>


