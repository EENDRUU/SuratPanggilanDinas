<template>
  <div class="MenuSPD"  style="font-size:14px">
    <Navbar />
    <div style="background-color:#ffffff;height:1000px;">
      <div style="padding-top: 20px;">
        <b-container class="bv-example-row divAll">
          <ViewMangkir/>
                  
      
          <b-row class="justify-content-md-center">
            <b-col  sm="3" md="auto">
              <b-collapse visible id="collapse-3" style="padding-bottom: 15px;" v-model="CollapseMenu">
              <div >
              
                  <DropDownMenu/>
              </div>
            </b-collapse>
            <span class="btnCollapseDropDown"
                :class="CollapseMenu ? null : 'collapsed'"
                :aria-expanded="CollapseMenu ? 'true' : 'false'"
                aria-controls="collapse-3"
                @click="CollapseMenu = !CollapseMenu"
            >
                <b-icon-arrow-bar-left  v-if="CollapseMenu"></b-icon-arrow-bar-left>
                <b-icon-arrow-bar-right  v-if="!CollapseMenu"></b-icon-arrow-bar-right>
            </span>
          
          
            </b-col>


            <b-col>
            <!-- <div id="divTable" > -->
              <Datatable/>
            <!-- </div> -->
              

                
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
import ViewMangkir from "@/components/ViewMangkir.vue";
//import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    DropDownMenu,
    Datatable,
    ViewMangkir
  },
  data() {
    return {
      CollapseMenu: true,
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
.divAll{
  max-width: 100%  !important;
}
.home{
  font-size: 14px !important;
}
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

.btnCollapseDropDown{
      padding-right: 0;
    font-size: 20px;
    float: right;
}
</style>

