<template>
<div>
    <b-modal id="mdlShowMangkir" title="Detail Mangkir">
      
    <b-table class="tableShowMangkir" responsive :items="items"></b-table>
    <div slot="modal-footer" class="w-100">
        <b-btn @click="$bvModal.hide('mdlShowMangkir')">
            OK
        </b-btn>
    </div>
  </b-modal>
</div>
  
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            No: '1',
            Tanggal: '20-06-2022',
            'Absen ID': '03 - Mangkir'
          },
          {
            No: '2',
            Tanggal: '21-06-2022',
            'Absen ID': '03 - Mangkir'
          },
          {
            No: '3',
            Tanggal: '22-06-2022',
            'Absen ID': '03 - Mangkir'
          }
        ]
      }
    }
}
</script>

<style>
.tableShowMangkir table thead tr th:nth-child(1), th:nth-child(2)
{
    border-right: 1px solid #dddddd;
}
.tableShowMangkir table thead tr th:nth-child(3)
{
    border-right: 1px solid #06283D !important;
}
.tableShowMangkir table thead tr th
{
    border-bottom: none !important;
}
.tableShowMangkir table thead 
{
    border: none !important;
}
.tableShowMangkir 
{
    margin:0 !important;
}
#mdlShowMangkir___BV_modal_body_{
        padding: 15px 25px 15px 25px;
}

#mdlShowMangkir___BV_modal_content_ header button{
    background: none !important;
    border: none !important;
    font-size: 1.5rem !important;
}
#mdlShowMangkir___BV_modal_content_ footer button{
    background: #71C018 !important;
    border: 1px solid #E5E5E5 !important;
    /* width: 108px !important;
    height: 34px; */
    font-weight: 400 !important;
    line-height: 19px !important;
    font-size: 14px !important;
    float: right !important;
}
#mdlShowMangkir___BV_modal_content_{
    /* width: 562px; */
        border-radius: 6px;
}
#mdlShowMangkir___BV_modal_content_ header {
        height: 57px;
}
</style>