<template>
  <div>
        <Navbar />
    <div style="background-color:rgba(241, 241, 241, 0.5);height: 500px;">
      <div style="padding-top: 20px;">
          <ChangeEmail/>
      </div>
    </div>
   
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import ChangeEmail from "@/components/ChangeEmail.vue";
//import axios from "axios";

export default {
  name: "MenuDashboard",
  components: {
    Navbar,
    ChangeEmail
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/best-products")
    //   .then((response) => this.setProducts(response.data))
    //   .catch((error) => console.log(error))
  },
};
</script>