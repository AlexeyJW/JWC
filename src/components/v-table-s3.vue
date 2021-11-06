<template>
    <div class="block-table">
        <div>
            <h3><strong>General Meeting Report (S-3)</strong></h3>
        </div>
        <div>
        <table class="v-table">
            <thead class="v-thead">
                <tr>
                    <th>Week</th>
                    <th>Weekdays</th>
                    <th>Weekend</th>
                    
                </tr>
               
            </thead>
            <tbody class="v-tbody">
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Average:</strong></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
   .block-table{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        margin: 10px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* flex-basis:500px; */
        width:600px;
   }
   .v-table{
       border-collapse: collapse;
       border-spacing: 0;
       width:100%;
       overflow: hidden;
        font-size: 12px;
       

   }
   .v-table th, .v-table td{
       border:1px solid #888;
       padding:10px;
       text-align: center;
       vertical-align: middle;
       position:relative;

   }
   
   .v-table td:hover{
       background: #fffabe;

   }
   .v-table td:hover:before{
       background-color:#eee;
       content:'';
       height: 100%;
       left:-5000px;
       position:absolute;
       top:0;
       width: 10000px;
       z-index: -2;
   }
   .v-table td:hover:after{
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