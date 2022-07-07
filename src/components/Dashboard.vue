<template>
<b-container class="bv-example-row divAll">
  <b-row>
    <b-col>
        <div class="cardDashboard">
            <b-row >
                <b-col cols="12" md="9" class="FirstCard">
                    <p class="textName">Good Morning, Natalia!</p>
                    <p class="textDate">It’s Tuesday, 5 July 2022</p>
                    <p class="textShortcut">Shortcut</p>
                    <div class="divButton">
                        <b-row style="">
                            
                            <b-col><b-button class="btnDashboard">Late Approval</b-button></b-col>
                            <b-col><b-button class="btnDashboard">Waiting Approval</b-button></b-col>
                            <b-col><b-button class="btnDashboard">Draft</b-button></b-col>
                            <b-col><b-button class="btnDashboard">More <b-icon-chevron-down style="float:right"></b-icon-chevron-down></b-button></b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col cols="3" md="3" class="colImage">
                    <div class="divImage">
                        <b-img :src="image"  fluid alt="Responsive image"></b-img>
                    </div>
                     
                    <!-- <b-img :src= fluid alt="Responsive image"></b-img> -->
                </b-col>
                
            </b-row>
         </div>
    </b-col>
  </b-row>
  <b-row >
    <b-col sm="3" style="margin-top:20px">
        <b-row>
            <b-col>
                <div class="cardDashboard">
                    <div class="secondCard" style="border-bottom: 1px solid #C8C8C8;">
                        <p class="textCardHeader">
                            Quick Links
                        </p>
                        <p class="textCard">
                            <span><b-icon-person-circle class="iconCard"></b-icon-person-circle>Profile</span> 
                        </p> 
                        <p class="textCard" style="margin-bottom: 0px;">
                            <span><b-icon-clock class="iconCard"></b-icon-clock>Attendance Logs</span> 
                        </p>
                    </div>
                    <div class="secondCard">
                        <p class="textCardHeader">
                            Applications
                        </p>
                        <p class="textCard">
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-plus" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
                                </svg><span style="padding-left:17px">e-Request</span>
                            </span> 
                        </p> 
                        <p class="textCard">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                                </svg><span style="padding-left:17px">Report Monitoring</span>
                            </span> 
                        </p>
                        <p class="textCard" style="margin-bottom: 0px;">
                            <span><b-icon-envelope class="iconCard"></b-icon-envelope>Management Approval</span> 
                        </p>
                    </div>
                    
                </div>
            </b-col>
        </b-row>
         <b-row>
            <b-col style="margin-top:20px">
                <div class="cardDashboard" style="height:100px">
                </div>
            </b-col>
         </b-row>
       
    </b-col>
    <b-col style="margin-top:20px">
        <b-row>
            <b-col cols="12">
                <div class="cardDashboard">
                    <div class="thirdCard">
                        <b-carousel
                                id="carousel-fade"
                                style="text-shadow: 0px 0px 2px #000"
                                indicators
                                img-width="1024"
                                img-height="180">
                                <b-carousel-slide img-blank img-alt="Blank image">
                                    <p style="font-weight: 600;font-size: 13px; line-height: 18px;text-align:left">Fasilitas Belanja Karyawan (FBK)</p>
                                    <b-row>
                                        <b-col cols="3">
                                            <vue-ellipse-progress           
                                            :progress="chartFBK"
                                            color="#1E63CA"
                                            emptyColor="#D9D9D9"
                                            :thickness="20" 
                                            :emptyThickness="20"
                                            :size="90"
                                            line="butt"
                                            :legend="false"></vue-ellipse-progress>
                                        </b-col>
                                        <b-col class="detailFBK" cols="8">
                                            <p style="font-size: 8px;margin-bottom: 5px;">
                                                <b-icon-square-fill style="font-size: 8px !important;color: #1E63CA; "></b-icon-square-fill>
                                                <span style="margin-left:10px;font-weight: 400;font-size: 13px;line-height: 18px;">My Limit <span style="font-weight: 600;">Rp 700.000</span></span></p>
                                            <p style="font-size: 8px;">
                                                <b-icon-square-fill style="color: #D9D9D9;font-size: 8px !important;"></b-icon-square-fill>
                                                <span style="margin-left:10px;font-weight: 400;font-size: 13px;line-height: 18px;">My Usage <span style="font-weight: 600;">Rp 325.000</span></span>
                                                </p>
                                        </b-col>
                                    </b-row>
                                </b-carousel-slide>
                                <b-carousel-slide img-blank img-alt="Blank image">
                                    <p style="font-weight: 600;font-size: 13px; line-height: 18px;text-align:left;margin-bottom: 0px !important;">Nota Kurang Lebih (NKL)</p>
                                    <b-row>
                                        <b-col cols="4" class="chartNKL">
                                            <apexchart width="200" height="140" type="bar" :options="options" :series="series"></apexchart>
                                        </b-col>
                                        <b-col  class="detailFBK">
                                            <p style="font-size: 13px;line-height: 18px;margin-bottom: 5px;">
                                                <b-row>
                                                    <b-col  style="padding: 0px !important;max-width: 200px !important;">
                                                        <span style="margin-left:10px;font-weight: 400;">Saldo Sebelumnya</span>
                                                    </b-col>
                                                    <b-col cols="4" style="padding: 0px !important;">
                                                            <span style="font-weight: 600;">Rp 2.540.000</span>
                                                    </b-col>
                                                </b-row>
                                            </p>
                                            <p style="font-size: 13px;line-height: 18px;margin-bottom: 5px;">
                                                <b-row>
                                                    <b-col style="padding: 0px !important;max-width: 200px !important;">
                                                        <span style="margin-left:10px;font-weight: 400;">Potongan Bulan Kemarin</span>
                                                    </b-col>
                                                    <b-col cols="4" style="padding: 0px !important;">
                                                            <span style="font-weight: 600;">Rp 500.000</span>
                                                    </b-col>
                                                </b-row>
                                            </p>
                                            <p style="font-size: 13px;line-height: 18px;margin-bottom: 5px;">
                                                <b-row>
                                                    <b-col style="padding: 0px !important;max-width: 200px !important;">
                                                        <span style="margin-left:10px;font-weight: 400;">Total Sisa Saldo</span>
                                                    </b-col>
                                                    <b-col cols="4" style="padding: 0px !important;">
                                                            <span style="font-weight: 600;">Rp 2.040.000</span>
                                                    </b-col>
                                                </b-row>
                                            </p>
                                        </b-col>
                                    </b-row>
                                </b-carousel-slide>
                            </b-carousel>
                    
                    

                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" style="margin-top:20px">
                <div class="cardDashboard" style="height:200px">
                    <b-tabs card>
                    <b-tab title="Announcement" active>
                        <b-card-text>Announcement</b-card-text>
                    </b-tab>
                    <b-tab title="FAQ">
                        <b-card-text>FAQ</b-card-text>
                    </b-tab>
                    </b-tabs>
                </div>
            </b-col>
        </b-row>
       
    </b-col>
    <b-col sm="3" style="margin-top:20px">
        <b-row>
            <b-col>
                <div class="cardDashboard">
                    <div class="fourthCard">
                        <p style="font-weight: 600;font-size: 13px;line-height: 18px;margin-bottom: 0px !important;">Leave Used</p>
                        <p style="font-weight: 600;font-size: 24px;line-height: 33px;margin-bottom: 0px !important;">2/12 Days</p>
                        <p style="font-weight: 300;font-size: 13px;line-height: 18px;text-decoration-line: underline;color: #1600A0;margin-bottom: 0px !important;">Request Leave...</p>
                    </div>
                    <div   class="fourthCard">
                        <p style="font-weight: 600;font-size: 13px;line-height: 18px;margin-bottom: 0px !important;">In Sick Condition?</p>
                        <p style="font-weight: 300;font-size: 13px;line-height: 18px;text-decoration-line: underline;color: #1600A0;margin-bottom: 0px !important;">Request Sick Leave...</p>
                    </div>
                    <div  class="fourthCardBottom" style="border-top: 1px solid #C8C8C8;">
                        <p style="font-weight: 300;font-size: 13px;line-height: 18px;text-decoration-line: underline;color: #1600A0;margin-bottom: 0px !important;">View All</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col style="margin-top:20px">
                <div class="cardDashboard" style="height:200px">
                    <div class="fifthCard" style="border-bottom:1px solid #C8C8C8;margin-bottom: 0px !important; ">
                        <span>
                            <span style="font-weight: 600;font-size: 13px;line-height: 18px;">Who’s Off</span>
                            <span style="font-weight: 600;font-size: 13px;line-height: 25px;color: #BAB9B9;float:right">Today<b-icon-caret-down-fill style="margin-left: 3px;"></b-icon-caret-down-fill> </span>
                        </span>
                        
                    </div>
                </div>
            </b-col>
        </b-row>
     
    </b-col>
  </b-row>

