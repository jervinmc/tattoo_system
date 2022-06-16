<template>
    <div>
      <v-sheet
        tile
        height="54"
        class="d-flex"
      >
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.prev()"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="ma-2"
          @click="$refs.calendar.next()"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          type="week"
          :events="events"
          event-overlap-mode="stack"
          :event-overlap-threshold="30"
        ></v-calendar>
      </v-sheet>
    </div>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    next(){
      this.$refs.calendar.next()
    },
       formatDate(val) {

      return moment(String(val)).format("YYYY-MM-DD hh:mm");
    },
    async initialize() {
      this.isLoading = true;
      const res = await this.$axios
        .get(`/transaction_artistid/${localStorage.getItem("id")}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
            this.events = []
          console.log(res.data);
          for(let key in res.data){
            res.data[key].transaction_date = res.data[key].transaction_date.replace(':00','')
            res.data[key].transaction_date = res.data[key].transaction_date.replace('T',' ')
            res.data[key].transaction_date = res.data[key].transaction_date.replace('Z','')
              var final_date = res.data[key].transaction_date;
              this.events.push({"name":`Tattoo ${res.data[key].estimated_time} Minutes Session`,"start":final_date})
          }
      
          this.isLoading = false;
        });
    },
  },
  created() { 
    this.initialize();
  },
  data() {
    return {
      value: '',
      today: "2022-06-12",
      events: [
        // {
        //   name: "Weekly Meeting",
        //   start: "2022-06-12 09:00",
        // },
        // {
        //   name: `Tattoo' Rest Day`,
        //   start: "2019-01-10",
        // },
        // {
        //   name: "Mash Potatoes",
        //   start: "2019-01-09 12:30",
        //   end: "2019-01-09 15:30",
        // },
      ],
    };
  },
};
</script>

<style>
</style>