<template>
  <div>
    <v-sheet height="100vh">
      <v-calendar
        ref="calendar"
        :now="today"
        :value="today"
        :events="events"
        color="primary"
        type="week"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import moment from "moment";
export default {
  methods: {
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
              this.events.push({"name":`Tattoo ${res.data[key].estimated_time} Minutes Session`,"start":this.formatDate(res.data[key].transaction_date)})
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