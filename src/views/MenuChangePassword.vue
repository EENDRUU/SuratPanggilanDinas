<template>
  <div>
        <Navbar />
    <div style="background-color:rgba(241, 241, 241, 0.5);height: 500px;">
      <div style="padding-top: 20px;">
          <ChangePassword/>
      </div>
    </div>
   
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import ChangePassword from "@/components/ChangePassword.vue";
//import axios from "axios";

export default {
  name: "MenuChangePassword",
  components: {
    Navbar,
    ChangePassword
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/best-products")
    //   .then((response) => this.setProducts(response.data))
    //   .catch((error) => console.log(error))
  },
};
</script>