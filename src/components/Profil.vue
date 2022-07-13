<template>
<b-container class="bv-example-row divAll">
    <b-row>
        <b-col sm="3">
            <div class="divAllProfil">
                <div class="divBackgound">
                    <div class="divUploadBackGround"  @click="$refs.fileBackground.click()">
                        <input type="file" ref="fileBackground" style="display: none" @change="onFileChange2">
                        <b-icon-camera-fill class="iconUpload" ></b-icon-camera-fill>
                    </div>
                    <div class="cardBackground" v-bind:style="{ 'background-image': 'url(' + urlBackground + ')' }"></div>
                                         <!-- <b-img :src="backgroundCard"  class="cardBackground2" ></b-img> -->
                </div>

                <div class="cardProfil">
                    <div class="cardName" >
                        <div style="position: relative;top: -47.5px;">
                            <div class="blur">
                                <div class="divUpload"  @click="$refs.filePP.click()">
                                    <input type="file" ref="filePP" style="display: none" @change="onFileChange">
                                    <b-icon-camera-fill class="iconUpload" ></b-icon-camera-fill>
                                </div>
                               
                                <b-img class="m1 imageProfil" :src="imagePP" v-bind="mainProps" rounded="circle" alt="Circle image">
                            </b-img>
                            </div>
                            
                            <p class="textProfil" style="margin-bottom: 5px !important; margin-top: 10px;font-weight: 700;font-size: 18px;line-height: 25px;">Natalia Only</p>
                            <p class="textProfil" style="">2015014987</p>
                            <p class="textProfil" style="font-style: italic;">Software Support Jr. Manager</p>
                            <p class="textProfil" style="font-weight: 500;">Software Support 2</p>
                        </div>
                    </div>
                    <div class="cardName2">
                        <p class="text1">No. HP i.saku</p>
                        <p class="text2">0818930524</p>
                        <p class="text1">ID Telegram</p>
                        <p class="text2">1516620215</p>
                        <p class="text1">Email Pribadi</p>
                        <p class="text2">aditya.natanael@hrindomaret.com</p>
                        <p class="text1">Email Kantor</p>
                        <p class="text2" style="margin-bottom: 0px!important;">dtnatanael@indomaret.co.id</p>
                    </div>
                </div>
            </div>
        </b-col>
        <b-col style="margin-top:20px">
            <div class="cardDetailProfil">
                <div class="cardEmployeeData">
                    <p class="text4">Employee Data</p>
                    <b-row>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Unit</p>
                                    <p class="text3">PT Indomarco Prismatama</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Tanggal Masuk</p>
                                    <p class="text3">01 Desember 2020</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Cabang</p>
                                    <p class="text3">Head Office</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Tanggal Diangkat Tetap</p>
                                    <p class="text3">01 Desember 2021</p>
                                </b-col>
                            </b-row>
                            
                        </b-col>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Status Karyawan</p>
                                    <p class="text3">Tetap</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Hari Kerja</p>
                                    <p class="text3">5 Hari Non Shift</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col sm="3">
                             <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Lama Bekerja</p>
                                    <p class="text3">1831 Hari</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Job Class</p>
                                    <p class="text3">D1</p>
                                </b-col>
                            </b-row>
                            
                        </b-col>
                    </b-row>
                </div>
                 <div class="cardEmployeeData" style="border-top: 1px solid rgba(155, 155, 155, 0.5);">
                    <p class="text4">Personal Data</p>
                    <b-row>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">BPJS Ketenagakerjaan</p>
                                    <p class="text3">0002101810465</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Status Nikah</p>
                                    <p class="text3">Belum Menikah</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                   <p class="text1">Alamat KTP</p>
                                    <p class="text3">PODANG RT 003 RW 002,Paron, KAB. NGAWI; JAWA TIMUR</p>
                                </b-col>
                            </b-row>

                        </b-col>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">BPJS Kesehatan</p>
                                    <p class="text3">813959228646000</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Status Pajak</p>
                                    <p class="text3">T0 - 2022</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Alamat Domisili</p>
                                    <p class="text3">JL. PLUIT KARANG JELITA 10 BLOK D4 UTARA NO.17, Penjaringan, KOTA ADM. JAKARTA UTARA; DKI JAKARTA</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">NPWP</p>
                                    <p class="text3">21000080255</p>
                                </b-col>
                            </b-row>
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">Status Pajak (Perubahan)</p>
                                    <p class="text3">T0 - 2023t</p>
                                </b-col>
                            </b-row>

                        </b-col>
                        <b-col sm="3">
                            <b-row class="rowData">
                                <b-col>
                                    <p class="text1">NPWP</p>
                                    <p class="text3">21000080255</p>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