</b-container>
  
</template>

<script>
import image from "@/assets/images/dashboardimg.svg";
//import VueApexCharts from 'vue-apexcharts'


export default {
    components: {

  },
    data() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false,
                    },
                    height:'100px'
                },
                xaxis: {
                categories: [' ', ' ', ' ',' ',' ']
                },
                fill: {
                    colors: ['#48DCC0']
                },
                dataLabels: {
                enabled: false
                }
            },
            series: [{
                name: 'series-1',
                data: [5, 9, 19,3, 20]
            }],
            image,
            chartFBK:40,
        }
    }

}
</script>

<style>
.iconCard{
    font-size: 16px;
    padding-right: 35px;
}

.textCard{
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 13px;
}

.textCardHeader{
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 13px;
}

.cardDashboard{
    background: #FFFFFF !important;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 10px !important;
}

@media (max-width: 765px)
{
  .colImage{
    display: none !important;
}
}

@media (max-width: 622px)
{
  .chartNKL{
    display: none !important;
}
}

@media (min-width: 952px)
{
  .divButton{
    width: 700px !important;
}
}
@media (max-width: 951px)
{
  .divImage{
    width: 380px !important;
    padding-right: 0px !important;
}

}

@media (max-width: 384px)
{
  .detailFBK{
    padding: 20px 20px !important; text-align:left
}

}

