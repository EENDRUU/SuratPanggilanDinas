<template>
  <div>

 
    <div style="display:none">
      <b-input-group id="textSearchTable" style="margin-bottom: 15px;">
        <input id="btnSearchFilter" type="search" class="form-control" placeholder="Search" aria-controls="datatable" >
        <span id="spanBtnSearchTable"><b-icon-search></b-icon-search></span>  
      </b-input-group>
      <font-awesome-icon  id="iconPageFirst" icon="fa-solid fa-step-backward" />  
      <font-awesome-icon  id="iconPagePrev" icon="fa-solid fa-backward" /> 
      <font-awesome-icon  id="iconPageNext" icon="fa-solid fa-forward" /> 
      <font-awesome-icon  id="iconPageLast" icon="fa-solid fa-step-forward" /> 
    </div>
   
  
    <button id="btnFilter" v-on:click="showFilter()" :class="{ btnFilterActive : isActiveFilter }" class="btn btn-lg btn-success ">
       <b-icon-filter ></b-icon-filter>&nbsp;Filter
    </button>
    <table class="table" id="datatable" style="width:100%">
      <thead>
        <tr>
          <th class="headerTable" >No</th>
          <th class="headerTable" >NIK</th>
          <th class="headerTable">NAMA</th>
          <th class="headerTable" >JUMLAH MANGKIR</th>
          <th class="headerTable" >REMANING TIME</th>
          <th class="headerTable">TINDAK LANJUT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2015228363</td>
          <td>Andrew Christian Riyanto</td>
          <td><span class="showMangkir" v-b-modal.mdlShowMangkir>2</span></td>
          <td>05:00:00 Jam</td>
          <td style="text-align: center;">
            <button id="btnProses" class="btn btn-lg btn-success" @click="showMsgBoxOne">
                <b-icon-check-circle></b-icon-check-circle>&nbsp;Proses
            </button>
            </td>
        </tr>
         <tr>
          <td>2</td>
          <td>20152738474</td>
          <td>Yusuf</td>
          <td><span class="showMangkir" v-b-modal.mdlShowMangkir>2</span></td>
          <td>04:00:00 Jam</td>
          <td style="text-align: center;">
            <button id="btnProses" class="btn btn-lg btn-success" @click="showMsgBoxOne">
                <b-icon-check-circle></b-icon-check-circle>&nbsp;Proses
            </button>
            </td>
        </tr>

        
        <!-- <tr v-for="item in products" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.product_title }}</td>
          <td>{{ item.product_price }}</td>
          <td>{{ item.created_at }}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