import imageProfil from "@/assets/images/profil.jpg";
 import imageBackground from "@/assets/images/unsplash.svg";
// import backgroundCard from "@/assets/images/1.jpg";
export default {
    data() {
      return {
        imageProfil,
        // backgroundImage:{backgroundImage:"url('https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000')"},
        urlBackground: imageBackground,
        //backgroundImage:{backgroundImage:urlBakcground},
        imagePP: imageProfil

      }
    },methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    onFileChange2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage2(files[0]);
    },
     createImage2(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.urlBackground= e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.imagePP = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
</script>

<style>
.imageProfil{
    width: 95px;
    height: 95px;
    object-fit: cover;
    border: 3px solid #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

}
.cardProfil{
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 10px !important;
    padding: 20px;
    text-align: center;
    background: #FFFFFF;
   

}
.cardBackground{
    background-image: url("../assets/images/unsplash.svg");
    clip-path: polygon(0 0, 100% 0, 100% 39%, 0 22%);
    width: 100%;height: 100%;position: absolute;border-radius: 10px;

}

.cardBackground2{
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 64%);
        width: 100%;height: 100%;position: absolute;border-radius: 10px;
}

.cardName{
        position: relative;
        height: 160px;
    margin-top: 45px;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}

.textProfil{
    margin-bottom: 2px !important;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
}

.text1{
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #6C6C6C;
    margin-bottom: 2px !important;
}
.text2{
    font-weight: 600;
    font-size: 13px;
    line-height: 150%;
    color: #333333;
     margin-bottom: 12px !important;
}

.text3{
    font-weight: 600;
    font-size: 13px;
    line-height: 150%;
    color: #333333;
     margin-bottom: 0px !important;
}

.text4{
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 0px !important;
}

.cardName2{
    text-align: left;
    margin-top: 25px;
   
}

.cardEmployeeData{
    text-align: left;
        padding: 30px;
}
.cardDetailProfil{
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 10px 0px 0px;

}
.rowData{
    padding-top: 20px;
}

 .triangle {
      width: 0;
      height: 0;
      border-top: 100px solid red;
      border-right: 100px solid transparent;
    }
.divAllProfil{
        margin-top: 20px;
    position: relative;
    overflow: hidden;
    padding-right: 0px !important;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
}


/* .fadein img{
opacity:0.5;
transition: 1s ease;
}

.fadein img:hover{
opacity:1;
transition: 1s ease;
} */

.divUpload{
        width: 45px !important;
    height: 45px !important;
    position: absolute !important;
    right: 0 !important;
    left: 0 !important;
    margin-left: auto !important;
    margin-right: auto !important;
    background-color: rgba(39, 44, 48, 0.75) !important;
    border-radius: 50% !important;
    top: 13% !important;
    z-index: 1 !important;
    display: none;
        cursor: pointer;

}

.iconUpload{
        color: white!important;
    font-size: 20px !important;
    top: 0 !important;
    bottom: 0 !important;
    margin: auto !important;
    position: absolute !important;
    right: 0 !important;
    left: 0 !important;


}

.blur{
width: 95px;
    height: 95px;
    margin: auto;

}
.blur:hover .divUpload {
    display: block;
}

.divUploadBackGround{
width: 45px !important;
    height: 45px !important;
    position: absolute !important;
    right: 4%!important;
    margin-left: auto !important;
    margin-right: auto !important;
    background-color: rgba(39, 44, 48, 0.75) !important;
    border-radius: 50% !important;
    top: 1% !important;
    z-index: 1 !important;
    display: none;
    cursor: pointer;

}

.divBackgound:hover .divUploadBackGround {
        display: block;
}
</style>