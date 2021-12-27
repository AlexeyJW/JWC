<template>
    <div class="display-poster">
        <v-poster />
    </div>
    
    <v-input/>
    
    <v-table-s3-general :title="'All Groups'"/>
    <v-table-s88/>
   
    <v-chart-line/>
     <v-chart />
</template>

<script setup>
    import VTableS3General from '../components/v-table-s3-general.vue'
    import VButton from '../components/v-button.vue'
    import VTableS88 from '../components/v-table-s88.vue'
    import VInput from '../components/v-input.vue'
    import VChart from '../components/v-chart.vue'
    import vPoster from '../components/v-poster.vue'
    import VChartLine from '../components/v-chart-line.vue'
     
</script>

<style></style>