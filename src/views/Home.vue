<template>
   
   <div class="general-group">
    <v-input class="input-block"/>
    <div class="table-s3">
        
        <v-table-s3-general :title="'All Groups'"/>
        
    </div>
    
       
    
    <div class="table-s88">
        <v-table-s88/>
        
    </div>
    <div class="home-chart">
       <v-chart />
    </div>
   
  </div>  
</template>

<script setup>
    import VTableS3General from '../components/v-table-s3-general.vue'
    import VButton from '../components/v-button.vue'
    import VTableS88 from '../components/v-table-s88.vue'
    import VInput from '../components/v-input.vue'
    import VChart from '../components/v-chart.vue'
   
</script>

<style scoped>

.general-group{
     display:flex;
     flex-direction: column;
     align-items:center;
     justify-content: center;
}

</style>