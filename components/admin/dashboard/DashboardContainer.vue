<template>
  <div class="px-10">
    <div class="text-h4 py-5">
      <b>Dashboard</b>
    </div>
    <v-row>
      <!-- <v-col>
            <v-card
              color="#7da0fa"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Received Clients Today</div>
              <div class="text-h4 white--text">
                <b> {{0}}</b>
              </div>
            </v-card>
          </v-col> -->
      <v-col cols="12">
        <v-card
          color="#4747a1"
          height="120"
          class="rounded-xl pa-5"
          elevation="5"
        >
          <div class="pb-5 white--text">Total Customers</div>
          <div class="text-h4 white--text">
            <b>{{ users.length }}</b>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          color="#7978e9"
          height="120"
          class="rounded-xl pa-5"
          elevation="5"
        >
          <v-row>
            <v-col>
              <div class="pb-5 white--text">Total No. of Sales</div>
              <div class="text-h4 white--text">
                <b> {{ transaction.length }}</b>
              </div>
            </v-col>
            <!-- <v-col align-self="center" align="end">
                  <v-icon size="60" color="white">mdi-account-multiple</v-icon>
               </v-col> -->
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="#f3797e"
          height="120"
          class="rounded-xl pa-5"
          elevation="5"
        >
          <div class="pb-5 white--text">Total Designs</div>
          <div class="text-h4 white--text">
            <b> {{ tattoo.length }}</b>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="py-5">
          <v-card class="pa-10 rounded-xl" elevation="10">
           <v-row>
            <v-col>
               <div class="text-h5">
              <b>Top Artist</b>
            </div>
            </v-col>
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
              label="Daily Filter"
              persistent-hint
              v-bind="attrs"
              @blur="date = date"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="topArtistGetall"
            v-model="date"
            no-title
          ></v-date-picker>
        </v-menu>
       </v-col>
             <v-col class="pa-10 ">
          <v-menu
          class="pa-0"
          ref="eventDateRange"
          v-model="eventDateRange"
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
              v-model="dateRange"
              outlined
              label="Range Filter"
              persistent-hint
              v-bind="attrs"
              @blur="dateRange = dateRange"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="topArtistGetall"
            v-model="dateRange"
            no-title
            range
          ></v-date-picker>
        </v-menu>
       </v-col>
           </v-row>
            <v-data-table
              class="pa-5"
              :items-per-page="5"
              :headers="headerTopArtist"
              :items="topArtist"
              :loading="isLoading"
            >
              <template v-slot:loading>
                <v-skeleton-loader
                  v-for="n in 5"
                  :key="n"
                  type="list-item-avatar-two-line"
                  class="my-2"
                ></v-skeleton-loader>
              </template>
            </v-data-table>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="py-5">
          <v-card class="pa-10 rounded-xl" elevation="10">
          <v-row>
            <v-col>
              <div class="text-h5">
              <b>Top Design</b>
            </div>
          </v-col>
            <!-- <v-col class="pa-10 ">
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
              label="Daily Filter"
              persistent-hint
              v-bind="attrs"
              @blur="date = date"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="topArtistGetall"
            v-model="date"
            no-title
          ></v-date-picker>
        </v-menu>
       </v-col> -->
             <!-- <v-col class="pa-10 ">
          <v-menu
          class="pa-0"
          ref="eventDateRange"
          v-model="eventDateRange"
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
              v-model="dateRange"
              outlined
              label="Range Filter"
              persistent-hint
              v-bind="attrs"
              @blur="dateRange = dateRange"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            @change="topArtistGetall"
            v-model="dateRange"
            no-title
            range
          ></v-date-picker>
        </v-menu>
       </v-col> -->
          </v-row>
            <v-data-table
              class="pa-5"
              :items-per-page="5"
              :search="search"
              :headers="headerTopDesign"
              :items="topDesign"
              :loading="isLoading"
            >
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
            </v-data-table>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="py-5">
          <v-card class="pa-10 rounded-xl" elevation="10">
            <div class="text-h5">
              <b>Artist</b>
            </div>
            <v-data-table
              class="pa-5"
              :search="search"
              :headers="headers"
              :items="users"
              :loading="isLoading"
            >
              <!-- <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price)}}
          </div>
      </template> -->
              <template v-slot:loading>
                <v-skeleton-loader
                  v-for="n in 5"
                  :key="n"
                  type="list-item-avatar-two-line"
                  class="my-2"
                ></v-skeleton-loader>
              </template>

              <template #[`item.opt`]="{ item }">
                <v-menu offset-y z-index="1">
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click.stop="viewSchedule(item)">
                      <v-list-item-content>
                        <v-list-item-title>View Schedule</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- <v-row class="pt-5">
         <v-col align="center" @click="route('usermanagement')" >
            <v-card height="220" width="220" elevation="5" align="center" style="cursor:pointer">
                <v-icon size="60">mdi-account-multiple</v-icon>
                <div class="text-h6">
                   <b> Users</b>
                </div>
                <div class="text-h3 green--text pt-5">
                    <b>{{users.length}}</b>
                </div>
            </v-card>
         </v-col>
         <v-col align="center" @click="route('cases')" >
               <v-card height="220" width="220" elevation="5" align="center" style="cursor:pointer">
                <v-icon size="60">mdi-material-design</v-icon>
                <div class="text-h6">
                   <b>Designs</b>
                </div>
                <div class="text-h3 green--text pt-5">
                    <b>{{search_list.length}}</b>
                </div>
            </v-card>
         </v-col>
         <v-col align="center" @click="route('donate')" >
               <v-card height="220" width="220" elevation="5" align="center" style="cursor:pointer">
                <v-icon size="60">mdi-shape</v-icon>
                <div class="text-h6">
                   <b>Design Categories</b>
                </div>
                <div class="text-h3 green--text pt-5">
                    <b>{{donation.length}}</b>
                </div>
            </v-card>
         </v-col>
          <v-col align="center" @click="route('donate')" >
               <v-card height="220" width="220" elevation="5" align="center" style="cursor:pointer">
                <v-icon size="60">mdi-book</v-icon>
                <div class="text-h6">
                   <b>Transactions</b>
                </div>
                <div class="text-h3 green--text pt-5">
                    <b>{{donation.length}}</b>
                </div>
            </v-card>
         </v-col>
  
     </v-row> -->
    <!-- <div class="py-10" align="start">
       <v-card elevation="5">
         <div class="pa-2">
          <b> Case Report Analytics</b>
         </div>
         <div class="pie_chart"  style="height:280px" align="center" v-if="chart_data1" >
                    <pie-chart :data="chartData1" :options="chartOptions"></pie-chart>
                </div>
       </v-card>
       </div> -->
    <div></div>
  </div>
