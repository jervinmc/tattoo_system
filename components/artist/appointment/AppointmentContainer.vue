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
        <b>Appointment Management</b>
      </v-col>
      <v-spacer></v-spacer>
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
      :items="events"
      :loading="isLoading"
    >
     <template v-slot:[`item.status`]="{ item }">
        <div>
          <v-chip align="center" :style="getColorStatus(item.status)"
            ><span>{{ item.status }} </span></v-chip
          >
        </div>
      </template>
     <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price)}}
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
            <v-list-item v-if="item.status=='Accepted'" @click.stop="status(item,'Completed')">
              <v-list-item-content>
                <v-list-item-title>Mark as Completed</v-list-item-title>
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
  </v-card>
</template>

<script>

export default {
  
  created() {
    this.loadData();
  },
  data() {
    return {
      buttonLoad:false,
      account_type:'',
      deleteConfirmation:false,
      selectedItem:[],
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
        { text: "Price", value: "price" },
        { text: "Status", value: "status" },
         { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
  methods: {
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
      } 
      else if(item =='Completed'){
          return "background-color:blue;border-radius:15px;padding:7px; width:150px; color:white;";
      }
      else  { 
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
        .get(`/transaction_artistid/${localStorage.getItem('id')}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.events = res.data;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>

</style>