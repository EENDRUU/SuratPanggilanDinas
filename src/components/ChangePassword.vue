<template>
  <b-container class="bv-example-row divAll">
  <b-row>
    <b-col cols="12" md="6">
        <div class="cardForm">
            <div class="headerForm">
                <span class="textFrom1">Change Portal Password</span>
            </div>
            <div class="bodyForm">
                <b-row style="padding-bottom:10px">
                    <b-col sm="4">
                        <label class="labelForm">Old Password</label>
                    </b-col>
                    <b-col >
                        <b-form-input v-model="oldPassword" type="password"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="padding-bottom:10px">
                    <b-col sm="4">
                        <label class="labelForm">New Password</label>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="newPassword" type="password"></b-form-input>
                    </b-col>
                </b-row>
                <b-row style="padding-bottom:10px">
                    <b-col sm="4">
                        <label class="labelForm">Re-input New Password</label>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="rePassword" type="password"></b-form-input>
                    </b-col>
                </b-row>

               
            </div>
           
        </div>
    </b-col>
  </b-row>
  </b-container>
</template>

<script>
export default {
 data() {
    return {
        rePassword:"12345678",
        oldPassword:"12345678",
        newPassword:"12345678"
    }
 }
}
</script>

<style>
.cardForm{
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.textFrom1{
    font-weight: 700 !important;
font-size: 16px !important;
line-height: 22px !important;
}

.headerForm{
    padding: 15px 30px 15px 30px;
    border-bottom: 1px solid rgba(155, 155, 155, 0.5);
}
.bodyForm{
    padding: 25px 30px 25px 30px;
}
.labelForm{
    
    font-weight: 400;
    font-size: 13px;
    width: 100%;
    vertical-align: middle;
    text-align: right;
    padding: 10px 0px 10px 0px;

}
@media (max-width: 575px)
{
  .labelForm{
    
 
    text-align: left !important;

}
}
</style>