</template>

<script>
import PieChart from "./PieChart.js";
export default {
  components: {
    PieChart,
  },
  created() {
    // this.topDesignGetall();
    this.loadData();
    this.topArtistGetall()
  },
  data() {
    return {
      dateRange:[],
      eventDate:false,
      eventDateRange:false,
      topArtist:[],
      date:'',
      users: [],
      headerTopDesign: [
        { text: "ID", value: "id" },
        { text: "Tattoo Name", value: "tattoo_name" },
        { text: "Category", value: "category" },
        { text: "Image", value: "image" },
        { text: "Price", value: "price" },
        { text: "Color", value: "colored" },
        { text: "Firstname", value: "firstname" },
        { text: "Number of Transaction", value: "numberOfTransaction" },
        // { text: "Volume", value: "numAvail" },
        ,
      ],
      headerTopArtist: [
        { text: "ID", value: "id" },
        { text: "Email", value: "email" },
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Number of Transaction", value: "numberOfTransaction" },
        ,
      ],
      headers: [
        { text: "ID", value: "id" },
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Email", value: "email" },
        { text: "Status", value: "status" },
        { text: "Action", value: "opt" },
        ,
      ],
      donation: [],
      transaction: [],
      ps_list: [],
      tattoo: [],
      topDesign: [],
      chartData1: {
        responsive: false,
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Women", "Child", "Men"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#E3C790", "#344557"],
            data: [1],
          },
        ],
      },
      chartData: {
        responsive: false,

        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        chart_data1: false,
        sap_list: [],
        labels: [],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#E3C790", "#344557"],
            data: [],
          },
        ],
      },
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      users: [],
      search_list: [],
      demand_list: [],
    };
  },
  methods: {
    resetDate(){},
    changeDate(){},
    viewSchedule(item) {
      window.location.href = `/admin/schedule?id=${item.id}`;
    },
    async userGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/artist/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
          this.isLoading = false;
        });
    },
    async topDesignGetall() {
      const res1 = await this.$axios
        .get(`/tattoo-mostbuy/?date=${this.dateRange!=[] ? this.dateRange : this.date}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res1) => {
          this.topDesign = res1.data;
          console.log(res1.data)
          this.isLoading = false;
        });
    },
    async topArtistGetall() {
    
      const res1 = await this.$axios
        .get(`/top-artist/?date=${this.dateRange!=[] ? this.dateRange : this.date}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res1) => {
          this.topArtist = res1.data;
          this.topDesignGetall()
        });
        
    },
    
    async designGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/tattoo/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.tattoo = res.data;
          this.isLoading = false;
        });
    },
    async salesGetall() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/transaction/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.transaction = res.data;
        });
    },
    async psGetall() {
      const res = await this.$axios
        .get(`/ps/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.ps_list = res.data;
          this.ps_list = this.ps_list.filter(
            (data) => data.status == "Approved"
          );
          console.log("okays");
          console.log(this.ps_list);
          // this.search_list.map(item=>{

          //         // this.chartData1.labels.push(item.category)
          //         this.chartData1.datasets[40].data[0]=1

          // })
        });
    },
    async sapGetall() {
      const res = await this.$axios
        .get(`/sap/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.sap_list = res.data;
          this.sap_list = this.sap_list.filter(
            (data) => data.status == "Approved"
          );
          console.log("okayss");
          console.log(this.sap_list);
          // this.search_list.map(item=>{

          //         // this.chartData1.labels.push(item.category)
          //         this.chartData1.datasets[40].data[0]=1

          // })
        });
    },
    route(val) {
      this.$router.push("/admin/" + val);
    },
    loadData() {
      this.designGetall();
      // this.searchGetall()
      this.salesGetall();
      this.userGetall();
      // this.psGetall()
      // this.sapGetall()
    },
    //  async usersGetall(){
    //       const res = await this.$axios
    //           .get(`/users/`, {
    //           headers: {
    //               Authorization: `Bearer ${localStorage.getItem("token")}`,
    //           },
    //           })
    //           .then((res) => {
    //           console.log(res.data);
    //           var a = res.data
    //           this.users = a.filter(data=>data.account_type=='Client')

    //           });
    //   },

    // async demandGetall(){
    //      this.isLoading = true;
    //       const res = await this.$axios
    //           .get(`/demand/`, {
    //               headers: {

    //               },
    //           })
    //           .then((res) => {
    //           this.demand_list = res.data;
    //           this.demand_list.map(item=>{
    //         if(this.chartData.datasets[0].data.length>=3){
    //         }
    //         else {
    //             this.chartData.labels.push(item.category)
    //             this.chartData.datasets[0].data[this.chartData.datasets[0].data.length]=item.quantity
    //         }
    //     })
    //   });
    // },
    async searchGetall() {
      const res = await this.$axios
        .get(`/cases/`, {
          headers: {},
        })
        .then((res) => {
          console.log(res.data);
          this.search_list = res.data;
          this.search_list = this.search_list.filter(
            (data) => data.status == "approved"
          );
          console.log("okay");
          console.log(this.search_list);
          // this.search_list.map(item=>{

          //         // this.chartData1.labels.push(item.category)
          //         this.chartData1.datasets[40].data[0]=1

          // })
          var women = this.search_list.filter(
            (item) => item.category == "Women"
          );
          this.chartData1.datasets[0].data[0] = women.length;
          var child = this.search_list.filter(
            (item) => item.category == "Child"
          );
          this.chartData1.datasets[0].data[1] = child.length;
          var men = this.search_list.filter((item) => item.category == "Men");
          this.chartData1.datasets[0].data[2] = men.length;
          this.chart_data1 = true;
        });
    },
  },
};
</script>

<style>
.pie_chart {
  margin: 0px 0px 30px 20px;
  max-width: 250px;
}
</style>