<template>
   <div class="v-block-table-s88">
       <h3><strong>General Meeting Report (S-88)</strong></h3>
       <table class="v-table-s88">
           <thead>
               <tr>
                   <th rowspan="2">Year 2022</th>
                   <th colspan="3">Weekdays</th>
                   <th colspan="3">Weekend</th>
                </tr>
                <tr>
                   <th>Total meetings</th>
                   <th>Total attendees</th>
                   <th>Average in week</th>
                    <th>Total meetings</th>
                   <th>Total attendees</th>
                   <th>Average in week</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>September</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.averageWD.toFixed(2)}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='8')?.averageWE.toFixed(2)}}</td>
               </tr>
               <tr>
                   <td>October</td>
                    <td>{{s88?.find(el=>el.month=='9')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.averageWD.toFixed(2)}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='9')?.averageWE.toFixed(2)}}</td>
               </tr>
               <tr>
                   <td>November</td>
                    <td>{{s88?.find(el=>el.month=='10')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='10')?.averageWE}}</td>
               </tr>
               <tr>
                   <td>December</td>
                  <td>{{s88?.find(el=>el.month=='11')?.totalMeetingsWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.averageWD}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalMeetingsWE}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.totalWE}}</td>
                   <td>{{s88?.find(el=>el.month=='11')?.averageWE}}</td>
               </tr>
               <tr>
                   <td>Junuary</td>
                  <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>February</td>
                  <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>Mach</td>
                  <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>April</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>May</td>
                  <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>June</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>July</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>August</td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td colspan="3"><strong>Average:</strong></td>
                   <td></td>
                   <td colspan="2"><strong>Average:</strong></td>
                   <td></td>
               </tr>
           </tbody>
       </table>
   </div>
</template>
<script setup>
   import {useStore} from 'vuex'
   import {ref, computed} from 'vue'

   const store=useStore()

   const s88=computed(()=>store.getters.YEAR_SERVICE('2022'))

</script>
<style>
   .v-block-table-s88{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        margin: 5px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* flex-basis:500px; */
        width:600px;
        
   }
     .v-table-s88{
       border-collapse: collapse;
       border-spacing: 0;
       width:100%;
       overflow: hidden;
       font-size: 12px;

   }
   .v-table-s88 th, .v-table-s88 td{
       border:1px solid #888;
       padding:10px;
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