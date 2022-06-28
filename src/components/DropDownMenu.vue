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
            <span class="btnDropDownHeader" id="btnDropDownHeader" v-on:click="changeIcon()">
                <b-icon-chevron-down v-b-toggle.collapse-1 id></b-icon-chevron-down>
                <b-icon-chevron-up v-b-toggle.collapse-1 id></b-icon-chevron-up>
            </span>
            </div>
        </div>
        <b-collapse visible id="collapse-1" style="padding-bottom: 15px;">
        <b-list-group>
            <b-list-group-item class="listmenu d-flex justify-content-between align-items-center" >
            Karyawan Mangkir
            <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
            <b-list-group-item class="listmenu2 d-flex justify-content-between align-items-center" >
                <div class="DropdownHeaderChild">
                <div class="DropDownNavChild">Surat Panggilan Dinas 
                <span class="btnDropDownHeaderChild"><b-icon-chevron-down v-b-toggle.collapse-2></b-icon-chevron-down>
                </span>
                </div>
                <b-collapse visible id="collapse-2">
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
        CollapseMenu: false,
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
    padding: 0px 50px 0px 30px !important;
}

.listmenu2 {
    border:none !important;
    padding: 5px 20px 5px 30px !important;
}
.listmenu3 {
    border:none !important;
    padding: 5px 15px 5px 15px !important;
}
.badge {
    background: #7F7F7F !important;
    border-radius: 6px !important;
    padding: 4px 7px !important;
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