<script>
import "jquery/dist/jquery.min.js";
import 'datatables.net-responsive-dt'
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery";
export default {
  mounted() {
   $('#datatable thead tr')
        .clone(true)
        .addClass('filters')
        .appendTo('#datatable thead');
 
    
    var table = $('#datatable').DataTable({

        // rowReorder: {
        //             selector: 'td:nth-child(2)'
        //         },
      responsive: {
            details: {
                renderer: function ( api, rowIdx, columns ) {
                  console.log(api,rowIdx)
                    var data = $.map( columns, function ( col, i ) {
                      console.log(i)
                        return col.hidden ?
                            '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                                '<td>'+col.title+':'+'</td> '+
                                '<td' + (col.title === 'Edit' ? ' class="td-buttons"' : '') + '>'+col.data+'</td>'+
                            '</tr>' :
                            '';
                    } ).join('');
    
                    return data ?
                        $('<table/>').append( data ) :
                        false;
                }
            }
        },

        columnDefs: [
          { responsivePriority: 1, targets: 1},
          { responsivePriority: 2, targets: 5 },
          { responsivePriority: 3, targets: 3 },
           { responsivePriority: 4, targets: 0 },
        ],
        language: { 
          search: "",
          paginate: {
            first: $('#iconPageFirst'),
            previous: $('#iconPagePrev'),
            next: $('#iconPageNext'),
            last: $('#iconPageLast')
          }
        },
        pageLength : 5,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'ALL']],
        "bInfo" : false,
        "sDom": 'Rfrtlip',
        orderCellsTop: true,
        //fixedHeader: true,
        "pagingType": "full_numbers",
        initComplete: function () {
            var api = this.api();

            api.cells().eq(0).each(function(a)
            {
              //console.log(a)
              if(a.column == 4)
              {
               
                var cell = api.table().cell(a.row,a.column);
               
                console.log(a)
                console.log(a.row+" "+a.column)
                console.log(cell.data())

                var tiempo = cell.data();
                var splitDate = tiempo.split(" ")[0];
                var time = splitDate.split(":");
                var hh = Math.floor(time[0] * 60 *60);
                var min = Math.floor(time[1] * 60);
                var ss = Math.floor(time[2]);
                var totalTime =  Math.floor(hh+min+ss);

                var varTimer = cell.data();
                var x = setInterval(function() {
                    totalTime--;                    
                    var lastDate = new Date(totalTime * 1000).toISOString().substring(11, 19);

                    varTimer =  lastDate;
      
                    if (totalTime < 0) {
                        clearInterval(x);
                        varTimer = "EXPIRED";
                    }
                    cell.data(varTimer).draw();
                }, 1000);
                
              }
            });
           
            // For each column
            api.columns().eq(0).each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    //var title = $(cell).text();
                    if(colIdx != 4 && colIdx !=5)
                    {
                       $(cell).html('<input type="text" placeholder="Filter " />');
                    }
                    else{
                       $(cell).html('');
                    }
                   
 
                    // On every keypress in this input
                    $('input',$('.filters th').eq($(api.column(colIdx).header()).index()))
                        .off('keyup change')
                        .on('change', function () {
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            //var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api.column(colIdx).search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                ).draw();
                        })
                        .on('keyup', function (e) {
                            var cursorPosition = this.selectionStart;
                            e.stopPropagation();
 
                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
    });
    // $('#datatable_filter').hide();
    $('#datatable_filter > label > input').attr("placeholder", "search");
    $('#datatable_filter').prepend($('#btnFilter'));
    $('#datatable_filter > label > input').replaceWith($('#textSearchTable'));
    $('#btnSearchFilter').keyup(function(){
      table.search($(this).val()).draw() ;
    })

    $('.odd').each(function() {
       var doc =$('.filters').find('td');
       console.log(doc)
    });
    //  $('#datatable_first').prepend($('#iconPageFirst'));\
    $('.filters').hide();
    $('#btnFilter').on('click', () => {
          $('th.headerTable.sorting').each(function(i) {
              var doc =$('.filters').find('.headerTable');

              if($(this).hasClass( "dtr-hidden" )){
                console.log(i)
                $(doc[i]).hide()
              }
              else{
                $(doc[i]).show()
              }
          });
          if(!this.isActiveFilter)
          {
            $('.filters').hide();
          }
          else
          {
              $('.filters').show();
              
          }
            
    });
  },
  data: function () {
    return {
      isActiveFilter:false,
      YesNoNotes:'',
      notes:'',
       countDownDate:''
    };
  },
  methods: {
    showFilter() {
      this.isActiveFilter = !this.isActiveFilter;
    },
    konfirmasiMangkir(){
      if(this.notes == '')
      {
        alert('Keterangan tidak boleh kosong!')
      }
      else{
        this.$bvModal.hide('popUpKonfirmasi');
        this.notes = '';
      }
    },
    showMsgBoxOne() {
        this.YesNoNotes = ''
       this.$bvModal.msgBoxConfirm('Apakah ada keterangan lebih lanjut dari karyawan setelah di konfirmasi?', {
          id:'PopUpYesNoKonfirmasi',
          okVariant: 'danger',
          okTitle: 'Tidak',
          cancelTitle: 'Ya',
          cancelVariant: 'success',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.YesNoNotes = value
            console.log(value)
            if(value == true){
              console.log("a");
            }
            else if(value == false){
              this.showMsgBoxTwo();
            }
          })
          .catch(err => {
            console.log(err);
            // An error occurred
          })
      },
      showMsgBoxTwo() {
        const h = this.$createElement
        // Using HTML string
        //const titleVNode = h('div', { domProps: { innerHTML: 'Title from <i>HTML<i> string' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center headerNotesMangkir'] }, [
            h('strong',{style:{'font-size': "18px"}}, 'Proses Karyawan Mangkir')
          ]),
          h('p', { class: ['text-left'], style:{'font-size': "12px"}}, 'Input keterangan hasil konfirmasi dengan karyawan'),
          h('b-form-textarea', {
            props: {
              id:"notesMangkir",
              placeholder:"Catatan",
               rows:"4",
               value: this.notes
            },
            on: { input: (value) => { this.notes = value }}
          }),
          h('b-button', {
            class: ['btnKonfirmasi'],
            props: {
              id:"notesMangkir",
              variant:"success",
            },
            on: {click: () => {this.konfirmasiMangkir()}}
          },'Konfirmasi')

        ])

        this.$bvModal.msgBoxOk([messageVNode], {
          id:'popUpKonfirmasi',
          centered: true,
          'hide-footer':true
        })
      }
  }
};
</script>
<style >
input{
    width: 100%;
    
}
input[type="search"]
{
  padding-left: 15px !important;

}


/* @media (min-width: 768px)
{
  .col-md-auto {
    flex: 0 0 auto;
    width: auto !important;
}

} */

@media (max-width: 991px)
{
  .col-sm-3 {
    flex: 0 0 auto;
    width: 100% !important;
}
}

