<template>
   <div class="v-block-table-s88">
       <h3><strong>General Meeting Report (S-88)</strong></h3>
       <table class="v-table-s88">
           <thead>
               <tr>
                   <th>Year 202</th>
                   <th>Total meetings</th>
                   <th>Total attendees</th>
                   <th>Average in week</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>September</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>October</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>November</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>December</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>Junuary</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>February</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>Mach</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>April</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>May</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>June</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>July</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td>August</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td colspan="3"><strong>Average:</strong></td>
                   <td></td>
               </tr>
           </tbody>
       </table>
   </div>
</template>
<script setup>
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