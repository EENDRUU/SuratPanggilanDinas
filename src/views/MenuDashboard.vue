<template>
  <div class="MenuDashboard">
        <Navbar />
    <div style="background-color:rgba(241, 241, 241, 0.5)">
      <div style="padding-top: 20px;">
          <Dashboard/>
      </div>
    </div>
   
  </div>
</template>
<script>
import Dashboard from "@/components/Dashboard.vue";
import Navbar from "@/components/Navbar.vue";
//import axios from "axios";

export default {
  name: "MenuDashboard",
  components: {
    Navbar,
    Dashboard
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/best-products")
    //   .then((response) => this.setProducts(response.data))
    //   .catch((error) => console.log(error))
  },
};
</script>