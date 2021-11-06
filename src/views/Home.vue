<template>
    
    <div class="table-s3">
        <v-table-s3/>
       
    </div>
    <div class="v-button-home">
        <v-button/>
    </div>
    <div class="table-s88">
        <v-table-s88/>
    </div>
</template>

<script setup>
    import VTableS3 from '../components/v-table-s3.vue'
    import VButton from '../components/v-button.vue'
    import VTableS88 from '../components/v-table-s88.vue'
</script>

<style scoped>
.table-s3, .table-s88{
        
        display:flex;
        /* background:#888;; */
        justify-content: center;
       /* flex-direction: column; */
        align-items: stretch ;
      
}
.v-button-home{
    display:flex;
    justify-content:center;
}
</style>