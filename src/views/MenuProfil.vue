<template>
  <div class="MenuProfil">
        <Navbar />
    <div style="background-color:rgba(241, 241, 241, 0.5)">
      <div style="padding-top: 20px;">
          <Profil/>
      </div>
    </div>
   
  </div>
  
</template>

<script>
import Profil from "@/components/Profil.vue";
import Navbar from "@/components/Navbar.vue";
//import axios from "axios";

export default {
  name: "MenuDashboard",
  components: {
    Navbar,
    Profil
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/best-products")
    //   .then((response) => this.setProducts(response.data))
    //   .catch((error) => console.log(error))
  },
};
</script>