@media (max-width: 991px)
{
  .col-sm-3 {
    flex: 0 0 auto;
    width: 100% !important;
}

}

@media (max-width: 991px)
{
  .col-sm-3 {
    flex: 0 0 auto;
    width: 100% !important;
}
}
@media (min-width: 992px)
{
  .dataTables_scrollHeadInner{

  width: 100% !important;
}

}

.headerTable {
  font-weight: 500 !important;
}

#datatable{
  margin-bottom: 10px !important;
}
table{
    width:100% !important;
    /* margin-bottom: 10px !important; */
    /* font-family: 'Open Sans';
    font-style: normal; */
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* border-left: 1px solid #DDDDDD !important; */
    /* margin-left: 20px !important; */
}
.dataTables_scroll{
  margin-bottom: 10px !important;
}
tbody{
     background-color: #F9F9F9;
      border-left: none;
}
thead{
    border: 1px solid #DDDDDD;
    background-color: #06283D;
    
;
    color: white;
}

td{
     /* border-left: 1px solid #DDDDDD !important; */
     border-right:  1px solid #DDDDDD !important; 
}

tr{
     /* border-left: 1px solid #DDDDDD !important; */
     border-bottom:  1px solid #DDDDDD !important; 
}
.headerTable{
    /* border-left: 1px solid #DDDDDD !important; */
    border-right:  1px solid #DDDDDD !important; 
    border-bottom: none !important;
}
.dataTables_scrollBody{

  border-bottom: 1px solid white !important;
}

#datatable_filter > label > input{
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: white;
}

#btnFilter{

    background-color: white;
    border-color: 1px solid #333333 !important;
    color: #333333;
    font-size: 14px;
    width: 120px;
    padding: 6px 5px;
    margin-bottom: 2px;
    margin-right: 5px;
}
th{
  text-align: center !important;
}
#spanBtnSearchTable
{
    vertical-align: middle !important;
    background-color: white;
    padding: 5px 10px;
    border: 1px solid #CCCCCC;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.btnFilterActive{
  background-color: #71C018  !important;
  border-color: #71C018  !important;
   color: white !important;
  font-size: 14px;
  width: 120px;
  padding: 5px 5px;
  margin-bottom: 2px;
  margin-right: 5px;

}

#btnProses{

    background-color: #4CAE4C;
    border-color: #4CAE4C;
    font-size: 11px;
    width: 80px;
        padding: 5px 5px;
}

.paginate_button {
  padding: 2px 8px !important;
  border-left: 1px solid #CCCCCC !important;
  border-top: 1px solid #CCCCCC !important;
  border-bottom:  1px solid #CCCCCC !important;
  margin: 0  !important;
  border-radius: 0 !important;
  background-color: #ffffff;

}
.ellipsis {
  padding: 3px 8px !important;
  border-left: 1px solid #CCCCCC !important;
  border-top: 1px solid #CCCCCC !important;
  border-bottom:  1px solid #CCCCCC !important;
  margin: 0  !important;
  border-radius: 0 !important;
  background-color: #ffffff;

}



.last {
  border-right:  1px solid #CCCCCC !important;
  border-radius: 0px 6px 6px 0px !important;
}
.first{
  border-radius: 6px 0px 0px 6px !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    background: #06283D !important;
    color: white !important;
    border-right: none !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {

    background:  #ffffff !important;
}
.dataTables_wrapper .dataTables_length select {
  background: "" !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    color: white !important;
    background:  #06283D !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:active {
color: white !important;
    background:  #06283D !important;

}

.showMangkir{
      color: #2E6DA4 !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    text-decoration: underline;
}

.headerNotesMangkir{
  padding: 10px;
  margin-bottom: 0;
}
#notesMangkir{
      margin-top: 30px;
        margin-bottom: 30px;
}
#popUpKonfirmasi___BV_modal_footer_{
  display: none;
}
.btnKonfirmasi {
  float: right;
  width: 108px !important;
  height: 34px !important;

  background: #71C018 !important;
  border: 1px solid #4CAE4C !important;
  border-radius: 4px !important;
  font-size: 12px !important; 
}
#popUpKonfirmasi___BV_modal_content_{
    width: 448px;
}
#PopUpYesNoKonfirmasi___BV_modal_footer_ button:nth-child(1){
  background: #71C018 !important;
  border: 1px solid #4CAE4C !important;
  border-radius: 4px !important;
  font-size: 14px !important; 
  width: 108px !important;
  height: 34px !important;
}
#PopUpYesNoKonfirmasi___BV_modal_footer_ button:nth-child(2){

  border-radius: 4px !important;
  font-size: 14px !important; 
  width: 108px !important;
  height: 34px !important;
}

.child{
  padding: 0 !important;
}

th:nth-child(1) {  
  /* your stuff here */
  width: 25px !important;
}
</style>