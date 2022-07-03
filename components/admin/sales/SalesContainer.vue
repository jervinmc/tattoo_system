<template>
  <v-card elevation="5">
     <v-dialog v-model="deleteConfirmation" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Confirmation</div>
    <div align="center" class="pa-10">
        Are you sure you want to delete this item?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="deleteConfirmation=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text :loading="buttonLoad" @click="deleteValue"> Confirm </v-btn>
            </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-row>
      <v-col align="start" class="pa-10 text-h5" cols="auto">
        <b>Sales Management</b>
      </v-col>
      <v-spacer></v-spacer>
        <v-col class="pa-10 ">
          <v-menu
          class="pa-0"
          ref="eventDate"
          v-model="eventDate"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            append-icon="mdi-close"
            @click:append="resetDate"
            hide-details=""
              v-model="date"
              outlined
              label="Range Filter"
              persistent-hint
              v-bind="attrs"
              @blur="date = date"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="changeDate"
            v-model="date"
            no-title
            range
          ></v-date-picker>
        </v-menu>
       </v-col>
        <v-col class="pa-10 ">
          <v-menu
          class="pa-0"
          ref="eventDate1"
          v-model="eventDate1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            append-icon="mdi-close"
            @click:append="resetDate"
            hide-details=""
              v-model="daily"
              outlined
              label="Daily Filter"
              persistent-hint
              v-bind="attrs"
              @blur="date = date"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="dailyFilter"
            v-model="daily"
            no-title
          ></v-date-picker>
        </v-menu>
       </v-col>
      <!-- <v-col align-self="center" align="end" class="pr-10">
        <v-btn
          class="rnd-btn"
          rounded
          large
          color="#222f3e"
          depressed
          dark
          width="190"
          @click="addItem"
        >
          <span class="text-none">Add New Design</span>
        </v-btn>
      </v-col> -->
    </v-row>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :items="items_all"
      :loading="isLoading"
    >
     <template v-slot:[`item.status`]="{ item }">
        <div>
          <v-chip align="center"
            ><span>{{ item.status }} </span></v-chip
          >
        </div>
      </template>
     <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price*.40)}}
          </div>
      </template>
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
         <template #[`item.image`]="{ item }">
             <v-img :src="item.image" height="150" width="150"></v-img>
      </template>
      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="status(item,'Accepted')">
              <v-list-item-content>
                <v-list-item-title>Accept</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="status(item,'Declined')">
              <v-list-item-content>
                <v-list-item-title>Decline</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <div align="end" class="pa-10">
      Total Gross Income : {{total_price - (total_price*.60)}}
    </div>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
computed:{
    itemsCompleted(){
        var data = this.events.filter(data=>data.status=='Completed')
        return data
    }
},
  created() {
    this.loadData();
  },
  data() {
    return {
      daily:'',
      eventDate1:false,
      total_price:0,
      items_all:[],
      eventDate:false,
      buttonLoad:false,
      account_type:'',
      deleteConfirmation:false,
      selectedItem:[],
      date:[],
        events:[],
      selectedItem:{},
      isLoading: false,
      users: [],
      dialogAdd:false,
      isAdd:true,
      headers: [
        { text: "ID", value: "id" },
        { text: "Transaction Date", value: "transaction_date" },
        { text: "Image", value: "image" },
        { text: "Price (Deducted 60%)", value: "price" },
        { text: "Status", value: "status" },
        //  { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
    formatDate(val) {
      return moment(String(val)).format("YYYY-MM-DD");
    },
    resetDate(){
      this.items_all=this.events
      this.date=[]
    },
     changeDate(){
       this.total_price=0
          this.items_all = []
           for(let key in this.events){
          if(new Date(this.date[0])<=new Date(this.events[key].transaction_date) && new Date(this.date[1])>=new Date(this.events[key].transaction_date)){
             this.items_all.push(this.events[key])
             this.total_price = this.total_price + parseInt(this.events[key].price)
          }
        } 
      },
      dailyFilter(){
       this.total_price=0
          this.items_all = []
           for(let key in this.events){
          if(this.formatDate(this.daily)==this.formatDate(this.events[key].transaction_date)){
             this.items_all.push(this.events[key])
             this.total_price = this.total_price + parseInt(this.events[key].price)
          }
        } 
      },
    async  status(item,status){
        this.$axios.patch(`/transaction/${item.id}/`,{
            "status":status
        },)
        this.eventsGetall()
      },
     getColorStatus(item) {
    if (item == "Pending") {
        return "background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;";
      }
      else if(item =='Accepted'){
          return "background-color:green;border-radius:15px;padding:7px; width:150px; color:white;";
      } else  { 
        return "background-color:red;border-radius:15px;padding:7px; width:150px; color: white;";
      } 
      
    },
    async deleteValue(){
     this.buttonLoad=true
      this.$axios.delete(`/tattoo/${this.selectedItem.id}/`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(()=>{
          this.deleteConfirmation=false
          this.buttonLoad=false
          alert('Successfully Deleted!')
          this.loadData()
      })
    },
     deleteItem(val){
      this.selectedItem = val
      this.deleteConfirmation=true
    },
     formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    editItem(val){
      this.selectedItem=val
      this.dialogAdd=true
      this.isAdd=false
    },
    addItem(){
      this.isAdd=true
      this.dialogAdd=true
    },
    async status(data, status) {
      this.isLoading = true;
      const res = await this.$axios
        .patch(
          `/transaction/${data.id}/`,
          {
            status:status
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          this.loadData();
        });
    },
    loadData() {
      this.account_type=localStorage.getItem('account_type')
      this.eventsGetall();
    },
    async eventsGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/transaction/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.items_all = res.data.filter(data=>data.status=='Completed')
          this.events = res.data.filter(data=>data.status=='Completed');
          for(let x in this.events){
             this.total_price = this.total_price + parseInt(this.events[x].price)
          }
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>