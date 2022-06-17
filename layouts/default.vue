<template>
  <v-app dark>
     <v-dialog v-model="isOpenLogout" width="500" persistent>
    <v-card class="pa-10">
    <div align="center" class="text-h6">Logout User</div>
    <div align="center" class="pa-10">
        Would you like to logout?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isOpenLogout=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text @click="confirm"> Logout </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      fixed
      app
      elevation="1"
      v-if="
        account_type == null ||
        $route.name == 'index' ||
        $route.name == 'contacts' ||
        $route.name == 'about' ||
        $route.name == 'market' ||
        $route.name == 'login' ||
        $route.name == 'seller'
      "
    >
      <v-img
        src="/logo.png"
        height="100"
        width="100"
        contain
        style="cursor: pointer"
        @click="route('index')"
      ></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('index')"
        ><v-icon class="pb-1">mdi-home</v-icon>Home</v-toolbar-title
      >
      <!-- <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('market')"
        ><v-icon class="pb-1">mdi-store</v-icon> Market</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('contacts')"
        ><v-icon class="pb-1">mdi-phone</v-icon> Contact us</v-toolbar-title
      >
      <v-toolbar-title
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('about')"
        ><v-icon class="pb-1">mdi-information</v-icon> About us</v-toolbar-title
      >
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('seller')"
        ><v-icon class="pb-1">mdi-account</v-icon> Be an Artist</v-toolbar-title
      > -->
      <div class="pl-16"></div>
      <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('login')"
      >
        <v-icon class="pb-1">mdi-login</v-icon>Login</v-toolbar-title
      >
      <v-toolbar-title
        v-else
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="
          account_type == 'Seller'
            ? route('seller/dashboard')
            : account_type == 'Customer'
            ? route('customer/transaction')
            : route('admin/dashboard')
        "
      >
        <v-icon class="pb-1">mdi-login</v-icon>{{ name }}</v-toolbar-title
      >
      <!-- <v-toolbar-title
        v-if="token == null"
        class="px-4 black--text"
        style="cursor: pointer; font-size: 16px"
        @click="route('register')"
        ><v-icon class="pb-1">mdi-plus</v-icon> Register</v-toolbar-title
      > -->
    </v-app-bar>
    <v-app-bar  color="#222f3e" :clipped-left="clipped" fixed app elevation="1" v-else-if="account_type=='Artist'" >
    <v-app-bar-nav-icon @click="drawer=true" color="white"></v-app-bar-nav-icon>
    <v-row>
      <v-col cols="auto">
        <v-img src="/logo.png" height="100" width="100"  style="cursor:pointer" @click="route('index')"></v-img>
      </v-col>
      <v-col  align-self="center">
        <div class="white--text">
         Tattoo
      </div>
      </v-col>
    </v-row>
    <div class="white--text">
      {{$route.name=='admin-configuration' ? 'System Configuration' : ''}}
    </div>
    </v-app-bar>
     <v-app-bar  color="#222f3e" :clipped-left="clipped" fixed app elevation="1" v-else-if="account_type=='Owner'" >
    <v-app-bar-nav-icon @click="drawer=true" color="white"></v-app-bar-nav-icon>
    <v-row>
      <v-col cols="auto">
        <v-img src="/logo.png" height="100" width="100"  style="cursor:pointer" @click="route('index')"></v-img>
      </v-col>
      <v-col  align-self="center">
        <div class="white--text">
         Tattoo
      </div>
      </v-col>
    </v-row>
    <div class="white--text">
      {{$route.name=='admin-configuration' ? 'System Configuration' : ''}}
    </div>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary  color="#222f3e">
         <!--eslint-disable-->
      <v-list nav dense   v-if="account_type=='Owner'">
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
        
          color="white"
            :to="items[index].to"
            v-for="(key, index) in items"
            :key="index"
          > 
            <v-icon class="pr-2" color="white">{{ items[index].icon }}</v-icon>
            <v-list-item-title style="color:white">{{ items[index].title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
          color="white"
          @click="logout"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list nav dense  v-else>
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
        
          color="white"
            :to="items_artist[index].to"
            v-for="(key, index) in items_artist"
            :key="index"
          > 
            <v-icon class="pr-2" color="white">{{ items_artist[index].icon }}</v-icon>
            <v-list-item-title style="color:white">{{ items_artist[index].title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
          color="white"
          @click="logout"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <v-list nav dense   v-if="account_type=='Seller'">
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
        
          color="white"
            :to="items_seller[index].to"
            v-for="(key, index) in items_seller"
            :key="index"
          > 
            <v-icon class="pr-2" color="white">{{ items_seller[index].icon }}</v-icon>
            <v-list-item-title style="color:white">{{ items_seller[index].title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
          color="white"
          @click="logout"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
      <!-- <v-list nav dense   >
        <v-list-item-group active-class="primary" color="white">
          <v-list-item
        
          color="white"
            :to="items_customer[index].to"
            v-for="(key, index) in items_customer"
            :key="index"
          > 
            <v-icon class="pr-2" color="white">{{ items_customer[index].icon }}</v-icon>
            <v-list-item-title style="color:white">{{ items_customer[index].title }}</v-list-item-title>
          </v-list-item>
          <v-list-item
          color="white"
          @click="logout"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  created(){
    this.account_type = localStorage.getItem('account_type')
  },
  data() {
    return {
      account_type:null,
      clipped: false,
      drawer: false,
      isOpenLogout:false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-apps",
          title: "Usermanagement",
          to: "/admin/usermanagement",
        },
        {
          icon: "mdi-apps",
          title: "Designs",
          to: "/admin/designs",
        },
         {
          icon: "mdi-apps",
          title: "Transactions",
          to: "/admin/transactions",
        },
        {
          icon: "mdi-apps",
          title: "Sales",
          to: "/admin/sales",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Content Management",
          to: "/admin/cms",
        },
      ],
      items_artist: [
        {
          icon: "mdi-apps",
          title: "Design",
          to: "/artist/design",
        },
        {
          icon: "mdi-apps",
          title: "Schedule",
          to: "/artist/schedule",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Appointment",
          to: "/artist/appointment",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Sales",
          to: "/artist/sales",
        },
      ],
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    logout(){
     this.isOpenLogout=true;
   },
     confirm(){
     localStorage.clear();
    window.location.href="/"
     this.isOpenLogout=false
   },
    route(name) {
      if (name == "index") {
        this.$router.push("/");
        return;
      }

      window.location.href = "/" + name;
    },
  },
};
</script>