.detailFBK{
    padding: 20px 10px; text-align:left
}

  .carousel-indicators li {
    background-color: #D9D9D9 !important;
    width: 24px;
    height: 3px;
    border-radius: 10px;
        margin-left: 5px !important;
  }
.carousel-indicators {
    text-align: right !important;
    float: right !important;
    right: 2% !important;
    left: inherit !important;
    margin:0 !important;
}

  .carousel-indicators .active {
    background-color: #A8A8A8 !important;
    width: 24px;
    height: 3px;
    border-radius: 10px;
    margin-left: 5px !important;
  }


.divImage{
    width: 312px;
    float: right !important;
    padding-right: 40px ;
}

.FirstCard{
    padding: 20px 35px !important;
}

.secondCard{
    padding: 20px 25px !important;
}

.thirdCard{
    padding: 20px 25px;
}

.fourthCard{
    padding: 20px 25px !important;
}

.fourthCardBottom{
    padding: 15px 25px !important;
}

.fifthCard{
    padding: 15px 25px !important;
}

.textName{
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 0 !important;
}
.textDate{
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 1.5rem !important;
}
.textShortcut{
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 0px;
}



.carousel-caption{
        color: black !important;
    text-shadow: none !important;
    left: 0 !important;
    top: 0 !important;
    padding: 0 !important;
    text-align: left;
    right:0 !important;
}

.btnDashboard{
    background: #FFFFFF !important;
    border: 1px solid #DADADA !important;
    border-radius: 15px !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 18px !important;
    color: #000000 !important;
    width: 146px !important;
    margin-top: 10px !important;
 
    /* padding-left: 20px !important;
    padding-right: 20px !important; */
}

.carousel-inner{
   height: 130px !important;
}

.nav-link.active{
    background: transparent  !important;
    border: none !important;
    border-bottom: 2px solid #442CA4 !important;
    
}

.nav-link{
    margin-left: 20px !important;
    color: #000000 !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 18px !important;
        padding: 12px 10px 17px 10px !important;
}

.card-header{
        background: white !important;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
}

</style>