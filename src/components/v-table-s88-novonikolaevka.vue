<template>
   <div class="v-block-table-s88">
       <h3><strong>Общий отчёт о посещении встреч (S-88)</strong></h3>
       <table class="v-table-s88">
           <thead>
               <tr>
                   <th rowspan="2">{{serviceYear}}</th>
                   <th colspan="3">Будни</th>
                   <th colspan="3">Выходные</th>
                </tr>
                <tr>
                   <th>Всего встреч</th>
                   <th>Всего присут.</th>
                   <th>Среднее в неделю</th>
                   <th>Всего встреч</th>
                   <th>Всего присут.</th>
                   <th>Среднее в неделю</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td id="v-table-s88-name-month">Сентябрь</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.averageWD.toFixed(2)}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.averageWE.toFixed(2)}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Октябрь</td>
                    <td>{{s88?.find(el=>el.month=='9')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.averageWD.toFixed(2)}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.averageWE.toFixed(2)}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Ноябрь</td>
                    <td>{{s88?.find(el=>el.month=='10')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Декабрь</td>
                  <td>{{s88?.find(el=>el.month=='11')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Январь</td>
                   <td>{{s88?.find(el=>el.month=='0')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='0')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='0')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='0')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='0')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='0')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Февраль</td>
                   <td>{{s88?.find(el=>el.month=='1')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='1')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='1')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='1')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='1')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='1')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Март</td>
                   <td>{{s88?.find(el=>el.month=='2')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='2')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='2')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='2')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='2')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='2')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Апрель</td>
                   <td>{{s88?.find(el=>el.month=='3')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='3')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='3')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='3')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='3')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='3')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Май</td>
                   <td>{{s88?.find(el=>el.month=='4')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='4')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='4')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='4')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='4')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='4')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Июнь</td>
                   <td>{{s88?.find(el=>el.month=='5')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='5')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='5')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='5')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='5')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='5')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Июль</td>
                   <td>{{s88?.find(el=>el.month=='6')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='6')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='6')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='6')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='6')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='6')?.averageWE}}</td>
               </tr>
               <tr>
                   <td id="v-table-s88-name-month">Август</td>
                   <td>{{s88?.find(el=>el.month=='7')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='7')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='7')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='7')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='7')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='7')?.averageWE}}</td>
               </tr>
               <tr>
                   <td colspan="3"><strong>Среднее:</strong></td>
                    <td>{{averageWD}}</td>
                   <td colspan="2"><strong>Среднее:</strong></td>
                     <td>{{averageWE}}</td>
               </tr>
           </tbody>
       </table>
   </div>
</template>
<script setup>
   import {useStore} from 'vuex'
   import {computed, ref} from 'vue'
   import {isServiceYear} from '../modules/convertMonth.js'
//    import {listenS88, listenChangeS88} from '../modules/initFB.js'
   const serviceYear=ref(isServiceYear(new Date().getFullYear(), new Date().getMonth()))
   const store=useStore()
   const s88=computed(()=>store.getters.YEAR_SERVICE_N(serviceYear.value))
   const averageWD=computed(()=>store.getters.GET_AVERAGE_S88_N_WD)
   const averageWE=computed(()=>store.getters.GET_AVERAGE_S88_N_WE)
</script>
<style>
   .v-block-table-s88{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        /* margin: 5px; */
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* max-width:600px; */
        
   }
     .v-table-s88{
       border-collapse: collapse;
       border-spacing: 0;
       width:100%;
       
       overflow: hidden;
       /* font-size:auto; */

   }
   .v-table-s88 th, .v-table-s88 td{
       border:1px solid #888;
       /* padding:10px; */
       padding:5px;
       text-align: center;
       vertical-align: middle;
       position:relative;

   }
   
   .v-table-s88 td:hover{
       background: #fffabe;

   }
   .v-table-s88 td:hover:before{
       background-color:#eee;
       content:'';
       height: 100%;
       left:-5000px;
       position:absolute;
       top:0;
       width: 10000px;
       z-index: -2;
   }
   .v-table-s88 td:hover:after{
       background-color:#eee;
       content:'';
       height: 10000px;
       left:0;
       position:absolute;
       top:-5000px;
       width: 100%;
       z-index: -1;
   }

</style>