<template>
<div>
    <div >
    <b-input-group style="margin-bottom: 15px;">
        

       <b-form-input id="textSearch" type="text"  placeholder="Search" > </b-form-input>

    <span id="spanBtnSearch"><b-icon-search></b-icon-search></span>
       
    </b-input-group>
    </div>

    <div id="bodyCard" >
        <div id="DropDownHeader" >
            <div id="DropDownNav">Surat Panggilan Dinas 
            <span class="btnDropDownHeader" id="btnDropDownHeader"
             :class="isCollapse1 ? null : 'collapsed'"
                :aria-expanded="isCollapse1 ? 'true' : 'false'"
                aria-controls="collapse-1"
                @click="isCollapse1 = !isCollapse1"
             >
                <b-icon-chevron-down  v-if="!isCollapse1" ></b-icon-chevron-down>
                <b-icon-chevron-up  v-if="isCollapse1" ></b-icon-chevron-up>
            </span>
            </div>
        </div>
        <b-collapse visible id="collapse-1" v-model="isCollapse1" style="padding-bottom: 15px;">
        <b-list-group>
            <b-list-group-item class="listmenu d-flex justify-content-between align-items-center" >
            Karyawan Mangkir
            <b-badge variant="primary" pill>99+</b-badge>
            </b-list-group-item>
            <b-list-group-item class="listmenu2 d-flex justify-content-between align-items-center" >
                <div class="DropdownHeaderChild">
                <div class="DropDownNavChild"><span> Surat Panggilan Dinas</span> 
               
                <span class="btnDropDownHeaderChild" 
                    :class="isCollapse2 ? null : 'collapsed'"
                    :aria-expanded="isCollapse2 ? 'true' : 'false'"
                    aria-controls="collapse-2"
                    @click="isCollapse2 = !isCollapse2"
                >
                    <b-icon-chevron-down  v-if="!isCollapse2"></b-icon-chevron-down>
                    <b-icon-chevron-up  v-if="isCollapse2"></b-icon-chevron-up>
                </span>
                 <b-badge style="margin-right: 8px;float:right" variant="primary" pill>15</b-badge>
                </div>
                <b-collapse visible id="collapse-2" v-model="isCollapse2">
                <b-list-group>
                    <b-list-group-item class="listmenu3 d-flex justify-content-between align-items-center" style="border:none;padding: 5px 29px 5px 15px;">
                    Surat Panggilan 1
                    <b-badge  variant="primary" pill>14</b-badge>
                    </b-list-group-item>
                    <b-list-group-item class="listmenu3 d-flex justify-content-between align-items-center" style="border:none;padding: 5px 29px 5px 15px;">
                    Surat Panggilan 2
                    <b-badge  variant="primary" pill>1</b-badge>
                    </b-list-group-item>
                </b-list-group>
            </b-collapse>

                </div>
            
            </b-list-group-item>
            <b-list-group-item class="listmenu d-flex justify-content-between align-items-center">
            Konfirmasi Mangkir
            <b-badge  variant="primary" pill>1</b-badge>
            </b-list-group-item>
        </b-list-group>
        </b-collapse> 
    </div>
</div>

</template>

<script>
export default {
    name: "DropDownMenu",
    data() {
        return {
            isCollapse1: true,
            isCollapse2: false
        };
    },
    methods: {
        changeIcon(data) {
            this.products = data;
        },
    },
    mounted() {
        // axios
        //   .get("http://localhost:3000/best-products")
        //   .then((response) => this.setProducts(response.data))
        //   .catch((error) => console.log(error))
    }
}
</script>

<style>
#bodyCard{
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 2px 2px 10px #dddddd;
}

#DropDownHeader{
    padding: 15px 15px
}

#DropDownNav{
    font-weight:600;margin: 0;font-size: 1rem;
}
#DropDownNavChild{
   font-size: 14px;font-weight: 400;margin: 0
}

.btnDropDownHeader
{
    float: right;
    padding-right: 5px;
    font-size: 1rem;

}
.btnDropDownHeaderChild
{
    float: right;
    font-size: 1rem;

}
.listmenu {
    border:none !important;
    padding: 0px 43px 0px 22px !important;
}

.listmenu2 {
    border:none !important;
    padding: 5px 19px 5px 22px !important;
}
.listmenu3 {
    border:none !important;
    padding: 6px 8px 0px 15px !important
}
.badge {
    background: #7F7F7F !important;
    border-radius: 6px !important;

    width: 30px !important;
    height: 18px !important;
    font-size: 10px !important;

}

.DropdownHeaderChild{
    width: 100%;
}

#textSearch{
    border: 1px solid #CCCCCC;
    border-radius: 4px;
   
     /* width:280px; */
     border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 35px;
}
#spanBtnSearch
{
    height: 35px;
      
    background-color: white;
    padding: 5px 10px;
    border: 1px solid #CCCCCC;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
</style>