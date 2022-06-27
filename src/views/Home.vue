
<template>
  <div class="home"  >
    <Navbar />
    <div style="background-color:#EBEDEF;height:1000px;font-family: 'Open Sans';font-style: normal; font-weight: 400;font-size: 14px;line-height: 150%;">
      <div style="padding-top: 20px;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="3">
            <div>
              <DropDownMenu/>
            </div>
            
            </b-col>
          <b-col  cols="9" >
          <div id="divTable" >
            <Datatable/>
          </div>
             

              
          </b-col>
        </b-row>
      </b-container>

        
        
      </div>

</div>


  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";
import Datatable from "@/components/Datatable.vue";
//import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    DropDownMenu,
    Datatable
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    // axios
    //   .get("http://localhost:3000/best-products")
    //   .then((response) => this.setProducts(response.data))
    //   .catch((error) => console.log(error))
  },
};
</script>
<style>
#divTable{

      background-color: rgb(255, 255, 255);
    padding: 40px 30px;
    border-radius: 6px;
     box-shadow: 2px 2px 10px #888888;
}

#divMenu{
    background: white;
    padding: 30px 28px;
    border-radius: 6px
}

</style>

